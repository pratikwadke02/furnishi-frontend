import * as actionTypes from '../../constants/actionTypes';

const historyReducer = ( state = { history: [] }, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_HISTORY:
            return { ...state, history: action.payload };
        default:
            return state;
    }
}

export default historyReducer;