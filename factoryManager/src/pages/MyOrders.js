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
import NewOrder from '../components/MyOrders/NewOrder';
import OrderClosed from '../components/MyOrders/OrderClose';
import OrderOpen from '../components/MyOrders/OrderOpen';

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
  const products = (useSelector((state) => state.product.products));
  const cordinators = (useSelector((state) => state.cordinator.cordinators));
  const statuses = (useSelector((state) => state.status.statuses));
  const orders = (useSelector((state) => state.order.orders));

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
    orders.map((order) => {
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

  return (
    <>
    <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {
          enquiryData ? (
            <Card sx={style}>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <Typography variant="h4">Order ID: {enquiryData.orderId}</Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Box>
              <Typography variant="h6">Personal Details</Typography>
            </Box>
            <Box sx={{display:'flex'}}>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Name: {enquiryData.name}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Number: {enquiryData.number}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Address: {enquiryData.address}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Pincode: {enquiryData.pincode}</Typography>
              </Box>
            </Box>
            <Box sx={{mt:1}}>
              <Typography variant="h6">Service Details</Typography>
            </Box>
            <Box sx={{display:'flex'}}>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Type: {enquiryData.serviceType}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Site Condition: {enquiryData.siteCondition}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Product Type: {enquiryData.productType}</Typography>
              </Box>
              <Box sx={{width:'100%'}}/>
            </Box>
            <Box sx={{display:'flex'}}>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Face Area: {enquiryData.faceArea} SqFt</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Floating Shelf: {enquiryData.floatingShelf}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Spot Light: {enquiryData.spotLight} Nos</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Strip Light: {enquiryData.stripLight} Nos</Typography>
              </Box>
            </Box>
            <Box sx={{mt:1}}>
              <Typography variant="h6">Completion Targets</Typography>
            </Box>
            <Box sx={{display:'flex'}}>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Expected Start Date: {enquiryData.expectedStartDate ? enquiryData.expectedStartDate.substring(0,10 ) : null}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Expected End Date: {enquiryData.expectedEndDate ? enquiryData.expectedEndDate.substring(0,10 ) : null}</Typography>
              </Box>
            </Box>
            <Box sx={{mt:1}}>
              <Typography variant="h6">Working Hours</Typography>
            </Box>
            <Box sx={{display:'flex'}}>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Start Time: {enquiryData.startTime ? enquiryData.startTime.substring(12,19) : null} </Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">End Time: {enquiryData.endTime ? enquiryData.endTime.substring(12,19) : null}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Break Start Time: {enquiryData.breakStartTime ? enquiryData.breakStartTime.substring(12,19) : null}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Break End Time: {enquiryData.breakEndTime ? enquiryData.breakEndTime.substring(12,19) : null}</Typography>
              </Box>
            </Box>
            <Box sx={{mt:1}}>
              <Typography variant="h6">Work Details</Typography>
            </Box>
            <Box sx={{display:'flex'}}>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Work Phase: {enquiryData.workPhase}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Details: {enquiryData.workPhaseDetails}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Status: {enquiryData.status}</Typography>
              </Box>
              <Box sx={{width:'100%'}}/>
            </Box>
            <Box sx={{mt:1}}>
              <Typography variant="h6">Other Details</Typography>
            </Box>
            <Box sx={{display:'flex'}}>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Locality: {enquiryData.locality}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Pincode: {enquiryData.pincode}</Typography>
              </Box>
              <Box sx={{width:'100%'}}>
              <Typography variant="body1">Quote: {enquiryData.quote}</Typography>
              </Box>
              <Box sx={{width:'100%'}}/>
            </Box>
          </Box>
          <Box sx={{mt:1,float:'right'}}>
            <IconButton onClick={previousEnquiry(enquiryData.id)} sx={{border:'1px solid', borderColor:'primary.main', mr:1, p:0}}>
              <KeyboardArrowLeftOutlinedIcon color='primary'  />
            </IconButton>
            <IconButton onClick={nextEnquiry(enquiryData.id)} sx={{border:'1px solid', borderColor:'primary.main', ml:1, p:0}}>
              <KeyboardArrowRightOutlinedIcon color='primary'/>
            </IconButton>
          </Box>
        </Card>
          ) : null
          }        
      </Modal>
      <Page title="My Orders">
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
                  <Tab label="New Order" {...a11yProps(0)} />
                  <Tab label="Order Open" {...a11yProps(1)} />
                  <Tab label="Order Closed" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <TabPanel value={headTab} index={0}>
                <NewOrder cordinators={cordinators} products={products} statuses={statuses} />
              </TabPanel>
              <TabPanel value={headTab} index={1}>
                <OrderOpen orders={orders} openModal={handleOpenModal} />
              </TabPanel>
              <TabPanel value={headTab} index={2}>
                <OrderClosed orders={orders} openModal={handleOpenModal} />
              </TabPanel>
            </Box>
          </Card>
        </Container>
      </Page>
    </>
  );
};

export default MyOrders;
