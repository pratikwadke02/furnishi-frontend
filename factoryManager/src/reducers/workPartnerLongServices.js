import * as actionTypes from '../constants/actionTypes';

const workPartnerLongServicesReducer = (state = { workPartnerLongServices: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_WORK_PARTNER_LONG_SERVICES:
            return {
                ...state,
                workPartnerLongServices: action.payload
            }
        case actionTypes.UPDATE_WORK_PARTNER_LONG_SERVICES:
            return {
                ...state,
                workPartnerLongServices: state.workPartnerLongServices.map(workPartnerLongServices => {
                    if (workPartnerLongServices.id === action.payload.id) {
                        return action.payload;
                    }
                    return workPartnerLongServices;
                })
            }
        default:
            return state;
    }
}

export default workPartnerLongServicesReducer;
