import axios from "axios"


import { DELETEWOMENPRODFAILURE,DELETEWOMENPRODREQUST,DELETEWOMENPRODSUCCESS } from "./addwomendataactiontype"

const deletewomenaction  = (id) =>(dispatch) => {
        dispatch({type:DELETEWOMENPRODREQUST})
       return axios.delete(`https://cheerful-trunks-duck.cyclic.app/women/${id}`)
        .then(res=>dispatch({type:DELETEWOMENPRODSUCCESS,payload:res.data}))
        .catch(err=>dispatch({type:DELETEWOMENPRODFAILURE}))
}

export default deletewomenaction