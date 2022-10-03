import { ADD_NEW_STATUS_ACTION, GET_ALL_STATUS_ACTIONS } from "src/constants/actionTypes";
import * as api from '../../api/index'

export const addStatusAction = (statusActionInfo) => async(dispatch) => {
    try{
        const {data} = await api.addStatusAction(statusActionInfo);
        dispatch({type: ADD_NEW_STATUS_ACTION, payload: data});
    }catch(error){
        console.log(error);
    }
}

export const getStatusActions = () => async(dispatch) => {
    try{
        const {data} = await api.getStatusActions();
        dispatch({type: GET_ALL_STATUS_ACTIONS, payload:data});
    }catch(error){
        console.log(error);
    }
}
