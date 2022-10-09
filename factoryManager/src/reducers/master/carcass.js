import * as actionType from '../../constants/actionTypes'

const carcassReducer = (state = { carcasses: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALL_CARCASSES:
            return { ...state, carcasses: action.payload };
        case actionType.ADD_NEW_CARCASS:
            return { ...state, carcasses: [...state.carcasses, action.payload] };
        default:
            return state;
    }
}

export default carcassReducer;