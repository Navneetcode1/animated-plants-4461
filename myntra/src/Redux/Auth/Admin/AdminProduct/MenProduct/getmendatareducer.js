import React from 'react'

import { GETMENDATAERROR, GETMENDATALOADING, GETMENDATASUCCESS } from './getmendataactiontype'
const init = {
    isloading:false,
    isError:false,
    menprod:[]
}
const menreducer = (state=init,{type,payload}) => {
    switch(type){
        case GETMENDATALOADING:
            return {
                ...state,
                isloading:true,
                isError:false,
            
            }
            case GETMENDATASUCCESS:
                return {
                    ...state,
                    isloading:false,
                    isError:false,
                    prod:payload
                }
                case GETMENDATAERROR:
                    return {
                        ...state,
                        isloading:false,
                        isError:true,
                    }
                   default :
                   return state 
}
}
export default menreducer
