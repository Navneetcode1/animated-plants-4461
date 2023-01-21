
import {applyMiddleware, legacy_createStore,combineReducers} from "redux";
import { reducer as productDatareducer } from './Products/reducer';
import { reducer } from './Products/reducer';
import {getbannreducer} from  "./Auth/Admin/userauthreducer"
import thunk from 'redux-thunk';
import usergetdatareducer from "./Auth/UserSignup/usergetdatareducer"
import { Loginreducer } from "./Auth/UserLogin/userloginreducer";
import adminloginreducer from "./Auth/Admin/loginreducer";
import womenreducer from "./Auth/Admin/AdminProduct/WomenProd/getwomendatareducer";
import menreducer from "./Auth/Admin/AdminProduct/MenProduct/getmendatareducer";
import addwomenprodreducer from "./Auth/Admin/AdminProduct/AddWomen/addwomendatareducer";
import addmenprodreducer from "./Auth/Admin/AdminProduct/AddMenData/addmenreducer";
import deletemenreducer from "./Auth/Admin/AdminProduct/AddMenData/deletemenreducer";
import deletewomenreducer from "./Auth/Admin/AdminProduct/AddWomen/deletewomenreducer";
import { addwomenamountreducer } from "./Auth/Admin/AdminProduct/AddWomen/womenamountreducer";
import { reducewomenamountreducer } from "./Auth/Admin/AdminProduct/AddWomen/womenamountreducer";
import { addmenamountreducer } from "./Auth/Admin/AdminProduct/AddMenData/menamounreducer";
import { reducemenamountreducer } from "./Auth/Admin/AdminProduct/AddMenData/menamounreducer";
const root = combineReducers({getbannreducer,usergetdatareducer,Loginreducer,adminloginreducer,productDatareducer,womenreducer,menreducer,addwomenprodreducer,addmenprodreducer,deletemenreducer,deletewomenreducer,addwomenamountreducer,reducewomenamountreducer,addmenamountreducer,reducemenamountreducer})
export const store=legacy_createStore(root,applyMiddleware(thunk));



