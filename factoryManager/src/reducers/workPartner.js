import * as actionType from '../constants/actionTypes';

const workPartnerReducer = (state = { workPartner: [] }, action) => {
    switch (action.type) {
        case actionType.ADD_WORK_PARTNER:
            return {
                ...state,
                workPartner: action.payload
            }
        case actionType.GET_WORK_PARTNER:
            return {
                ...state,
                workPartner: action.payload
            }
        default:
            return state;
    }
}

export default workPartnerReducer;