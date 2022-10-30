import { ADD_NEW_FACTORY_INFO, GET_ALL_FACTORY_INFOS } from '../../constants/actionTypes';
import * as api from '../../api/index';

export const addFactoryInfo = (factoryInfo) => async (dispatch) => {
  try {
    const { data } = await api.addFactoryInfo(factoryInfo);
    dispatch({ type: ADD_NEW_FACTORY_INFO, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getFactoryInfos = () => async (dispatch) => {
  try {
    const { data } = await api.getFactoryInfos();
    dispatch({ type: GET_ALL_FACTORY_INFOS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
