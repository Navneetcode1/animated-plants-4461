import * as types from "./usergetdataactiontype"
const initstate = {
    isloading:false,
    isError:false,
    userdata:[],
    
}


const usergetdatareducer = (state=initstate,{type,payload}) => {
    
    switch(type){
        case types.GETUSERDATAREQUEST:{
           return{
               ...state,
               isError:false,
               isloading:true,
           }
        }
        case types.GETUSERDATASUCCESS:{
           return{
               ...state,
               isError:false,
               isloading:false,
               userdata:payload,
               
           }
        }
        case types.GETUSERDATAFAILURE:{
           return{
               ...state,
               isError:true,
               isloading:false,      
           }
        }
         default: return state
   }
}

export default usergetdatareducer
