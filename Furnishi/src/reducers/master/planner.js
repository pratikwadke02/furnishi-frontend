import * as actionTypes from '../../constants/actionTypes';

const plannerReducer = ( state = { planners: [] }, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_ALL_PLANNERS:
            return { ...state, planners: action.payload };
        case actionTypes.ADD_NEW_PLANNER:
            return { ...state, planners: [...state.planners, action.payload] };
        default:
            return state;
    }
}

export default plannerReducer;