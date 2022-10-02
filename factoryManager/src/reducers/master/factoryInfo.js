import * as actionType from '../../constants/actionTypes';

const factoryInfoReducer = (state = { factoryInfos: [] }, action) => {
    switch (action.type) {
        case actionType.ADD_NEW_FACTORY_INFO:
            return {
                ...state,
                factoryInfos: action.payload
            }
        case actionType.GET_ALL_FACTORY_INFOS:
            return {
                ...state,
                factoryInfos: action.payload
            }
        default:
            return state;
    }
}

export default factoryInfoReducer;