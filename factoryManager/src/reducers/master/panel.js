import * as actionType from '../../constants/actionTypes';

const panelReducer = (state = { panels: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALL_PANELS:
            return { ...state, panels: action.payload };
        case actionType.ADD_NEW_PANEL:
            return { ...state, panels: [...state.locations, action.payload] };
        default:
            return state;
    }
}

export default panelReducer;