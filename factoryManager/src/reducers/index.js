import {combineReducers} from 'redux';

import auth from './auth/auth'

import source from './master/source';
import cordinatorType from './master/cordinatorType';
// import enquiry from './enquiry/enquiry'
// import order from './order/order'


export const reducers = combineReducers({
    auth,
    source,
    cordinatorType,
    // enquiry,
    // order
});