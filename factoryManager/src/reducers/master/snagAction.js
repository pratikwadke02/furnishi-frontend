import * as actionType from '../../constants/actionTypes';

const snagActionReducer = (state = { snagActions: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALL_SNAG_ACTIONS:
            return { ...state, snagActions: action.payload };
        case actionType.ADD_NEW_SNAG_ACTION:
            return { ...state, snagActions: [...state.snagActions, action.payload] };
        default:
            return state;
    }
}

export default snagActionReducer;