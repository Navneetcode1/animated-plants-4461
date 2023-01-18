import React from 'react'
import * as types from "./usersignupactiontype"
const usersignupreducer = () => {
    switch(action.type){
        case types.POSTDATAREQUEST:{
           return{
               ...state,
               isError:false,
               isloading:true,
           }
        }
        case types.POSTDATASUCCESS:{
           return{
               ...state,
               isError:false,
               isloading:false,
               userdata:action.payload,
               
           }
        }
        case types.POSTDATAFAILURE:{
           return{
               ...state,
               isError:true,
               isloading:false,      
           }
        }
         default: return state
   }
  
}

export default usersignupreducer
