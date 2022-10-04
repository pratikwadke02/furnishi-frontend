import * as actionTypes from '../../constants/actionTypes';

const workTypeReducer = (state = { workTypes: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_WORK_TYPES:
            return { ...state, workTypes: action.payload };
        case actionTypes.ADD_NEW_WORK_TYPE:
            return { ...state, workTypes: [...state.workTypes, action.payload] };
        default:
            return state;
    }
}

export default workTypeReducer;