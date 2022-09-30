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

export const addCustomerInfo = (customerInfo) => API.post('/addCustomerInfo', customerInfo );
export const getCustomerInfo = () => API.get('/getCustomerInfo');

export const addCustomerReg = (customerReg) => API.post('/addCustomerReg', customerReg );
export const getCustomerReg = () => API.get('/getCustomerReg');

export const addSurvey = (survey) => API.post('/addSurvey', survey );
export const getSurvey = () => API.get('/getSurvey');

export const addWorkPartner = (workPartner) => API.post('/addWorkPartner', workPartner );
export const getWorkPartner = () => API.get('/getWorkPartner');

export const getLongServices = () => API.get('/getLongServices');
export const updateLongServices = (longServices) => API.put('/updateLongServices', longServices );

export const getShortServices = () => API.get('/getShortServices');
export const updateShortServices = (shortServices) => API.put('/updateShortServices', shortServices );

export const getAddOnServices = () => API.get('/getAddOnServices');
export const updateAddOnServices = (addOnServices) => API.put('/updateAddOnServices', addOnServices );

export const getWorkPartnerAddOnServices = () => API.get('/getWorkPartnerAddOnServices');
export const updateWorkPartnerAddOnServices = (workPartnerAddOnServices) => API.put('/updateWorkPartnerAddOnServices', workPartnerAddOnServices );

export const getWorkPartnerLongServices = () => API.get('/getWorkPartnerLongServices');
export const updateWorkPartnerLongServices = (workPartnerLongServices) => API.put('/updateWorkPartnerLongServices', workPartnerLongServices );

export const getWorkPartnerShortServices = () => API.get('/getWorkPartnerShortServices');
export const updateWorkPartnerShortServices = (workPartnerShortServices) => API.put('/updateWorkPartnerShortServices', workPartnerShortServices );

export const addProduct = (product) => API.post('/addProduct', product );
export const getProducts = () => API.get('/getProducts');

export const addManager = (managerInfo) => API.post('/addManager', managerInfo );
export const getManagers = () => API.get('/getManagers');

export const addCordinator = (cordinatorInfo) => API.post('/addArchtDesigrCord', cordinatorInfo );
export const getCordinators = () => API.get('/getArchtDesigrCord');

export const addArchtDesigr = (archtDesigrInfo) => API.post('/addArchtDesigr', archtDesigrInfo );
export const getArchtDesigrs = () => API.get('/getArchtDesigr');

export const addEnquiry = (enquiryInfo) => API.post('/addEnquiry', enquiryInfo );
export const getEnquiries = () => API.get('/getEnquiries');

export const addOrder = (orderInfo) => API.post('/addOrder', orderInfo );
export const getOrders = () => API.get('/getOrders');