import * as actionType from '../../constants/actionTypes'

const snaglistRedducer = (state = { snaglists: [] }, action) => {
    switch (action.type) {
        case actionType.ADD_NEW_SNAGLIST:
            return {
                ...state,
                snaglists: action.payload
            }
        case actionType.GET_ALL_SNAGLISTS:
            return {
                ...state,
                snaglists: action.payload
            }
        default:
            return state;
    }
}

export default snaglistRedducer;