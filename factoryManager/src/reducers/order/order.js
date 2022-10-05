import * as actionType from '../../constants/actionTypes';

const orderReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case actionType.ADD_NEW_ORDER:
            return {
                ...state,
                orders: action.payload
            }
        case actionType.GET_ALL_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        default:
            return state;
    }
}

export default orderReducer;