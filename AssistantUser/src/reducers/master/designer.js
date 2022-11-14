import * as actionTypes from '../../constants/actionTypes';

const designerReducer = ( state = { designers: [] }, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_ALL_DESIGNERS:
            return { ...state, designers: action.payload };
        case actionTypes.ADD_NEW_DESIGNER:
            return { ...state, designers: [...state.designers, action.payload] };
        default:
            return state;
    }
}

export default designerReducer;