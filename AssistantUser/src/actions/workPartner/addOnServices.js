import {GET_WORK_PARTNER_ADD_ON_SERVICES, UPDATE_WORK_PARTNER_ADD_ON_SERVICES} from '../../constants/actionTypes';
import * as api from '../../api/index';

export const getWorkPartnerAddOnServices = (workPartnerId) => async(dispatch) => {
    try{
    const {data} = await api.getWorkPartnerAddOnServices(workPartnerId);
    dispatch({
        type: GET_WORK_PARTNER_ADD_ON_SERVICES,
        payload: data
    });
    }catch(err){
        console.log(err);
    }
}

export const updateWorkPartnerAddOnServices = (addOnServices) => async(dispatch) => {
    try{
    const data = await api.updateWorkPartnerAddOnServices(addOnServices);
    dispatch({
        type: UPDATE_WORK_PARTNER_ADD_ON_SERVICES,
        payload: addOnServices
    });
    }catch(err){
        console.log(err);
    }
}
