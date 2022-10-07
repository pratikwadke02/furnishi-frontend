import axios from 'axios'

const API = axios.create({
    baseURL: 'https://furnishi.herokuapp.com/api/furnishi'
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

export const addCordinator = (cordinatorInfo) => API.post("/addCordinator", cordinatorInfo);
export const getCordinators = () => API.get("/getCordinators");

export const addProduct = (productInfo) => API.post("/addProduct", productInfo);
export const getProducts = () => API.get("/getProducts");

export const addFactoryInfo = (factoryInfo) => API.post("/addFactoryInfo", factoryInfo);
export const getFactoryInfos = () => API.get("/getFactoryInfos");

export const addLocation = (locationInfo) => API.post("/addLocation", locationInfo);
export const getLocations = () => API.get("/getLocations");

export const addSnagAction = (snagActionInfo) => API.post("/addSnagAction", snagActionInfo);
export const getSnagActions = () => API.get("/getSnagActions");

export const addSnagCost = (snagCostInfo) => API.post("/addSnagCost", snagCostInfo);
export const getSnagCosts = () => API.get("/getSnagCosts");

export const addSnagIssue = (snagIssueInfo) => API.post("/addSnagIssue", snagIssueInfo);
export const getSnagIssues = () => API.get("/getSnagIssues");

export const addSnagSolution = (snagSolutionInfo) => API.post("/addSnagSolution", snagSolutionInfo);
export const getSnagSolutions = () => API.get("/getSnagSolutions");

export const addStatus = (statusInfo) => API.post("/addStatus", statusInfo);
export const getStatuses = () => API.get("/getStatuses");

export const addStatusAction = (statusActionInfo) => API.post("/addStatusAction", statusActionInfo);
export const getStatusActions = () => API.get("/getStatusActions");

export const addWorkType = (workTypeInfo) => API.post("/addWorkType", workTypeInfo);
export const getWorkTypes = () => API.get("/getWorkTypes");

export const addEnquiry = (enquiryInfo) => API.post("/addEnquiry", enquiryInfo);
export const getEnquiries = () => API.get("/getEnquiries");

export const addOrder = (orderInfo) => API.post("/addOrder", orderInfo);
export const getOrders = () => API.get("/getOrders");

export const addSnaglist = (snaglistInfo) => API.post("/addSnaglist", snaglistInfo);
export const getSnaglists = () => API.get("/getSnaglists")