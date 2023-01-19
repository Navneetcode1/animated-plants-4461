import axios from "axios"
import * as types from "./adminactiontype"
const loginaction = () =>(dispatch)=> {
    dispatch({type:types.GETADMINDATAREQUEST})
    return axios.get("https://appletvusers.onrender.com/admins")
    .then(r=>dispatch({type:types.GETADMINDATASUCCESS,payload:r.data}))
    .catch(e=>dispatch({type:types.GETADMINDATAFAILURE}))
}

export default loginaction
