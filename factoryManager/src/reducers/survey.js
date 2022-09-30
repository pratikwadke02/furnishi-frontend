import * as actionType from '../constants/actionTypes';

const surveyReducer = (state = { survey: [] }, action) => {
    switch (action.type) {
        case actionType.ADD_SURVEY:
            return {
                ...state,
                survey: action.payload
            }
        case actionType.GET_SURVEY:
            return {
                ...state,
                survey: action.payload
            }
        case actionType.GET_SURVEY_BY_ID:
            return {
                ...state,
                survey: action.payload
            }
        default:
            return state;
    }
}

export default surveyReducer;