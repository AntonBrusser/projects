import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
import { City , Forcast } from './classes';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/models/app-state.model';
import { Observable } from 'rxjs';
import { v4 as uuid} from 'uuid';
import { AddCityAction, DeleteCityAction } from './actions/favorits.actions';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  cities$: Observable<Array<City>>;
  newCity: City = {
  cityName: '',
  placeKey: '',
  celsius: '',
  farenheight: '',
  weatherText: '',
  weatherIcon: '',
  IsFavorit: false
  };

// ***********Boolians**********
  favoritsPage = false;
  homePage = true;

  showFavLable = true;
  tryAgainLable = false;

// ***********Variables**********
  apiKey: any = 'b76b6f56e20b4cacbd97903c4c0305ab';
  q: string;

  cityName = '';
  placeKey = '';
  celsius = '';
  farenheight = '';
  weatherText = '';
  weatherIcon = '';
  isFavorit = false;

  fiveForcasts: Forcast[];
  favoritCities: City[] = [];

  timer: any;


  constructor(public httpClient: HttpClient, public geolocation: Geolocation, private store: Store<AppState>) {  }

  ngOnInit() {
    this.cities$ = this.store.select(store => store.favorit);
    this.getCurrentLocation();
    localStorage.clear();
    console.log(localStorage);

  }

// ***************************************************************************
// ***********Get Your Location Data From Geolocation Module and API**********
  getCurrentLocation() {
    this.geolocation.getCurrentPosition().then((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      this.getCurrentPlaceData(latitude, longitude);
    });
  }

  getCurrentPlaceData(latitude, longitude) {
    const url = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${this.apiKey}`;
    this.httpClient.get(url).subscribe((placeData) => {
      const obj =  placeData;
      console.log(obj);
      this.getCurrentTemprature(obj.data[0].city_name);
      this.getCurrentFiveForcasts(obj.data[0].city_name);
      this.placeKey = obj.data[0].city_name.toString();
      this.cityName = obj.data[0].city_name;
    });
  }



  // ***************************************************************************
// ***********Get Data From API Acording The Sherch Bar************************

  onKey(event: any) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => { this.getChakedPlaceData(); }, 2000);
  }

  getChakedPlaceData() {
    const url = 'https://api.weatherbit.io/v2.0/current?city=' + this.q + '&key=' + this.apiKey;
    this.httpClient.get(url).subscribe((placeData) => {
      const obj =  placeData;
      console.log(obj);
      if (obj === null) {
        this.tryAgainLable = true;
        this.q = '';
      } else {
        this.tryAgainLable = false;
        this.getCurrentTemprature(obj.data[0].city_name);
        this.getCurrentFiveForcasts(obj.data[0].city_name);

        this.placeKey = obj.data[0].city_name.toString();
        this.cityName = obj.data[0].city_name;

        console.log(this.placeKey, this.cityName);

        if (localStorage.getItem(this.placeKey) !== null) {
          this.isFavorit = true;
        } else {
          this.isFavorit = false;
        }
      }
    });
  }

  getCurrentTemprature(placeID) {
    const url = 'https://api.weatherbit.io/v2.0/current?city=' + placeID + '&key=' + this.apiKey;
    this.httpClient.get(url).subscribe((TemperatureData) => {
      const obj =  TemperatureData;
      console.log(obj);
      this.weatherText = obj.data[0].weather.description;
      this.celsius = obj.data[0].temp + '°C';

      const imageNumber = (obj.data[0].weather.icon).toString();
      // if ( imageNumber.length === 1) {
      //   imageNumber = '0' + imageNumber;
      // }
      console.log(imageNumber);
      this.weatherIcon = 'https://www.weatherbit.io/static/img/icons/' + imageNumber + '.png';
    });
  }


  getCurrentFiveForcasts(placeID) {
    this.fiveForcasts = [];
    const url = 'https://api.weatherbit.io/v2.0/forecast/daily?city=' + placeID + '&key=' + this.apiKey;
    this.httpClient.get(url).subscribe((TemperatureData) => {
      const obj =  TemperatureData;
      console.log(obj);

      for (let i = 1; i < 6; i++) {

        const icon = obj.data[i].weather.icon.toString();
        // if (icon.length < 2) {
        //   icon = '0' + icon;
        // }

        this.fiveForcasts.push(new Forcast(
          obj.data[i].datetime,
          (obj.data[i].app_min_temp).toString() + '°C',
          (obj.data[i].app_max_temp).toString() + '°C',
          obj.data[i].app_min_temp + '°F',
          obj.data[i].app_max_temp + '°F',
          obj.data[i].weather.description,
          'https://www.weatherbit.io/static/img/icons/' + icon + '.png'));

      }

      console.log(this.fiveForcasts);
      this.q = '';
    });
  }




// *********************************************************************
// ********************* LPADS DATA OF CITY FROM FAVORITS***************
  openFavoriteCity(keyOfCity, nameOfCity) {
    this.cityName = nameOfCity;
    this.placeKey = keyOfCity.toString();
    this.isFavorit = true;
    this.getCurrentTemprature(this.placeKey);
    this.getCurrentFiveForcasts(this.placeKey);
    this.favoritsPage = false;
    this.homePage = true;
  }



// *********************************************************************
// ********************* ADD CITY TO FAVORITS **************************
  addToFavorits() {
    this.isFavorit = true;
    this.addCityToFavorits();
  }
  addCityToFavorits() {
    this.newCity.placeKey = uuid();
    this.store.dispatch(new AddCityAction({
      cityName: this.cityName,
      placeKey: this.placeKey.toString(),
      celsius: this.celsius,
      farenheight: this.farenheight,
      weatherText: this.weatherText,
      weatherIcon: this.weatherIcon,
      IsFavorit: this.isFavorit}
    ));
  }



// *********************************************************************
// ********************* REMOVE CITY TO FAVORITS **************************
  removeFromFavorits() {
    this.isFavorit = false;
    this.removeCityFromFavorits(this.placeKey);
  }
  removeCityFromFavorits(placeKey: string) {
    this.store.dispatch(new DeleteCityAction(placeKey));
  }



  // *********************************************************************
// ********************* NG-IFs - Show/Hide Elements**********************

  showFavorits() {
    this.favoritsPage = true;
    this.homePage = false;
    if (localStorage.getItem(this.placeKey) !== null) {
      this.showFavLable = false;
    } else {
      this.showFavLable = true;
    }
    if (localStorage.length !== 0) {
      this.showFavLable = false;
    }
  }

  showHome() {
    this.favoritsPage = false;
    this.homePage = true;
  }

}
