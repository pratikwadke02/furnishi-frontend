import * as actionType from '../../constants/actionTypes';

const statusActionReducer = (state = { statusActions: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALL_STATUS_ACTIONS:
            return { ...state, statusActions: action.payload };
        case actionType.ADD_NEW_STATUS_ACTION:
            return { ...state, statusActions: [...state.statusActions, action.payload] };
        default:
            return state;
    }
}

export default statusActionReducer;