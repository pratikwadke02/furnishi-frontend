import * as actionType from '../constants/actionTypes';

const customerRegistrationreducer = (state = { customerRegistration: [] }, action) => {
    switch (action.type) {
        case actionType.ADD_CUSTOMER_REG:
            return {
                ...state,
                customerRegistration: action.payload
            }
        case actionType.GET_CUSTOMER_REG:
            return {
                ...state,
                customerRegistration: action.payload
            }
        default:
            return state;
    }
}

export default customerRegistrationreducer;