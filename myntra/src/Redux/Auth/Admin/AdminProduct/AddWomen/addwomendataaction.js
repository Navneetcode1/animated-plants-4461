import axios from 'axios'
import { ADDWOMENPRODFAILURE, ADDWOMENPRODREQUST, ADDWOMENPRODSUCCESS } from './addwomendataactiontype'


const addwomenaction = (params)=>(dispatch) => {
      dispatch({type:ADDWOMENPRODREQUST})
      axios.post("https://cheerful-trunks-duck.cyclic.app/women",params)
      .then(res=>dispatch({type:ADDWOMENPRODSUCCESS,payload:res.data}))
      .catch(err=>dispatch({type:ADDWOMENPRODFAILURE}))
}

export default addwomenaction
