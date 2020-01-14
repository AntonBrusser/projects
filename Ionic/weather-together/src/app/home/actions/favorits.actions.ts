import { Action } from '@ngrx/store';
import { City } from '../classes';


export enum FavoritActionTypes {
    ADD_CITY = '[FAVORIT] Add City',
    DELETE_CITY = '[FAVORIT] Delete City'
    // ADD_CITY_SUCCESS = '[FAVORIT] Add City Success',
    // ADD_CITY_FAILURE = '[FAVORIT] Add City Failure',
}

export class AddCityAction implements Action {
    readonly type = FavoritActionTypes.ADD_CITY;

    constructor(public payload: City) {}
}

export class DeleteCityAction implements Action {
    readonly type = FavoritActionTypes.DELETE_CITY;

    constructor(public payload: any) {}
}

export type FavoritAction = AddCityAction | DeleteCityAction;
