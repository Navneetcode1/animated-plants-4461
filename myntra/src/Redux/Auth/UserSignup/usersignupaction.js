import React from 'react'
import axios from "axios"
import * as types from "./usersignupactiontype"
const usersignupaction = (params) =>(dispatch) => {
    dispatch({type:types.POSTDATAREQUEST})
    return axios.post("https://awful-fly-shoulder-pads.cyclic.app/user_signup",params)
    .then(r=>dispatch({type:types.POSTDATASUCCESS,payload:r.data}))
    .catch(e=>dispatch({type:types.POSTDATAFAILURE}))
}

export default usersignupaction
