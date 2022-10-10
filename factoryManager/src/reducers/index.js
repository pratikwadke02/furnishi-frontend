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
import carcass from './master/carcass';
import shutter  from './master/shutter';
import salesPerson from './master/salesPerson';
import designer from './master/designer';
import siteSurveyor from './master/siteSurveyor';
import planner from './master/planner';

import enquiry from './enquiry/enquiry'
import order from './order/order'
import snaglist from './snaglist/snaglist'
import orderlist from './orderlist/orderlist'


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
    enquiry,
    order,
    snaglist,
    carcass,
    shutter,
    salesPerson,
    designer,
    siteSurveyor,
    planner,
    orderlist
});