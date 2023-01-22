import { DELETEMENPRODFAILURE,DELETEMENPRODREQUST,DELETEMENPRODSUCCESS  } from "./addmendataactiontype"

const init ={
    isLoading:false,
    isError:false,
    data:"",
}
const deletemenreducer = (state=init,{type,payload}) => {
   
      switch (type) {
        case DELETEMENPRODREQUST:
          return {
          ...state,
            isLoading:true,
            isError:false,
      
          }
        case DELETEMENPRODSUCCESS:
          return {
          ...state,
          isLoading:false,
          isError:false,
          data:payload
        }
        case DELETEMENPRODFAILURE:
          return {
         ...state,
          isLoading:false, 
          isError:true
    }
    default:
        return state
      }
    }
export default deletemenreducer
