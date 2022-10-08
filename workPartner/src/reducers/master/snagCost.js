import * as actionType from '../../constants/actionTypes';

const snagCostReducer = (state = { snagCosts: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALL_SNAG_COSTS:
            return { ...state, snagCosts: action.payload };
        case actionType.ADD_NEW_SNAG_COST:
            return { ...state, snagCosts: [...state.snagCosts, action.payload] };
        default:
            return state;
    }
}

export default snagCostReducer;
