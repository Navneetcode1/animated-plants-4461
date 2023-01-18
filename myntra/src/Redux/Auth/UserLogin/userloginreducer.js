
import * as types from "./userloginactiontype"

const initlogin ={
    isError:false,
    isLoading:false,
    token:null
}
export const Loginreducer = (state = initlogin,action)=>{
     
    switch(action.type){
         case types.GETLOGINDATAREQUEST:{
            return{
                ...state,
                isError:false,
                isloading:true,
            }
         }
         case types.GETLOGINDATASUCCESS:{
            return{
                ...state,
                isError:false,
                isloading:false,
                token:action.payload
                
            }
         }
         case types.GETLOGINDATAFALIURE:{
            return{
                ...state,
                isError:true,
                isloading:false,      
            }
         }
          default: return state
    }
   
}