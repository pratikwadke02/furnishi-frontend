import { ADD_NEW_SNAG_ACTION, GET_ALL_SNAG_ACTIONS } from "../../constants/actionTypes";
import * as api from '../../api/index'

export const addSnagAction = (snagActionInfo) => async(dispatch) => {
    try{
        const {data} = await api.addSnagAction(snagActionInfo);
        dispatch({type: ADD_NEW_SNAG_ACTION, payload: data});
    }catch(error){
        console.log(error);
    }
}

export const getSnagActions = () => async(dispatch) => {
    try{
        const {data} = await api.getSnagActions();
        dispatch({type: GET_ALL_SNAG_ACTIONS, payload:data});
    }catch(error){
        console.log(error);
    }
}