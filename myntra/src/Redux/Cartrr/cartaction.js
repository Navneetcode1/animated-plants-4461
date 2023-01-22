import axios from 'axios'
import React from 'react'
import { ADDCARTLOADING, ADDCARTLOADINGERROR, ADDCARTSUCCESS } from './actionType'

const cartaction = (id,newcart)=>(dispatch) => {
    dispatch({type:ADDCARTLOADING})
    axios.patch(`https://awful-fly-shoulder-pads.cyclic.app/user_signup/${id}`,{
        cart:newcart
    }).then(res=>dispatch({type:ADDCARTSUCCESS,payload:res.data}))
    .catch(err=>dispatch({type:ADDCARTLOADINGERROR}))
}

export default cartaction