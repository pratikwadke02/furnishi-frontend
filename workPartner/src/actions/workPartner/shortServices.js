import { GET_WORK_PARTNER_SHORT_SERVICES, UPDATE_WORK_PARTNER_SHORT_SERVICES } from '../../constants/actionTypes';
import * as api from '../../api/index';

export const getWorkPartnerShortServices = () => async (dispatch) => {
  try {
    const { data } = await api.getWorkPartnerShortServices();
    dispatch({
      type: GET_WORK_PARTNER_SHORT_SERVICES,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateWorkPartnerShortServices = (shortServices) => async (dispatch) => {
  try {
    const data = await api.updateWorkPartnerShortServices(shortServices);
    dispatch({
      type: UPDATE_WORK_PARTNER_SHORT_SERVICES,
      payload: shortServices,
    });
  } catch (err) {
    console.log(err);
  }
};
