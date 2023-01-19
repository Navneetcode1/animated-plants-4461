import axios from "axios"
import * as types from "./edituseractiotype"





export const getbanuserdata = () => (dispatch) => {
    dispatch({ type: types.BANNUSERREQUEST })
    return axios.get("https://appletvusers.onrender.com/banned")
        .then(r => dispatch({ type: types.BANNUSERSUCCESS, payload: r.data }))
        .catch(e => dispatch({ type: types.DBANNUSERFAILURE }))
}

export const banuser = (data) => (dispatch) => {
    dispatch({ type: types.ADDBANNREQUEST })
    return axios.post("https://appletvusers.onrender.com/banned", data)
        .then(r => dispatch({ type: types.ADDBANNSUCCESS, payload: r.data }))
        .catch(e => dispatch({ type: types.ADDBANNFAILURE }))
}



export const removeban = (data) => (dispatch) => {
    dispatch({ type: types.REMOVEBANNREQUEST })
    return axios.delete("https://appletvusers.onrender.com/banned", data)
        .then(r => dispatch({ type: types.REMOVEBANNSUCCESS, payload: r.data }))
        .catch(e => dispatch({ type: types.REMOVEBANNFAILURE }))
}