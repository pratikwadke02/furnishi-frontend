import { ADD_NEW_ORDER, GET_ALL_ORDERS } from '../../constants/actionTypes';
import * as api from '../../api/index';

export const addOrder = (orderInfo) => async (dispatch) => {
  try {
    const { data } = await api.addOrder(orderInfo);
    dispatch({ type: ADD_NEW_ORDER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getOrders = () => async (dispatch) => {
  try {
    const { data } = await api.getOrders();
    dispatch({ type: GET_ALL_ORDERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
