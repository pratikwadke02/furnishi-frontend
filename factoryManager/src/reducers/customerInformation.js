import * as actionType from '../constants/actionTypes';

const customerInformationreducer = (state = { customerInformation: [] }, action) => {
    switch (action.type) {
        case actionType.ADD_CUSTOMER_INFO:
            return {
                ...state,
                customerInformation: action.payload
            }
        case actionType.GET_CUSTOMER_INFO:
            return {
                ...state,
                customerInformation: action.payload
            }
        default:
            return state;
    }
}

export default customerInformationreducer;