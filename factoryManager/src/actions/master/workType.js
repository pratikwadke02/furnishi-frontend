import { ADD_NEW_WORK_TYPE, GET_ALL_WORK_TYPES } from "src/constants/actionTypes";
import * as api from '../../api/index'

export const addWorkType = (workTypeInfo) = async(dispatch) => {
    try{
        const {data} = await api.addWorkType(workTypeInfo);
        dispatch({type: ADD_NEW_WORK_TYPE, payload: data});
    }catch(error){
        console.log(error);
    }
}

export const getWorkTypes = () => async(dispatch) => {
    try{
        const {data} = await api.getWorkTypes();
        dispatch({type: GET_ALL_WORK_TYPES, payload:data});
    }catch(error){
        console.log(error);
    }
}

