

import axios from 'axios'

import { ADDMENAMOUNTFAILURE, ADDMENAMOUNTREQUST, ADDMENAMOUNTSUCCESS, REDUCEMENAMOUNTFAILURE,REDUCEMENAMOUNTREQUST,REDUCEMENAMOUNTSUCCESS } from './addmendataactiontype'
export const addmenamount = (id,count,value) =>(dispatch) => {
  value = +value
  dispatch({type:ADDMENAMOUNTREQUST})
  return axios.patch(`https://cheerful-trunks-duck.cyclic.app/men/${id}`,{
    count:+count+value
  })
  .then(res=>dispatch({type:ADDMENAMOUNTSUCCESS,payload:res.data}))
  .catch(err=>dispatch({type:ADDMENAMOUNTFAILURE}))
  
}

export const reducemenamount = (id,count,value) =>(dispatch) => {
  value = +value
  dispatch({type:REDUCEMENAMOUNTREQUST})
  return axios.patch(`https://cheerful-trunks-duck.cyclic.app/men/${id}`,{
    count:+count-value
  })
  .then(res=>dispatch({type:REDUCEMENAMOUNTSUCCESS,payload:res.data}))
  .catch(err=>dispatch({type:REDUCEMENAMOUNTFAILURE}))
  
}


