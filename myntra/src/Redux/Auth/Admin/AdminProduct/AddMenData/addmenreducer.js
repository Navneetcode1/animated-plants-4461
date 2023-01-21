
import { ADDMENPRODFAILURE, ADDMENPRODREQUST, ADDMENPRODSUCCESS } from './addmendataactiontype'

const init ={
    isLoading:false,
    isError:false,
    data:"",
}
const addmenprodreducer = (state=init,{type,payload}) => {
      switch (type) {
        case ADDMENPRODREQUST:
          return {
          ...state,
            isLoading:true,
            isError:false,
            data:payload
          }
        case ADDMENPRODSUCCESS:
          return {
          ...state,
          isLoading:false,
          isError:false,
          data:payload
        }
        case ADDMENPRODFAILURE:
          return {
         ...state,
          isLoading:false, 
    }
    default:
        return state
      }
    }
export default addmenprodreducer
