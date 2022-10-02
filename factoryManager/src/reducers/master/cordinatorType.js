import * as actionType from '../../constants/actionTypes';

const cordinatorTypeReducer = (state = { cordinatorTypes: [] }, action) => {
    switch (action.type) {
        case actionType.ADD_NEW_CORDINATOR_TYPE:
            return {
                ...state,
                cordinatorTypes: action.payload
            }
        case actionType.GET_ALL_CORDINATOR_TYPES:
            return {
                ...state,
                cordinatorTypes: action.payload
            }
        default:
            return state;
    }
}

export default cordinatorTypeReducer;
