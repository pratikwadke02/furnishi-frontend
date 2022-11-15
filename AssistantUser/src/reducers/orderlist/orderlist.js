import * as actionTypes from '../../constants/actionTypes';

const orderListReducer = ( state = {loading:false, orderlists: [], orderlist: [] }, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_ALL_ORDER_LISTS:
            return { ...state, orderlists: action.payload, loading: false };
        case actionTypes.ADD_NEW_ORDER_LIST:
            return { ...state, orderlists: [...state.orderlists, action.payload] };
        case actionTypes.GET_ORDERLIST_BY_ASSISTANT_USER:
            return { ...state, orderlist: action.payload, loading: false };
        case actionTypes.LOADING:
            return { ...state, loading: true };
        default:
            return state;
    }
}

export default orderListReducer;