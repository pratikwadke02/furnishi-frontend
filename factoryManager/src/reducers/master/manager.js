import * as actionType from '../../constants/actionTypes';

const managerReducer = (state = { managers: [] }, action) => {
    switch (action.type) {
        case actionType.ADD_NEW_MANAGER:
            return {
                ...state,
                managers: action.payload
            }
        case actionType.GET_ALL_MANAGERS:
            return {
                ...state,
                managers: action.payload
            }
        default:
            return state;
    }
}

export default managerReducer;