import { ADD_NEW_FACTORY_ENGINEER, GET_ALL_FACTORY_ENGINEERS } from "../../constants/actionTypes";
import * as api from '../../api/index'

export const addFactoryEngineer = (factoryEngineerInfo) => async(dispatch) => {
    try{
        const {data} = await api.addFactoryEngineer(factoryEngineerInfo);
        dispatch({type: ADD_NEW_FACTORY_ENGINEER, payload:data});
    }catch(error){
        console.log(error);
    }
}

export const getFactoryEngineers = () => async (dispatch) => {
    try{
        const {data} = await api.getFactoryEngineers();
        dispatch({type: GET_ALL_FACTORY_ENGINEERS, payload:data});
    }catch(error){
        console.log(error);
    }
}