import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import { rootReducer } from "./rootReducer";
import rootSaga from './saga'
import { UserStateType } from "./ducks/user/contracts/state";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    whitelist : [ 'user' ]
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = (
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
export const persistor = persistStore(store)
sagaMiddleware.run(rootSaga);

export interface RootState {
    user: UserStateType;
};