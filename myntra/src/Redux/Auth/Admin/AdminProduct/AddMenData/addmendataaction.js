import axios from 'axios'
import { ADDMENPRODFAILURE, ADDMENPRODREQUST, ADDMENPRODSUCCESS } from './addmendataactiontype'



const addmenproductaction = (params)=>(dispatch) => {
         dispatch({type:ADDMENPRODREQUST})
         axios.post("https://cheerful-trunks-duck.cyclic.app/men/",params)
         .then(res=>dispatch({type:ADDMENPRODSUCCESS,payload:res.data}))
         .catch(dispatch({type:ADDMENPRODFAILURE}))
}

export default addmenproductaction