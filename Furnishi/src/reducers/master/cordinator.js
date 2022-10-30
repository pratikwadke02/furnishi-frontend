import * as actionType from '../../constants/actionTypes';

const cordinatorReducer = (state = { cordinators: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALL_CORDINATORS:
            return { ...state, cordinators: action.payload };
        case actionType.ADD_NEW_CORDINATOR:
            return { ...state, cordinators: [...state.cordinators, action.payload] };
        default:
            return state;
    }
}

export default cordinatorReducer;