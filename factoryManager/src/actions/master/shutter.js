import { ADD_NEW_SHUTTER, GET_ALL_SHUTTERS } from "../../constants/actionTypes";
import * as api from '../../api/index'

export const addNewShutter = (shutter) => async (dispatch) => {
    try {
        const { data } = await api.addShutter(shutter);
        dispatch({ type: ADD_NEW_SHUTTER, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getShutters = () => async (dispatch) => {
    try {
        const { data } = await api.getShutters();
        dispatch({ type: GET_ALL_SHUTTERS, payload: data });
    } catch (error) {
        console.log(error);
    }
}