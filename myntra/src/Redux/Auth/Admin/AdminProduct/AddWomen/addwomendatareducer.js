import { ADDWOMENPRODFAILURE, ADDWOMENPRODREQUST, ADDWOMENPRODSUCCESS } from "./addwomendataactiontype"





const init ={
    isLoading:false,
    isError:false,
    data:"",
}
const addwomenprodreducer = (state=init,{type,payload}) => {

      switch (type) {
        case ADDWOMENPRODREQUST:
          return {
          ...state,
            isLoading:true,
            isError:false,
            data:payload
          }
        case ADDWOMENPRODSUCCESS:
          return {
          ...state,
          isLoading:false,
          isError:false,
          data:payload
        }
        case ADDWOMENPRODFAILURE:
          return {
         ...state,
          isLoading:false, 
    }
    default:
        return state
      }
    }
export default addwomenprodreducer