import {GET_ENQUIRY_COSTING} from '../../constants/actionTypes';
import * as api from '../../api/index';

export const getEnquiryCosting = () => async (dispatch) => {
    try {
        const {data} = await api.getEnquiryCosting();
        dispatch({type: GET_ENQUIRY_COSTING, payload: data});
    } catch (error) {
        console.log(error);
    }
}

