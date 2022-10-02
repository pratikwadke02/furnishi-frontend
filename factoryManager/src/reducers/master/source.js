import * as actionType from '../../constants/actionTypes';

const sourceReducer = (state = { sources: [] }, action) => {
    switch (action.type) {
        case actionType.ADD_NEW_SOURCE:
            return {
                ...state,
                sources: action.payload
            }
        case actionType.GET_ALL_SOURCES:
            return {
                ...state,
                sources: action.payload
            }
        default:
            return state;
    }
}

export default sourceReducer;