import { ADD_NEW_FURNISHI_ORDER, GET_ALL_FURNISHI_ORDERS } from "../../constants/actionTypes";
import * as api from '../../api/index'

export const addFurnishiOrder = (forderInfo) => async (dispatch) => {
    try {
      const { data } = await api.addFurnishiOrder(forderInfo);
      dispatch({ type: ADD_NEW_FURNISHI_ORDER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getFurnishiOrders = () => async (dispatch) => {
    try {
      const { data } = await api.getFurnishiOrders();
      dispatch({ type: GET_ALL_FURNISHI_ORDERS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  