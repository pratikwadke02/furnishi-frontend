import { ADD_NEW_MANAGER, GET_ALL_MANAGERS } from "../../constants/actionTypes";
import * as api from "../../api/index";

export const addManager = (managerInfo) => async (dispatch) => {
    try {
        const {data} = await api.addManager(managerInfo);
        dispatch({ type: ADD_NEW_MANAGER, payload: data });
    } catch (error) {
        console.log(error);
    }
    }

export const getManagers = () => async (dispatch) => {
    try {
        const { data } = await api.getManagers();
        dispatch({ type: GET_ALL_MANAGERS, payload: data });
    } catch (error) {
        console.log(error);
    }
    }