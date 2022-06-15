import { call, takeLatest, put } from "@redux-saga/core/effects";
import { AuthApi } from "../../../api/authApi";
import { SetUser } from "./actionCreators";
import { UserActionsType } from "./contracts/actionTypes";

export function* fetchUserRequest(data:any):any {
    try {
        const user = yield call(AuthApi.auth, data.payload);
        yield put(SetUser(user.user[0]))
        localStorage.setItem('token', user.accessToken);
    }
    catch(error) {
        console.log(error)
    }
}
export function* userSaga() {
    yield takeLatest(UserActionsType.FETCH_USER, fetchUserRequest);
}
