import { ADD_NEW_SNAGLIST, GET_ALL_SNAGLISTS } from '../../constants/actionTypes';
import * as api from '../../api/index';

export const addSnaglist = (snaglistInfo) => async (dispatch) => {
  try {
    const { data } = await api.addSnaglist(snaglistInfo);
    dispatch({ type: ADD_NEW_SNAGLIST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSnaglists = () => async (dispatch) => {
  try {
    const { data } = await api.getSnaglists();
    dispatch({ type: GET_ALL_SNAGLISTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
