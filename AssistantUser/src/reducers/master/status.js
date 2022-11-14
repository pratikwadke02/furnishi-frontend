import * as actionType from '../../constants/actionTypes';

const statusReducer = (state = { statuses: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALL_STATUSES:
            return { ...state, statuses: action.payload };
        case actionType.ADD_NEW_STATUS:
            return { ...state, statuses: [...state.statuses, action.payload] };
        default:
            return state;
    }
}   

export default statusReducer;