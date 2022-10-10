import * as actionTypes from '../../constants/actionTypes';

const siteSurveyorReducer = ( state = { siteSurveyors: [] }, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_ALL_SITE_SURVEYORS:
            return { ...state, siteSurveyors: action.payload };
        case actionTypes.ADD_NEW_SITE_SURVEYOR:
            return { ...state, siteSurveyors: [...state.siteSurveyors, action.payload] };
        default:
            return state;
    }
}

export default siteSurveyorReducer;