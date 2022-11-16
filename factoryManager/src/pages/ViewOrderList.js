import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
// import axios from 'axios';
import {
  Box,
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Tab,
  Tabs,
  Modal,
  IconButton,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Iconify from '../components/Iconify';
import Page from '../components/Page';
import ArchitectDesigner from '../components/Master/Architect.Designer';
import ArchitectDesignerCordinator from '../components/Master/Architect.Designer.Cordinator';
import NewEnquiry from '../components/Enquiry/NewEnquiry';
import AllEnquiries from '../components/Enquiry/AllEnquiries';
import Manager from '../components/Master/Manager';
import Product from '../components/Master/Product';
import Customer from '../components/Master/Customer';
import ViewOrderList from '../components/orderlist/ViewOrderList';
import AllOrderList from '../components/orderlist/AllOrderList';
import History from '../components/orderlist/History';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '100%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 800,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 1,
  p: 2,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p:2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const OrderList = () => {
  const orderNumber = useParams().id;
  // console.log(orderNumber);
  
  const products = (useSelector((state) => state.product.products));
  const cordinators = (useSelector((state) => state.cordinator.cordinators));
  const statuses = (useSelector((state) => state.status.statuses));
  const orders = (useSelector((state) => state.order.orders));
  const carcasses = (useSelector((state) => state.carcass.carcasses));
  const shutters = (useSelector((state) => state.shutter.shutters));
  const planners = (useSelector((state) => state.planner.planners));
  const designers = (useSelector((state) => state.designer.designers));
  const siteSurveyors = (useSelector((state) => state.siteSurveyor.siteSurveyors));
  const salesPersons = (useSelector((state) => state.salesPerson.salesPersons));
  const orderLists = (useSelector((state) => state.orderlist.orderlists));
  const sources = (useSelector((state) => state.source.sources));
  const factoryEngineers = (useSelector((state) => state.factoryEngineer.factoryEngineers));

  const orderlist = orderLists.find((orderlist) => orderlist.orderNumber === orderNumber);
  console.log(orderlist);

  const history = (useSelector((state) => state.history.history));

  const historyList = history.filter((history) => history.orderNumber === orderNumber);
  console.log(historyList);

  const [headTab, setHeadTab] = useState(0);
  const [subTab, setSubTab] = useState(0);


  const handleHeadTabChange = (event, newValue) => {
    setHeadTab(newValue);
  };

  const [open, setOpen] = useState(false);
  const [enquiryData, setEnquiryData] = useState([]);

  const nextEnquiry = async(id) => {
    // id += 1;
    // await enquiries.map((enquiry) => {
    //   if (enquiry.id === id) {
    //     setEnquiryData(enquiry);
    //   }
    //   return null;
    // }
    // );
  };

  const previousEnquiry = async(id) => {
    // if(id > 1){
    //   id -= 1;
    //   await enquiries.map((enquiry) => {
    //     if (enquiry.id === id) {
    //       setEnquiryData(enquiry);
    //     }
    //     return null;
    //   }
    //   );
    // }
  };

  const handleOpenModal = async(id) => {
    console.log(id);
    orderLists.map((order) => {
      if (order.id === id) {
        setEnquiryData(order);
      }
      return null;
    });
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  console.log(enquiryData);

  if (!orderlist) return 'Loading...';
  return (
    <>
      <Page title="Orderlist">
        <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Order List
          </Typography>
          {/* <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Setting
          </Button> */}
        </Stack>
          <Card sx={{ p: 2 }}>
            <Box>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={headTab} onChange={handleHeadTabChange} aria-label="basic tabs example">
                  <Tab label="View Order List" {...a11yProps(0)} />
                  <Tab label="History" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={headTab} index={0}>
                <ViewOrderList cordinators={cordinators} products={products} statuses={statuses} carcasses={carcasses} shutters={shutters} planners={planners} salesPersons={salesPersons} designers={designers} siteSurveyors={siteSurveyors} sources={sources} factoryEngineers={factoryEngineers} orderlistData = {orderlist} />
                </TabPanel>
              <TabPanel value={headTab} index={1}>
                <History historyList={historyList} />
              </TabPanel>
            </Box>
          </Card>
        </Container>
      </Page>
    </>
  );
};

export default OrderList;
