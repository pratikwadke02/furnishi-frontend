import {GET_LONG_SERVICES, UPDATE_LONG_SERVICES} from '../constants/actionTypes';
import * as api from '../api/index';

export const getLongServices = () => async(dispatch) => {
    try{
    const {data} = await api.getLongServices();
    dispatch({
        type: GET_LONG_SERVICES,
        payload: data
    });
    }catch(err){
        console.log(err);
    }
}

export const updateLongServices = (longServices) => async(dispatch) => {
    try{
    const data = await api.updateLongServices(longServices);
    dispatch({
        type: UPDATE_LONG_SERVICES,
        payload: longServices
    });
    }catch(err){
        console.log(err);
    }
}