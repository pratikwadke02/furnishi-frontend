import { ADD_NEW_LOCATION, GET_ALL_LOCATIONS } from "src/constants/actionTypes";
import * as api from '../../api/index'

export const addLocation = (locationInfo) => async (dispatch) => {
    try{
        const {data} = await api.addLocation(locationInfo);
        dispatch({type: ADD_NEW_LOCATION, payload: data});
    }catch(error){
        console.log(error);
    }
}

export const getLocations = () => async(dispatch) => {
    try{
        const {data} = await api.getLocations();
        dispatch({type: GET_ALL_LOCATIONS, payload:data});
    }catch(error){
        console.log(error);
    }
}