import {combineReducers} from 'redux';

import auth from './auth/auth'

import source from './master/source';
import cordinatorType from './master/cordinatorType';
import cordinator from './master/cordinator';
import factoryInfo from './master/factoryInfo';
import product from './master/product';
import location from './master/location';
import snagAction from './master/snagAction';
import snagCost from './master/snagCost';
import snagIssue from './master/snagIssue';
import snagSolution from './master/snagSolution';
import status from './master/status';
import statusAction from './master/statusAction';
import workType from './master/workType';

// import enquiry from './enquiry/enquiry'
// import order from './order/order'


export const reducers = combineReducers({
    auth,
    source,
    cordinatorType,
    cordinator,
    factoryInfo,
    product,
    location,
    snagAction,
    snagCost,
    snagIssue,
    snagSolution,
    status,
    statusAction,
    workType,
    // enquiry,
    // order
});