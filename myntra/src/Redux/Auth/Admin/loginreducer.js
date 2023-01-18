import React from 'react'
import * as types from "./adminactiontype"

const initstate = {
    isError : false,
    isLoading :false,
    admindata :[],
}
const loginreducer = (state=initstate,{type,payload}) => {
     switch (action.type){
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
              admindata : action.payload
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
