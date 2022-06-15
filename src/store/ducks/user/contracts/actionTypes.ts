import { Action } from "redux";
import { userTypes } from "./state";

export enum UserActionsType {
    SET_USER = 'user/SET_USER',
    FETCH_USER = 'user/FETCH_USER',
}

export interface SetUserTypes extends Action<UserActionsType> {
    type: UserActionsType.SET_USER;
    payload: userTypes;
}

export interface SetFetchTypes extends Action<UserActionsType> {
    type: UserActionsType.FETCH_USER;
    payload: any
}