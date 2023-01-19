import axios from "axios"
import * as types from "./lginactiontype"
const adminloginreducer = () =>(dispatch)=> {
    dispatch({type:types.GETADMINDATAREQUEST})
    return axios.get("https://awful-fly-shoulder-pads.cyclic.app/admin_signup")
    .then(r=>dispatch({type:types.GETADMINDATASUCCESS,payload:r.data}))
    .catch(e=>dispatch({type:types.GETADMINDATAFAILURE}))
}

export default adminloginreducer
