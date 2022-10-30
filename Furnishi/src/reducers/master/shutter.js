import * as actionType from '../../constants/actionTypes';

const shutterReducer = (state = { shutters: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALL_SHUTTERS:
            return { ...state, shutters: action.payload };
        case actionType.ADD_NEW_SHUTTER:
            return { ...state, shutters: [...state.shutters, action.payload] };
        default:
            return state;
    }
}

export default shutterReducer;