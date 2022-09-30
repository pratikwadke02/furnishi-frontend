import {GET_SHORT_SERVICES, UPDATE_SHORT_SERVICES} from '../constants/actionTypes';
import * as api from '../api/index';

export const getShortServices = () => async(dispatch) => {
    try{
    const {data} = await api.getShortServices();
    dispatch({
        type: GET_SHORT_SERVICES,
        payload: data
    });
    }catch(err){
        console.log(err);
    }
}

export const updateShortServices = (shortServices) => async(dispatch) => {
    try{
    const data = await api.updateShortServices(shortServices);
    dispatch({
        type: UPDATE_SHORT_SERVICES,
        payload: shortServices
    });
    }catch(err){
        console.log(err);
    }
}
