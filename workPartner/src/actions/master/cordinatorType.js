import { ADD_NEW_CORDINATOR_TYPE, GET_ALL_CORDINATOR_TYPES } from '../../constants/actionTypes';
import * as api from '../../api/index';

export const addCordinatorType = (cordinatorTypeInfo) => async (dispatch) => {
  try {
    const { data } = await api.addCordinatorType(cordinatorTypeInfo);
    dispatch({ type: ADD_NEW_CORDINATOR_TYPE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getCordinatorTypes = () => async (dispatch) => {
  try {
    const { data } = await api.getCordinatorTypes();
    dispatch({ type: GET_ALL_CORDINATOR_TYPES, payload: data });
  } catch (error) {
    console.log(error);
  }
};
