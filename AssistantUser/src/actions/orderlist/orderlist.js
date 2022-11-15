import { ADD_NEW_ORDER_LIST, GET_ALL_ORDER_LISTS, GET_ORDERLIST_BY_ASSISTANT_USER, LOADING } from "../../constants/actionTypes";
import * as api from '../../api/index'

export const addOrderList = (orderListInfo) => async(dispatch) => {
    try{
        const {data} = await api.addOrderList(orderListInfo);
        dispatch({type: ADD_NEW_ORDER_LIST, payload:data});
    }catch(error){
        console.log(error);
    }
}

export const getOrderLists = () => async (dispatch) => {
    try{
        const {data} = await api.getOrderLists();
        dispatch({type: GET_ALL_ORDER_LISTS, payload:data});
    }catch(error){
        console.log(error);
    }
}

export const getOrderListByAssistantUser = (assistantUserId) => async (dispatch) => {
    dispatch({
        type: LOADING,
        payload: null
    });
    try{
        const {data} = await api.getOrderListByAssistantUser(assistantUserId);
        dispatch({type: GET_ORDERLIST_BY_ASSISTANT_USER, payload:data});
    }catch(error){
        console.log(error);
    }
}

