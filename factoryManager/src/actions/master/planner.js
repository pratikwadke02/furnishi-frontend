import { ADD_NEW_PLANNER, GET_ALL_PLANNERS } from "../../constants/actionTypes";
import * as api from '../../api/index'

export const addPlanner = (plannerInfo) => async(dispatch) => {
    try{
        const {data} = await api.addPlanner(plannerInfo);
        dispatch({type: ADD_NEW_PLANNER, payload:data});
    }catch(error){
        console.log(error);
    }
}

export const getPlanners = () => async (dispatch) => {
    try{
        const {data} = await api.getPlanners();
        dispatch({type: GET_ALL_PLANNERS, payload:data});
    }catch(error){
        console.log(error);
    }
}