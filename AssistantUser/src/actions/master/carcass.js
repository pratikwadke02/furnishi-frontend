import { ADD_NEW_CARCASS, GET_ALL_CARCASSES } from "../../constants/actionTypes";
import * as api from '../../api/index'

export const addNewCarcass = (carcass) => async (dispatch) => {
    try {
        const { data } = await api.addCarcass(carcass);
        dispatch({ type: ADD_NEW_CARCASS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getCarcasses = () => async (dispatch) => {
    try {
        const { data } = await api.getCarcasses();
        dispatch({ type: GET_ALL_CARCASSES, payload: data });
    } catch (error) {
        console.log(error);
    }
}