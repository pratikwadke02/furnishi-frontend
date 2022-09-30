import * as actionType from '../constants/actionTypes';

const longServicesreducer = (state = { longServices: [] }, action) => {
    switch (action.type) {
        case actionType.GET_LONG_SERVICES:
            return {
                ...state,
                longServices: action.payload
            }
        case actionType.UPDATE_LONG_SERVICES:
            return {
                ...state,
                longServices: state.longServices.map(longServices => {
                    if (longServices.id === action.payload.id) {
                        return action.payload;
                    }
                    return longServices;
                })
            }
        default:
            return state;
    }
}

export default longServicesreducer;