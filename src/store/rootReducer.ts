import { combineReducers } from "redux";
import { UserReducer } from "./ducks/user/reducer";

export const rootReducer = combineReducers({
    user: UserReducer,
});