import * as actionType from '../../constants/actionTypes';

const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionType.ADD_NEW_PRODUCT:
            return {
                ...state,
                products: action.payload
            }
        case actionType.GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}

export default productReducer;