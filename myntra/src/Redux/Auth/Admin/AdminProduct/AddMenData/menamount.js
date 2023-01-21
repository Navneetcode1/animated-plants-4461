

import axios from 'axios'

import { ADDMENAMOUNTFAILURE, ADDMENAMOUNTREQUST, ADDMENAMOUNTSUCCESS, REDUCEMENAMOUNTFAILURE,REDUCEMENAMOUNTREQUST,REDUCEMENAMOUNTSUCCESS } from './addmendataactiontype'
export const addmenamount = (params) =>(dispatch) => {
  console.log(params)
  dispatch({type:ADDMENAMOUNTREQUST})
  return axios.post("https://cheerful-trunks-duck.cyclic.app/men",params)
  .then(res=>dispatch({type:ADDMENAMOUNTSUCCESS,payload:res.data}))
  .catch(err=>dispatch({type:ADDMENAMOUNTFAILURE}))
  
}

export const reducemenamount = (params) =>(dispatch) => {
  console.log(params)
  dispatch({type:REDUCEMENAMOUNTREQUST})
  return axios.post("https://cheerful-trunks-duck.cyclic.app/men",params)
  .then(res=>dispatch({type:REDUCEMENAMOUNTSUCCESS,payload:res.data}))
  .catch(err=>dispatch({type:REDUCEMENAMOUNTFAILURE}))
  
}


