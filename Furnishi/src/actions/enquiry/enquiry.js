import { ADD_NEW_ENQUIRY, GET_ALL_ENQUIRIES } from '../../constants/actionTypes';
import * as api from '../../api/index';

export const addEnquiry = (enquiryInfo) => async (dispatch) => {
  try {
    const { data } = await api.addEnquiry(enquiryInfo);
    dispatch({ type: ADD_NEW_ENQUIRY, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getEnquiries = () => async (dispatch) => {
  try {
    const { data } = await api.getEnquiries();
    dispatch({ type: GET_ALL_ENQUIRIES, payload: data });
  } catch (error) {
    console.log(error);
  }
};
