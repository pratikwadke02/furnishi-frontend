import * as actionTypes from '../constants/actionTypes';

const workPartnerShortServicesReducer = (state = { workPartnerShortServices: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_WORK_PARTNER_SHORT_SERVICES:
            return {
                ...state,
                workPartnerShortServices: action.payload
            }
        case actionTypes.UPDATE_WORK_PARTNER_SHORT_SERVICES:
            return {
                ...state,
                workPartnerShortServices: state.workPartnerShortServices.map(workPartnerShortServices => {
                    if (workPartnerShortServices.id === action.payload.id) {
                        return action.payload;
                    }
                    return workPartnerShortServices;
                })
            }
        default:
            return state;
    }
}

export default workPartnerShortServicesReducer;
