import * as actionType from '../../constants/actionTypes';

const archtDesigrReducer = (state = { archDesigrs: [] }, action) => {
    switch (action.type) {
        case actionType.ADD_ARCHITECT_DESIGNER:
            return {
                ...state,
                archDesigrs: action.payload
            }
        case actionType.GET_ALL_ARCHITECT_DESIGNERS:
            return {
                ...state,
                archDesigrs: action.payload
            }
        default:
            return state;
    }
}

export default archtDesigrReducer;