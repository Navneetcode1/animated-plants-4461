
import * as types from "./userauthactiontype"
const init = {
    isLoading: false,
    isError: false,
    banneduserlist:[]
}


export const getbannreducer = (state = init, action) => {
 
    switch (action.type) {
        case types.BANNUSERREQUEST: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            }
        }
        case types.BANNUSERSUCCESS: {
            return {
                ...state,
                isError: false,
                isLoading: false,
                banneduserlist:action.payload
            }
        }
        case types.DBANNUSERFAILURE: {
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        }
        default:
            return state
    }
}
const init2 = {
    isLoading: false,
    isError: false,
  
}


export const addbannreducer = (state = init2, action) => {
   
    switch (action.type) {
        case types.ADDBANNREQUEST: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            }
        }
        case types.ADDBANNSUCCESS: {
            return {
                ...state,
                isError: false,
                isLoading: false,
                
            }
        }
        case types.ADDBANNFAILURE: {
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        }
        default:
            return state
    }
}
const init3 = {
    isLoading: false,
    isError: false,
    
}

export const removebannreducer = (state = init3, action) => {
    console.log(action.payload)
    console.log(action.type)
    switch (action.type) {
        case types.REMOVEBANNREQUEST: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            }
        }
        case types.REMOVEBANNSUCCESS: {
            return {
                ...state,
                isError: false,
                isLoading: false,
               
            }
        }
        case types.REMOVEBANNFAILURE: {
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        }
        default:
            return state
    }
}