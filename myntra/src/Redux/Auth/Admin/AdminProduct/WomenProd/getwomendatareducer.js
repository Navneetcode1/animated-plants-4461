import { GETDATAWOMENERROR, GETDATAWOMENLOADING, GETDATAWOMENSUCCESS } from "./getwomendataactiontype"


const init = {
    isloading:false,
    isError:false,
    womenprod:[]
}
const womenreducer = (state=init,{type,payload}) => {
    switch(type){
        case GETDATAWOMENLOADING:
            return {
                ...state,
                isloading:true,
                isError:false,
            
            }
            case GETDATAWOMENSUCCESS:
                return {
                    ...state,
                    isloading:false,
                    isError:false,
                    prod:payload
                }
                case GETDATAWOMENERROR:
                    return {
                        ...state,
                        isloading:false,
                        isError:true,
                    }
                   default :
                   return state 
}
}
export default womenreducer
