import {combineReducers} from 'redux';

import customerInfo from './customerInformation'
import customerReg from './customerRegistration'
import survey from './survey'
import workPartner from './workPartner'
import longService from './longServices'
import shortService from './shortServices'
import addOnService from './addOnService'
import workPartnerAddOnService from './workPartnerAddOnServices'
import workPartnerLongService from './workPartnerLongServices'
import workPartnerShortService from './workPartnerShortServices'
import product from './master/product'
import manager from './master/manager'
import cordinator from './master/cordinator'
import archtDesigr from './master/archDesigr'
import auth from './auth/auth'
import enquiry from './enquiry/enquiry'
import order from './order/order'


export const reducers = combineReducers({
    customerInfo,
    customerReg,
    survey,
    workPartner,
    longService,
    shortService,
    addOnService,
    workPartnerAddOnService,
    workPartnerLongService,
    workPartnerShortService,
    product,
    manager,
    cordinator,
    archtDesigr,
    auth,
    enquiry,
    order
});