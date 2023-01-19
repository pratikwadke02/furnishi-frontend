import * as actionType from '../../constants/actionTypes';

const invoiceReducer = (state = { invoice: null }, action) => {
    switch (action.type) {
        case actionType.ADD_INVOICE:
            return {
                ...state,
                invoice: action.payload
            }
        default:
            return state;
    }
}

export default invoiceReducer;