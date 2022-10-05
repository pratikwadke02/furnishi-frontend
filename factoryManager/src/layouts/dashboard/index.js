import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// material
import { styled } from '@mui/material/styles';

//
import { getProducts } from '../../actions/master/product';
import { getCordinatorTypes } from '../../actions/master/cordinatorType';
import { getCordinators } from '../../actions/master/cordinator';
import { getSources } from '../../actions/master/source';
import { getFactoryInfos } from '../../actions/master/factoryInfo';
import { getSnagActions } from '../../actions/master/snagAction';
import { getSnagCosts } from '../../actions/master/snagCost';
import { getSnagIssues } from '../../actions/master/snagIssue';
import { getSnagSolutions } from '../../actions/master/snagSolution';
import { getStatuses } from '../../actions/master/status';
import { getStatusActions } from '../../actions/master/statusAction';
import { getLocations } from '../../actions/master/location';
import { getWorkTypes } from '../../actions/master/workType';
import { getEnquiries } from '../../actions/enquiry/enquiry';
import { getOrders } from '../../actions/order/order';
import { getSnaglists } from '../../actions/snaglist/snaglist';

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
       dispatch(getProducts());
       dispatch(getCordinatorTypes());
       dispatch(getCordinators());
       dispatch(getSources());
       dispatch(getFactoryInfos());
       dispatch(getSnagActions());
       dispatch(getSnagCosts());
       dispatch(getSnagIssues());
       dispatch(getSnagSolutions());
       dispatch(getStatuses());
       dispatch(getStatusActions());
       dispatch(getLocations());
       dispatch(getWorkTypes());
       dispatch(getEnquiries());
        // dispatch(getOrders());
        // dispatch(getSnaglists());
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
