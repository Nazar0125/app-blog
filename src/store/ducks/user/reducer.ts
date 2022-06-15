import { UserActionsType } from "./contracts/actionTypes";

const initialState = {
	auth: false,
	user: '',
	error: '',
};
export const UserReducer = (state = initialState, action:any) => {
	switch (action.type) {
		case (UserActionsType.SET_USER) : {
			return {...state, user: action.payload, auth: true}
		}
		default : {
			return state
		}
	}
}



