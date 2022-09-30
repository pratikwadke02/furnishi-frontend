import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// material
import { styled } from '@mui/material/styles';

//
import { getCustomerInfo } from '../../actions/customerInformation';
import { getCustomerReg } from '../../actions/customerRegistration';
import { getSurvey } from '../../actions/survey';
import { getWorkPartner } from '../../actions/workPartner';
import { getLongServices } from '../../actions/longServices';
import { getShortServices } from '../../actions/shortServices';
import { getAddOnServices } from '../../actions/addOnService';
import { getWorkPartnerAddOnServices } from '../../actions/workPartner/addOnServices';
import { getWorkPartnerLongServices } from '../../actions/workPartner/longServices';
import { getWorkPartnerShortServices } from '../../actions/workPartner/shortServices';
import { getProducts } from '../../actions/master/product';
import { getManagers } from '../../actions/master/manager';
import { getCordinators } from '../../actions/master/cordinator';
import { getArchtDesigrs } from '../../actions/master/archDesgr';
import { getEnquiries } from '../../actions/enquiry/enquiry';
import { getOrders } from '../../actions/order/order';

//
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';


// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getReduxData = async () => {
      dispatch(getCustomerInfo());
      dispatch(getCustomerReg());
      dispatch(getSurvey());
      dispatch(getWorkPartner());
      dispatch(getLongServices());
      dispatch(getShortServices());
      dispatch(getAddOnServices());
      dispatch(getWorkPartnerAddOnServices());
      dispatch(getWorkPartnerLongServices());
      dispatch(getWorkPartnerShortServices());
      dispatch(getProducts());
      dispatch(getManagers());
      dispatch(getCordinators());
      dispatch(getArchtDesigrs());
      dispatch(getEnquiries());
      dispatch(getOrders());
    };
    getReduxData();
  }, [dispatch]);

  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
