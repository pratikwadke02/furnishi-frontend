import { ADD_NEW_SALES_PERSON, GET_ALL_SALES_PERSONS } from "../../constants/actionTypes";
import * as api from '../../api/index'

export const addNewSalesPerson = (salesPerson) => async (dispatch) => {
    try {
        const { data } = await api.addSalesPerson(salesPerson);
        dispatch({ type: ADD_NEW_SALES_PERSON, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getSalesPersons = () => async (dispatch) => {
    try {
        const { data } = await api.getSalesPersons();
        dispatch({ type: GET_ALL_SALES_PERSONS, payload: data });
    } catch (error) {
        console.log(error);
    }
}
