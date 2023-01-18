import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionType"
import axios from 'axios'

export const getProductRequestAction = () => {
    return {type:GET_PRODUCT_REQUEST}
}


export const getProductSuccessAction = (payload) => {
    return {type:GET_PRODUCT_SUCCESS,payload}
}

export const getProductFailureAction = () => {
    return {type:GET_PRODUCT_FAILURE}
}

export const getProduct = (dispatch) => {
    dispatch(getProductRequestAction());
    axios.get("https://cheerful-trunks-duck.cyclic.app/men").then((res) => {
        dispatch(getProductSuccessAction(res.data))
    })
    .catch((err) => {
        dispatch(getProductFailureAction())
    })
}