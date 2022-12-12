import * as actionTypes from '../../constants/actionTypes';

const CostingReducer = (state = {costing: []}, action) => {
    switch (action.type) {
        case actionTypes.GET_ENQUIRY_COSTING:
            return {...state, costing: action.payload};
        default:
            return state;
    }
}

export default CostingReducer;