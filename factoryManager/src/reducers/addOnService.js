import * as actionType from '../constants/actionTypes';

const addOnServicereducer = (state = { addOnServices: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ADD_ON_SERVICES:
            return {
                ...state,
                addOnServices: action.payload
            }
        case actionType.UPDATE_ADD_ON_SERVICES:
            return {
                ...state,
                addOnServices: state.addOnServices.map(addOnServices => {
                    if (addOnServices.id === action.payload.id) {
                        return action.payload;
                    }
                    return addOnServices;
                })
            }
        default:
            return state;
    }
}

export default addOnServicereducer;