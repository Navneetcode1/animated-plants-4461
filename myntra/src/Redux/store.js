import {applyMiddleware, legacy_createStore} from "redux";
import { reducer as productDatareducer } from './Products/reducer';
import { combineReducers } from "redux";
import thunk from 'redux-thunk';
const rootReducer=combineReducers({productDatareducer})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));