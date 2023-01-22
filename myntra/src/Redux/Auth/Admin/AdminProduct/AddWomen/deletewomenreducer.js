
import { DELETEWOMENPRODFAILURE,DELETEWOMENPRODREQUST,DELETEWOMENPRODSUCCESS } from "./addwomendataactiontype"
const init ={
    isLoading:false,
    isError:false,
    data:"",
}
const deletewomenreducer = (state=init,{type,payload}) => {
   
      switch (type) {
        case DELETEWOMENPRODREQUST:
          return {
          ...state,
            isLoading:true,
            isError:false,
      
          }
        case DELETEWOMENPRODSUCCESS:
          return {
          ...state,
          isLoading:false,
          isError:false,
          data:payload
        }
        case DELETEWOMENPRODFAILURE:
          return {
         ...state,
          isLoading:false, 
          isError:true
    }
    default:
        return state
      }
    }
export default deletewomenreducer
