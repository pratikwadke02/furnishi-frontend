import { ADD_NEW_SOURCE, GET_ALL_SOURCES } from '../../constants/actionTypes';
import * as api from '../../api/index';

export const addSource = (sourceInfo) => async (dispatch) => {
  try {
    const { data } = await api.addSource(sourceInfo);
    dispatch({ type: ADD_NEW_SOURCE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSources = () => async (dispatch) => {
  try {
    const { data } = await api.getSources();
    dispatch({ type: GET_ALL_SOURCES, payload: data });
  } catch (error) {
    console.log(error);
  }
};
