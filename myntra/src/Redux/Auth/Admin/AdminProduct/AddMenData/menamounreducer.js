import { ADDMENAMOUNTFAILURE, ADDMENAMOUNTREQUST, ADDMENAMOUNTSUCCESS, REDUCEMENAMOUNTFAILURE, REDUCEMENAMOUNTREQUST, REDUCEMENAMOUNTSUCCESS } from "./addmendataactiontype"



const init ={
    isLoading:false,
    isError:false,
    data:"",
}
export const reducemenamountreducer = (state=init,{type,payload}) => {
   
      switch (type) {
        case REDUCEMENAMOUNTREQUST:
          return {
          ...state,
            isLoading:true,
            isError:false,
      
          }
        case REDUCEMENAMOUNTSUCCESS:
          return {
          ...state,
          isLoading:false,
          isError:false,
          data:payload
        }
        case REDUCEMENAMOUNTFAILURE:
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
    export const addmenamountreducer = (state=init2,{type,payload}) => {
   
        switch (type) {
          case ADDMENAMOUNTREQUST:
            return {
            ...state,
              isLoading:true,
              isError:false,
        
            }
          case ADDMENAMOUNTSUCCESS:
            return {
            ...state,
            isLoading:false,
            isError:false,
            data:payload
          }
          case ADDMENAMOUNTFAILURE:
            return {
           ...state,
            isLoading:false, 
            isError:true
      }
      default:
          return state
        }
      }
  
  