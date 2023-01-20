import axios from "axios"
import { GETDATAWOMENERROR, GETDATAWOMENLOADING, GETDATAWOMENSUCCESS } from "./getwomendataactiontype"




export const getwomenData = () =>(dispatch) => {
    dispatch({type:GETDATAWOMENLOADING})
    axios.get("https://cheerful-trunks-duck.cyclic.app/women")
    .then(res=>dispatch({type:GETDATAWOMENSUCCESS,payload:res.data}))
    .catch(err=>dispatch({type:GETDATAWOMENERROR}))
}