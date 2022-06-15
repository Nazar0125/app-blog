import { SetFetchTypes, SetUserTypes, UserActionsType } from './contracts/actionTypes';
import { userTypes } from './contracts/state';

export const FetchUser = (payload:any):SetFetchTypes => ({
    type: UserActionsType.FETCH_USER,
	payload
});

export const SetUser = (payload: userTypes):SetUserTypes => ({
    type: UserActionsType.SET_USER,
    payload
});
