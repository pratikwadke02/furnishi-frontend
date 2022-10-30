import { ADD_NEW_SNAG_SOLUTION, GET_ALL_SNAG_SOLUTIONS } from "../../constants/actionTypes";
import * as api from '../../api/index'

export const addSnagSolution = (snagSolutionInfo) => async(dispatch) => {
    try{
        const {data} = await api.addSnagSolution(snagSolutionInfo);
        dispatch({type: ADD_NEW_SNAG_SOLUTION, payload: data});
    }catch(error){
        console.log(error);
    }
}

export const getSnagSolutions = () => async(dispatch) => {
    try{
        const {data} = await api.getSnagSolutions();
        dispatch({type: GET_ALL_SNAG_SOLUTIONS, payload:data});
    }catch(error){
        console.log(error);
    }
}