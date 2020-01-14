export class City {

    cityName: string;
    placeKey: string;
    celsius: string;
    farenheight: string;
    weatherText: string;
    weatherIcon: string;
    IsFavorit: boolean;


    constructor(
        cityName: string,
        placeKey: string,
        celsius: string,
        farenheight: string,
        weatherText: string,
        weatherIcon: string,
        isFavorit: boolean) {
            this.cityName = cityName;
            this.placeKey = placeKey;
            this.celsius = celsius;
            this.farenheight = farenheight;
            this.weatherText = weatherText;
            this.weatherIcon = weatherIcon;
            this.IsFavorit = isFavorit;
    }
}

export class Forcast {
    date: string;
    MinCelsius: string;
    MaxCelsius: string;
    minFarenheight: string;
    maxFarenheight: string;
    weatherText: string;
    weatherIcon: string;


    constructor(
        date: string,
        MinCelsius: string,
        MaxCelsius: string,
        minFarenheight: string,
        maxFarenheight: string,
        weatherText: string,
        weatherIcon: string) {
            this.date = date;
            this.MinCelsius = MinCelsius;
            this.MaxCelsius = MaxCelsius;
            this.minFarenheight = minFarenheight;
            this.maxFarenheight = maxFarenheight;
            this.weatherText = weatherText;
            this.weatherIcon = weatherIcon;

    }
}


