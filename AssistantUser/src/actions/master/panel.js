import { ADD_NEW_PANEL, GET_ALL_PANELS } from "../../constants/actionTypes";
import * as api from '../../api/index'

export const addPanel = (panelInfo) => async (dispatch) => {
    try{
        const {data} = await api.addPanel(panelInfo);
        dispatch({type: ADD_NEW_PANEL, payload: data});
    }catch(error){
        console.log(error);
    }
}

export const getPanels = () => async(dispatch) => {
    try{
        const {data} = await api.getPanels();
        dispatch({type: GET_ALL_PANELS, payload:data});
    }catch(error){
        console.log(error);
    }
}