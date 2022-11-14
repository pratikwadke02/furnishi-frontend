import * as actionTypes from '../../constants/actionTypes';

const factoryEngineerReducer = ( state = { factoryEngineers: [] }, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_ALL_FACTORY_ENGINEERS:
            return { ...state, factoryEngineers: action.payload };
        case actionTypes.ADD_NEW_FACTORY_ENGINEER:
            return { ...state, factoryEngineers: [...state.factoryEngineers, action.payload] };
        default:
            return state;
    }
}

export default factoryEngineerReducer;