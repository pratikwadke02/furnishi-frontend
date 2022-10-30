import * as actionType from '../../constants/actionTypes';

const enquiryReducer = (state = { enquiries: [] }, action) => {
    switch (action.type) {
        case actionType.ADD_NEW_ENQUIRY:
            return {
                ...state,
                enquiries: action.payload
            }
        case actionType.GET_ALL_ENQUIRIES:
            return {
                ...state,
                enquiries: action.payload
            }
        default:
            return state;
    }
}

export default enquiryReducer;