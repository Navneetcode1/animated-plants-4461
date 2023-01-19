
import {applyMiddleware, legacy_createStore,combineReducers} from "redux";
import { reducer } from './Products/reducer';
import {getbannreducer} from  "./Auth/Admin/userauthreducer"
import thunk from 'redux-thunk';
import usergetdatareducer from "./Auth/UserSignup/usergetdatareducer"
import { Loginreducer } from "./Auth/UserLogin/userloginreducer";
import adminloginreducer from "./Auth/Admin/loginreducer";
const root = combineReducers({getbannreducer,usergetdatareducer,Loginreducer,adminloginreducer})
export const store=legacy_createStore(root,applyMiddleware(thunk));

import {applyMiddleware, legacy_createStore} from "redux";
import { reducer as productDatareducer } from './Products/reducer';
import { combineReducers } from "redux";
import thunk from 'redux-thunk';
const rootReducer=combineReducers({productDatareducer})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));

