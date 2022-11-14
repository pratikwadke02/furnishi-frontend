import * as actionTypes from '../../constants/actionTypes';

const orderListReducer = ( state = { orderlists: [] }, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_ALL_ORDER_LISTS:
            return { ...state, orderlists: action.payload };
        case actionTypes.ADD_NEW_ORDER_LIST:
            return { ...state, orderlists: [...state.orderlists, action.payload] };
        default:
            return state;
    }
}

export default orderListReducer;