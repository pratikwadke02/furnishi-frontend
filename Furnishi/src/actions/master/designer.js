import { ADD_NEW_DESIGNER, GET_ALL_DESIGNERS } from "../../constants/actionTypes";
import * as api from '../../api/index'

export const addDesigner = (designerInfo) => async(dispatch) => {
    try{
        const {data} = await api.addDesigner(designerInfo);
        dispatch({type: ADD_NEW_DESIGNER, payload:data});
    }catch(error){
        console.log(error);
    }
}

export const getDesigners = () => async (dispatch) => {
    try{
        const {data} = await api.getDesigners();
        dispatch({type: GET_ALL_DESIGNERS, payload:data});
    }catch(error){
        console.log(error);
    }
}
