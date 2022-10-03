import { ADD_NEW_STATUS, GET_ALL_STATUSES } from "src/constants/actionTypes";
import * as api from '../../api/index'

export const addStatus = (statusInfo) => async(dispatch) => {
    try{
        const {data} = await api.addStatus(statusInfo);
        dispatch({type: ADD_NEW_STATUS, payload: data});
    }catch(error){
        console.log(error);
    }
}

export const getStatuses = () => async(dispatch) => {
    try{
        const {data} = await api.getStatuses();
        dispatch({type: GET_ALL_STATUSES, payload:data});
    }catch(error){
        console.log(error);
    }
}