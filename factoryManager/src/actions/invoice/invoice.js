import { ADD_INVOICE, GET_INVOICE } from "../../constants/actionTypes";
import * as api from '../../api/index';

export const addInvoice = (invoiceInfo, navigate) => async (dispatch) => {
    try {
      console.log(invoiceInfo);
      dispatch({ type: ADD_INVOICE, payload: invoiceInfo });
      navigate('/dashboard/invoice');
    } catch (error) {
      console.log(error);
    }
};