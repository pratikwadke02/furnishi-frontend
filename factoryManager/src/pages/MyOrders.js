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
  Modal
} from '@mui/material';
import { useSelector } from 'react-redux';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Iconify from '../components/Iconify';
import Page from '../components/Page';

import NewOrder from '../components/MyOrders/NewOrder';
import AllOrders from '../components/MyOrders/AllOrders';
import Manager from '../components/Master/Manager';
import Product from '../components/Master/Product';
import Customer from '../components/Master/Customer';


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

const MyOrders = () => {

  const orders = useSelector((state) => state.order.orders);
  const cordinators = (useSelector(state => state.cordinator.cordinators));
  

  const [headTab, setHeadTab] = useState(0);
  const [subTab, setSubTab] = useState(0);


  const handleHeadTabChange = (event, newValue) => {
    setHeadTab(newValue);
  };

  const [open, setOpen] = useState(false);
  const [orderData, setOrderData] = useState([]);

  const handleOpenModal = async(id) => {
    console.log(id);
    orders.map((order) => {
      if (order.id === id) {
        setOrderData(order);
      }
      return null;
    });
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  console.log(orderData);

  return (
    <>
    <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <Typography variant="h4">Order Code: {orderData.orderCode}</Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Box>
              <Typography variant="h6">Personal Details</Typography>
            </Box>
            <Box sx={{display:'flex'}}>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Name: {orderData.clientName}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Code: {orderData.clientCode}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Product Code: {orderData.clientProductCode}</Typography>
              </Box>
              <Box sx={{width:'100%'}}/>
            </Box>
            <Box sx={{mt:1}}>
              <Typography variant="h6">Service Details</Typography>
            </Box>
            <Box sx={{display:'flex'}}>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Type: {orderData.serviceType}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Site Condition: {orderData.siteCondition}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Product Type: {orderData.productType}</Typography>
              </Box>
              <Box sx={{width:'100%'}}/>
            </Box>
            <Box sx={{display:'flex'}}>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Face Area: {orderData.faceArea} SqFt</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Floating Shelf: {orderData.floatingShelf}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Spot Light: {orderData.spotLight} Nos</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Strip Light: {orderData.stripLight} Nos</Typography>
              </Box>
            </Box>
            <Box sx={{mt:1}}>
              <Typography variant="h6">Completion Targets</Typography>
            </Box>
            <Box sx={{display:'flex'}}>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Expected Start Date: {orderData.expectedStartDate ? orderData.expectedStartDate.substring(0,10 ) : null}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Expected End Date: {orderData.expectedEndDate ? orderData.expectedEndDate.substring(0,10 ) : null}</Typography>
              </Box>
            </Box>
            <Box sx={{mt:1}}>
              <Typography variant="h6">Working Hours</Typography>
            </Box>
            <Box sx={{display:'flex'}}>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Start Time: {orderData.startTime ? orderData.startTime.substring(12,19) : null} </Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">End Time: {orderData.endTime ? orderData.endTime.substring(12,19) : null}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Break Start Time: {orderData.breakStartTime ? orderData.breakStartTime.substring(12,19) : null}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Break End Time: {orderData.breakEndTime ? orderData.breakEndTime.substring(12,19) : null}</Typography>
              </Box>
            </Box>
            <Box sx={{mt:1}}>
              <Typography variant="h6">Work Details</Typography>
            </Box>
            <Box sx={{display:'flex'}}>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Work Phase: {orderData.workPhase}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Details: {orderData.workPhaseDetails}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Status: {orderData.status}</Typography>
              </Box>
              <Box sx={{width:'100%'}}/>
            </Box>
            <Box sx={{mt:1}}>
              <Typography variant="h6">Other Details</Typography>
            </Box>
            <Box sx={{display:'flex'}}>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Locality: {orderData.locality}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Pincode: {orderData.pincode}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Quote: {orderData.quote}</Typography>
              </Box>
              <Box sx={{width:'100%'}}/>
            </Box>
          </Box>
        </Card>
      </Modal>
      <Page title="User">
        <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Orders
          </Typography>
          {/* <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Setting
          </Button> */}
        </Stack>
          <Card sx={{ p: 2 }}>
            <Box>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={headTab} onChange={handleHeadTabChange} aria-label="basic tabs example">
                  <Tab label="New Order" {...a11yProps(0)} />
                  <Tab label="All Orders" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={headTab} index={0}>
                <NewOrder />
              </TabPanel>
              <TabPanel value={headTab} index={1}>
                <AllOrders orders={orders} openModal={handleOpenModal}/>
              </TabPanel>
            </Box>
          </Card>
        </Container>
      </Page>
    </>
  );
};

export default MyOrders;
