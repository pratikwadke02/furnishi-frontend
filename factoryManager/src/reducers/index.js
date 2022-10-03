import {combineReducers} from 'redux';

import auth from './auth/auth'

import source from './master/source';
import cordinatorType from './master/cordinatorType';
import factoryInfo from './master/factoryInfo';
import product from './master/product';
// import enquiry from './enquiry/enquiry'
// import order from './order/order'


export const reducers = combineReducers({
    auth,
    source,
    cordinatorType,
    factoryInfo,
    product,
    // enquiry,
    // order
});