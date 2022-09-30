import * as actionType from '../constants/actionTypes';

const shortServicesreducer = (state = { shortServices: [] }, action) => {
    switch (action.type) {
        case actionType.GET_SHORT_SERVICES:
            return {
                ...state,
                shortServices: action.payload
            }
        case actionType.UPDATE_SHORT_SERVICES:
            return {
                ...state,
                shortServices: state.shortServices.map(shortServices => {
                    if (shortServices.id === action.payload.id) {
                        return action.payload;
                    }
                    return shortServices;
                })
            }
        default:
            return state;
    }
}

export default shortServicesreducer;