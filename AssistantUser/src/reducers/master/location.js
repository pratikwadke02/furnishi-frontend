import * as actionType from '../../constants/actionTypes';

const locationReducer = (state = { locations: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALL_LOCATIONS:
            return { ...state, locations: action.payload };
        case actionType.ADD_NEW_LOCATION:
            return { ...state, locations: [...state.locations, action.payload] };
        default:
            return state;
    }
}

export default locationReducer;