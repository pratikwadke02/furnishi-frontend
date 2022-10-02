import {combineReducers} from 'redux';

import product from './master/product'
import manager from './master/manager'
import cordinator from './master/cordinator'
import archtDesigr from './master/archDesigr'
import auth from './auth/auth'
import enquiry from './enquiry/enquiry'
import order from './order/order'


export const reducers = combineReducers({
    product,
    manager,
    cordinator,
    archtDesigr,
    auth,
    enquiry,
    order
});