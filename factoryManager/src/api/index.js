import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:8080/api/furnishi'
});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer $(JSON.parse(localStorage.getItem('profile')).token)`;
    }
    return req;
} , (error) => {
    return Promise.reject(error);
} );

export const login = (authInfo) => API.post("/login", authInfo);
export const register = (authInfo) => API.post("/register", authInfo);
export const updatePassword = (authInfo) => API.post("/updatePassword", authInfo);

export const addSource = (sourceInfo) => API.post("/addSource", sourceInfo);
export const getSources = () => API.get("/getSources");

export const addCordinatorType = (cordinatorTypeInfo) => API.post("/addCordinatorType", cordinatorTypeInfo);
export const getCordinatorTypes = () => API.get("/getCordinatorTypes");

export const addFactoryInfo = (factoryInfo) => API.post("/addFactoryInfo", factoryInfo);
export const getFactoryInfos = () => API.get("/getFactoryInfos");