import { ADD_CUSTOMER_REG, GET_CUSTOMER_REG } from '../constants/actionTypes';
import * as api from '../api/index';

export const addCustomerReg = (customerReg) => async (dispatch) => {
    try{
        const response = await api.addCustomerReg(customerReg);
        dispatch({
            type: ADD_CUSTOMER_REG,
            payload: response
        });
    }catch(error){
        console.log(error);
    }
}

export const getCustomerReg = () => async (dispatch) => {
    try{
        const response = await api.getCustomerReg();
        dispatch({
            type: GET_CUSTOMER_REG,
            payload: response
        });
    }catch(error){
        console.log(error);
    }
}