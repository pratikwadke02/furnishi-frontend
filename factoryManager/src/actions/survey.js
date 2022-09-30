import { ADD_SURVEY, GET_SURVEY, GET_SURVEY_BY_ID } from "../constants/actionTypes";
import * as api from "../api/index";

export const addSurvey = (survey) => async (dispatch) => {
    try {
        const response = await api.addSurvey(survey);
        dispatch({
            type: ADD_SURVEY,
            payload: response
        });
    } catch (error) {
        console.log(error);
    }
}

export const getSurvey = () => async (dispatch) => {
    try {
        const response = await api.getSurvey();
        dispatch({
            type: GET_SURVEY,
            payload: response
        });
    } catch (error) {
        console.log(error);
    }
}

// export const getSurveyById = (id) => async (dispatch) => {
//     try {
//         const response = await api.getSurveyById(id);
        
//     } catch (error) {
//         console.log(error);
//     }
// }