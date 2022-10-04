import * as actionType from '../../constants/actionTypes';

const snagSolutionReducer = (state = { snagSolutions: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALL_SNAG_SOLUTIONS:
            return { ...state, snagSolutions: action.payload };
        case actionType.ADD_NEW_SNAG_SOLUTION:
            return { ...state, snagSolutions: [...state.snagSolutions, action.payload] };
        default:
            return state;
    }
}

export default snagSolutionReducer;