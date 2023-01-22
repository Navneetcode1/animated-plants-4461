
import axios from 'axios'


import { ADDWOMENAMOUNTFAILURE, ADDWOMENAMOUNTREQUST, ADDWOMENAMOUNTSUCCESS, REDUCEWOMENAMOUNTFAILURE, REDUCEWOMENAMOUNTREQUST, REDUCEWOMENAMOUNTSUCCESS } from './addwomendataactiontype'
export const addwomenamount = (params) =>(dispatch) => {
  dispatch({type:ADDWOMENAMOUNTREQUST})
  return axios.patch("https://cheerful-trunks-duck.cyclic.app/women ",params)
  .then(res=>dispatch({type:ADDWOMENAMOUNTSUCCESS,payload:res.data}))
  .catch(err=>dispatch({type:ADDWOMENAMOUNTFAILURE}))
  
}

export const reducewomenamount = (params) =>(dispatch) => {
  dispatch({type:REDUCEWOMENAMOUNTREQUST})
  return axios.patch("https://cheerful-trunks-duck.cyclic.app/women",params)
  .then(res=>dispatch({type:REDUCEWOMENAMOUNTSUCCESS,payload:res.data}))
  .catch(err=>dispatch({type:REDUCEWOMENAMOUNTFAILURE}))
  
}