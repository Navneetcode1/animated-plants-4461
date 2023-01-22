import axios from "axios"


import { DELETEMENPRODFAILURE,DELETEMENPRODREQUST,DELETEMENPRODSUCCESS  } from "./addmendataactiontype"

const deletemenaction = (id) =>(dispatch) => {
        dispatch({type:DELETEMENPRODREQUST})
       return axios.delete(`https://cheerful-trunks-duck.cyclic.app/men/${id}`)
        .then(res=>dispatch({type:DELETEMENPRODSUCCESS,payload:res.data}))
        .catch(err=>dispatch({type:DELETEMENPRODFAILURE}))
}

export default deletemenaction
