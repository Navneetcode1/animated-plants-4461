import React from 'react'
import axios from 'axios'
import * as types from "./usergetdataactiontype"
const usergetdataaction = ()=>(dispatch) => {
    dispatch({type:types.GETUSERDATAREQUEST})
    return axios.get("https://awful-fly-shoulder-pads.cyclic.app/user_signup")
    .then((r)=>{dispatch({type:types.GETUSERDATASUCCESS,payload:r.data})})
    .catch(err=>dispatch({type:types.GETUSERDATAFAILURE}))
}

export default usergetdataaction
