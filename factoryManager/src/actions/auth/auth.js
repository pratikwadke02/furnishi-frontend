import {AUTH, LOGOUT} from '../../constants/actionTypes';
import * as api from '../../api/index';

export const login = (authInfo, router) => async(dispatch) => {
    try{
        const {data} = await api.login(authInfo);
        console.log(data);
        dispatch({ type : AUTH, data });
        router('/dashboard/app');
    }catch(error){
        console.log(error);
    }
};

export const register = (authInfo, router) => async(dispatch) => {
    try{
        const {data} = await api.register(authInfo);
        dispatch({ type : AUTH, data });
        router('/dashboard/app');
    }catch(error){
        console.log(error);
    }
}

export const logout = (router) => async(dispatch) => {
    try{
        dispatch({ type : LOGOUT, data : null });
        router('/login');
    }catch(error){
        console.log(error);
    }
}

export const updatePassword = (passwordInfo) => async(dispatch) => {
    try{
        const {data} = await api.updatePassword(passwordInfo);
        console.log(data);
        dispatch({ type : AUTH, data });
    }catch(error){
        console.log(error);
    }
}