import { ADD_NEW_SITE_SURVEYOR, GET_ALL_SITE_SURVEYORS } from "../../constants/actionTypes";
import * as api from '../../api/index'

export const addSiteSurveyor = (siteSurveyorInfo) => async(dispatch) => {
    try{
        const {data} = await api.addSiteSurveyor(siteSurveyorInfo);
        dispatch({type: ADD_NEW_SITE_SURVEYOR, payload:data});
    }catch(error){
        console.log(error);
    }
}

export const getSiteSurveyors = () => async (dispatch) => {
    try{
        const {data} = await api.getSiteSurveyors();
        dispatch({type: GET_ALL_SITE_SURVEYORS, payload:data});
    }catch(error){
        console.log(error);
    }
}
