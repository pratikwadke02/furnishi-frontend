import * as actionType from '../../constants/actionTypes';

const snagIssueReducer = (state = { snagIssues: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALL_SNAG_ISSUES:
            return { ...state, snagIssues: action.payload };
        case actionType.ADD_NEW_SNAG_ISSUE:
            return { ...state, snagIssues: [...state.snagIssues, action.payload] };
        default:
            return state;
    }
}

export default snagIssueReducer;