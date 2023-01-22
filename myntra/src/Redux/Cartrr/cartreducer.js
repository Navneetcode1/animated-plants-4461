import React from 'react'
import { ADDCARTLOADING, ADDCARTLOADINGERROR, ADDCARTSUCCESS } from './actionType'

const init= {
    isloadin:false,
    iserror:false,
    data:""
}



const cartreducer = (state=init,{type,payload}) => {
      switch (type){
         case ADDCARTLOADING:{
             return{
                ...state,
                isloadin:true,
             }
         }
         case ADDCARTLOADINGERROR:{
            return{
                ...state,
                isloadin:false,
                iserror:true,
            }
         }
         case ADDCARTSUCCESS:{
            return{
               ...state,
               isloadin:false,
               iserror:false,
               data:payload
      
      }
    }
    default:
        return state
}
}

export default cartreducer