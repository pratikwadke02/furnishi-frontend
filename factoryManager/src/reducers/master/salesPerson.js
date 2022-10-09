import * as actionType from '../../constants/actionTypes';

const salesPersonReducer = (state = { salesPersons: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALL_SALES_PERSONS:
            return { ...state, salesPersons: action.payload };
        case actionType.ADD_NEW_SALES_PERSON:
            return { ...state, salesPersons: [...state.salesPersons, action.payload] };
        default:
            return state;
    }
}

export default salesPersonReducer;
