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

export const getProduct = (param) => (dispatch) => {
    dispatch(getProductRequestAction());
    axios.get("https://cheerful-trunks-duck.cyclic.app/men",param).then((res) => {
        dispatch(getProductSuccessAction(res.data))
    })
    .catch((err) => {
      console.log(err)
      dispatch(getProductFailureAction())
    })
}

export const getWomenPro = (param) => (dispatch) => {
    dispatch(getProductRequestAction());
    axios.get("https://cheerful-trunks-duck.cyclic.app/women",param).then((res) => {
        dispatch(getProductSuccessAction(res.data))
    })
    .catch((err) => {
      console.log(err)
      dispatch(getProductFailureAction())
    })
}
