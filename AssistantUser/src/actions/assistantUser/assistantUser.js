import { ADD_NEW_ASSISTANT_USER, GET_ALL_ASSISTANT_USERS } from '../../constants/actionTypes';
import * as api from '../../api/index';

export const addNewAssistantUser = (newAssistantUser) => async (dispatch) => {
  try {
    const { data } = await api.addAssistantUser(newAssistantUser);

    dispatch({ type: ADD_NEW_ASSISTANT_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllAssistantUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getAssistantUsers();

    dispatch({ type: GET_ALL_ASSISTANT_USERS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
