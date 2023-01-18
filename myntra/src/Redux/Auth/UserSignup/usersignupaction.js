import React from 'react'
import * as types from "./usersignupactiontype"
const usersignupaction = (params) =>(dispatch) => {
    dispatch({type:types.POSTDATAREQUEST})
    return axios.post("https://appletvusers.onrender.com/users",params)
    .then(r=>dispatch({type:types.POSTDATASUCCESS,payload:r.data}))
    .catch(e=>dispatch({type:types.POSTDATAFAILURE}))
}

export default usersignupaction
