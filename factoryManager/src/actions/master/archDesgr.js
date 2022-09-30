import { ADD_ARCHITECT_DESIGNER, GET_ALL_ARCHITECT_DESIGNERS } from "../../constants/actionTypes";
import * as api from "../../api/index";

export const addArchtDesigr = (archtDesigrInfo) => async (dispatch) => {
  try {
    const { data } = await api.addArchtDesigr(archtDesigrInfo);
    dispatch({ type: ADD_ARCHITECT_DESIGNER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getArchtDesigrs = () => async (dispatch) => {
  try {
    const { data } = await api.getArchtDesigrs();
    dispatch({ type: GET_ALL_ARCHITECT_DESIGNERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
