import { ADD_WORK_PARTNER, GET_WORK_PARTNER } from "../constants/actionTypes";
import * as api from "../api/index";

export const addWorkPartner = (workPartner) => async (dispatch) => {
    try {
        const response = await api.addWorkPartner(workPartner);
        dispatch({
            type: ADD_WORK_PARTNER,
            payload: response
        });
    } catch (error) {
        console.log(error);
    }
}

export const getWorkPartner = () => async (dispatch) => {
    try {
        const response = await api.getWorkPartner();
        dispatch({
            type: GET_WORK_PARTNER,
            payload: response
        });
    } catch (error) {
        console.log(error);
    }
}
