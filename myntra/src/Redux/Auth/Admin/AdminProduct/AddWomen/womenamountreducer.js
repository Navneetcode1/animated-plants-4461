

import { ADDWOMENAMOUNTFAILURE, ADDWOMENAMOUNTREQUST, ADDWOMENAMOUNTSUCCESS, REDUCEWOMENAMOUNTFAILURE, REDUCEWOMENAMOUNTREQUST, REDUCEWOMENAMOUNTSUCCESS } from './addwomendataactiontype'
const init ={
    isLoading:false,
    isError:false,
    data:"",
}
export const reducewomenamountreducer = (state=init,{type,payload}) => {
   
      switch (type) {
        case REDUCEWOMENAMOUNTREQUST:
          return {
          ...state,
            isLoading:true,
            isError:false,
      
          }
        case REDUCEWOMENAMOUNTSUCCESS:
          return {
          ...state,
          isLoading:false,
          isError:false,
          data:payload
        }
        case REDUCEWOMENAMOUNTFAILURE:
          return {
         ...state,
          isLoading:false, 
          isError:true
    }
    default:
        return state
      }
    }
    const init2 ={
        isLoading:false,
        isError:false,
        data:"",
    }
    export const addwomenamountreducer = (state=init2,{type,payload}) => {
   
        switch (type) {
          case ADDWOMENAMOUNTREQUST:
            return {
            ...state,
              isLoading:true,
              isError:false,
        
            }
          case ADDWOMENAMOUNTSUCCESS:
            return {
            ...state,
            isLoading:false,
            isError:false,
            data:payload
          }
          case ADDWOMENAMOUNTFAILURE:
            return {
           ...state,
            isLoading:false, 
            isError:true
      }
      default:
          return state
        }
      }
  
  