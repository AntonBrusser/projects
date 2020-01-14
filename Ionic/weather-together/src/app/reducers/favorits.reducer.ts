import { City } from '../home/classes';
import { FavoritAction, FavoritActionTypes } from '../home/actions/favorits.actions';

const initialState: Array<City> = [];

export function FavoritsReducer(state: Array<City> = initialState, action: FavoritAction) {
  switch (action.type) {
    case FavoritActionTypes.ADD_CITY:
      localStorage.setItem(action.payload.placeKey, action.payload.cityName);
      return [...state, action.payload];
    case FavoritActionTypes.DELETE_CITY:
      localStorage.removeItem(action.payload);
      return state.filter(city => city.placeKey !== action.payload);
    default:
      return state;
  }
}

