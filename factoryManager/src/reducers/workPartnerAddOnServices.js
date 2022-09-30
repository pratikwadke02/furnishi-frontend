import * as actionTypes from '../constants/actionTypes';

const workPartnerAddOnServicesReducer = (state = { workPartnerAddOnServices: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_WORK_PARTNER_ADD_ON_SERVICES:
            return {
                ...state,
                workPartnerAddOnServices: action.payload
            }
        case actionTypes.UPDATE_WORK_PARTNER_ADD_ON_SERVICES:
            return {
                ...state,
                workPartnerAddOnServices: state.workPartnerAddOnServices.map(workPartnerAddOnServices => {
                    if (workPartnerAddOnServices.id === action.payload.id) {
                        return action.payload;
                    }
                    return workPartnerAddOnServices;
                })
            }
        default:
            return state;
    }
}

export default workPartnerAddOnServicesReducer;
