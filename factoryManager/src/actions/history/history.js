import { GET_HISTORY } from '../../constants/actionTypes';
import * as api from '../../api/index';

export const getHistory = () => async (dispatch) => {
    try{
        const {data} = await api.getHistory();
        dispatch({type: GET_HISTORY, payload:data});
    }catch(error){
        console.log(error);
    }
}
