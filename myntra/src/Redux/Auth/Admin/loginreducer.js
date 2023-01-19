import React from 'react'
import * as types from "./lginactiontype"

const initstate = {
    isError : false,
    isLoading :false,
    admindata :[],
}
const loginreducer = (state=initstate,{type,payload}) => {
     switch (type){
         case types.GETADMINDATAREQUEST:{
            return{
                ...state,
              isError : false,
              isLoading:true,

            }
         }
         case types.GETADMINDATASUCCESS:{
            return{
                ...state,
              isError : false,
              isLoading:false,
              admindata : payload
            }
         }
         case types.GETADMINDATAFAILURE:{
            return{
                ...state,
              isError : true,
              isLoading:false,
              
            }
         }
         default :
         return state
    }

  
}

export default loginreducer
