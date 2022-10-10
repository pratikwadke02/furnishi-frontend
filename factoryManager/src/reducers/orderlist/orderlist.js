import * as actionTypes from '../../constants/actionTypes';

const orderListReducer = ( state = { orderlist: [] }, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_ALL_ORDER_LISTS:
            return { ...state, orderList: action.payload };
        case actionTypes.ADD_NEW_ORDER_LIST:
            return { ...state, orderList: [...state.orderList, action.payload] };
        default:
            return state;
    }
}

export default orderListReducer;