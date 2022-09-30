import {GET_ADD_ON_SERVICES, UPDATE_ADD_ON_SERVICES} from '../constants/actionTypes';
import * as api from '../api/index';

export const getAddOnServices = () => async(dispatch) => {
    try{
    const {data} = await api.getAddOnServices();
    dispatch({
        type: GET_ADD_ON_SERVICES,
        payload: data
    });
    }catch(err){
        console.log(err);
    }
}

export const updateAddOnServices = (addOnServices) => async(dispatch) => {
    try{
    const data = await api.updateAddOnServices(addOnServices);
    dispatch({
        type: UPDATE_ADD_ON_SERVICES,
        payload: addOnServices
    });
    }catch(err){
        console.log(err);
    }
}
