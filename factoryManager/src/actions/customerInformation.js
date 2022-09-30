import { ADD_CUSTOMER_INFO, GET_CUSTOMER_INFO } from "../constants/actionTypes";
import * as api from '../api/index';

export const addCustomerInfo = (customerInfo) => async (dispatch) => {
    try{
        const response = await api.addCustomerInfo(customerInfo);
        dispatch({
            type: ADD_CUSTOMER_INFO,
            payload: response
        });
    }catch(error){
        console.log(error);
    }
}

export const getCustomerInfo = () => async (dispatch) => {
    try{
        const response = await api.getCustomerInfo();
        dispatch({
            type: GET_CUSTOMER_INFO,
            payload: response
        });
    }catch(error){
        console.log(error);
    }
}