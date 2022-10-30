import { GET_WORK_PARTNER_LONG_SERVICES, UPDATE_WORK_PARTNER_LONG_SERVICES } from "../../constants/actionTypes";
import * as api from '../../api/index';

export const getWorkPartnerLongServices = () => async(dispatch) => {
    try{
    const {data} = await api.getWorkPartnerLongServices();
    dispatch({
        type: GET_WORK_PARTNER_LONG_SERVICES,
        payload: data
    });
    }catch(err){
        console.log(err);
    }
}

export const updateWorkPartnerLongServices = (longServices) => async(dispatch) => {
    try{
    const data = await api.updateWorkPartnerLongServices(longServices);
    dispatch({
        type: UPDATE_WORK_PARTNER_LONG_SERVICES,
        payload: longServices
    });
    }catch(err){
        console.log(err);
    }
}