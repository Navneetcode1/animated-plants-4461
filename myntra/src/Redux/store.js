
import {applyMiddleware, legacy_createStore,combineReducers} from "redux";
import { reducer as productDatareducer } from './Products/reducer';
import { reducer } from './Products/reducer';
import {getbannreducer} from  "./Auth/Admin/userauthreducer"
import thunk from 'redux-thunk';
import usergetdatareducer from "./Auth/UserSignup/usergetdatareducer"
import { Loginreducer } from "./Auth/UserLogin/userloginreducer";
import adminloginreducer from "./Auth/Admin/loginreducer";
const root = combineReducers({getbannreducer,usergetdatareducer,Loginreducer,adminloginreducer,productDatareducer})
export const store=legacy_createStore(root,applyMiddleware(thunk));



