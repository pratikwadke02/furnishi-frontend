import * as actionTypes from '../../constants/actionTypes';

const furnishiOrderReducer = ( state = { furnishiOrders: [] }, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_ALL_FURNISHI_ORDERS:
            return { ...state, furnishiOrders: action.payload };
        case actionTypes.ADD_NEW_FURNISHI_ORDER:
            return { ...state, furnishiOrders: [...state.orderlists, action.payload] };
        default:
            return state;
    }
}

export default furnishiOrderReducer;