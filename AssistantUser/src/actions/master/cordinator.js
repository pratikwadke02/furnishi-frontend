import { ADD_NEW_CORDINATOR, GET_ALL_CORDINATORS } from "../../constants/actionTypes";
import * as api from '../../api/index'

export const addCordinator = (cordinatorInfo) => async(dispatch) => {
    try{
        const {data} = await api.addCordinator(cordinatorInfo);
        dispatch({type: ADD_NEW_CORDINATOR, payload:data});
    }catch(error){
        console.log(error);
    }
}

export const getCordinators = () => async (dispatch) => {
    try{
        const {data} = await api.getCordinators();
        dispatch({type: GET_ALL_CORDINATORS, payload:data});
    }catch(error){
        console.log(error);
    }
}