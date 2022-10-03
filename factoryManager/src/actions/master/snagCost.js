import { ADD_NEW_SNAG_COST, GET_ALL_SNAG_COSTS } from "src/constants/actionTypes";
import * as api from '../../api/index'

export const addSnagCost = (snagCostInfo) => async(dispatch) => {
    try{
        const {data} = await api.addSnagCost(snagCostInfo);
        dispatch({type: ADD_NEW_SNAG_COST, payload: data});
    }catch(error){
        console.log(error);
    }
}

export const getSnagCosts = () => async(dispatch) => {
    try{
        const {data} = await api.getSnagCosts();
        dispatch({type: GET_ALL_SNAG_COSTS, payload:data});
    }catch(error){
        console.log(error);
    }
}