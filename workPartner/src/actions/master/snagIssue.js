import { ADD_NEW_SNAG_ISSUE, GET_ALL_SNAG_ISSUES } from "../../constants/actionTypes";
import * as api from '../../api/index'

export const addSnagIssue = (snagIssueInfo) => async(dispatch) => {
    try{
        const {data} = await api.addSnagIssue(snagIssueInfo);
        dispatch({type: ADD_NEW_SNAG_ISSUE, payload: data});
    }catch(error){
        console.log(error);
    }
}

export const getSnagIssues = () => async(dispatch) => {
    try{
        const {data} = await api.getSnagIssues();
        dispatch({type: GET_ALL_SNAG_ISSUES, payload:data});
    }catch(error){
        console.log(error);
    }
}
