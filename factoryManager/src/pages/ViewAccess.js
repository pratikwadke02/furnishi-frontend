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
import ViewAccess from '../components/AccessManager/ViewAccess';
import AllAssistantUsers from '../components/AccessManager/AllAssistantUsers';
import AllEnquiries from '../components/Enquiry/AllEnquiries';
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

const PanelManager = () => {
  const {id} = useParams();
  console.log(id);
  const products = (useSelector((state) => state.product.products));
  const cordinators = (useSelector((state) => state.cordinator.cordinators));
  const statusActions = (useSelector((state) => state.statusAction.statusActions));
  const enquiries = (useSelector((state) => state.enquiry.enquiries));
  const statuses = (useSelector((state)=> state.status.statuses));
  const carcasses = (useSelector((state) => state.carcass.carcasses));
  const shutters = (useSelector((state) => state.shutter.shutters));
  const panels = (useSelector((state) => state.panel.panels));
  const orderlists = (useSelector((state) => state.orderlist.orderlists));
  const assistantUsers = (useSelector((state) => state.assistantUser.assistantUsers));

  console.log(assistantUsers);
  const assistantUser = assistantUsers.find((assistantUser) => assistantUser.id === parseInt(id, 10));
  console.log(assistantUser);
  
  const handleBool = (value) => {
    switch(parseInt(value, 10)) {
        case 1:
            return true;
        case 0:
            return false;
        default:
            return value;
    }
    } 

    const cleanedAssistantUser = {};
    
    console.log(cleanedAssistantUser);


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
    enquiries.map((enquiry) => {
      if (enquiry.id === id) {
        setEnquiryData(enquiry);
      }
      return null;
    });
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };


  if(!assistantUser) return 'Loading...';

  return (
    <>
      <Page title="Enquiry">
        <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            View Access
          </Typography>
          {/* <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Setting
          </Button> */}
        </Stack>
        <Card sx={{ p: 2 }}>
            <Box>
              {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={headTab} onChange={handleHeadTabChange} aria-label="basic tabs example">
                  <Tab label="New Assistant User" {...a11yProps(0)} />
                  <Tab label="All Assistant Users" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={headTab} index={0}> */}
              <ViewAccess cordinators={cordinators} products={products} statusActions={statusActions} statuses={statuses} carcasses={carcasses} shutters={shutters} panels={panels} orderlists={orderlists} assistantUserData = {assistantUser} />
              {/* </TabPanel>
              <TabPanel value={headTab} index={1}>
                <AllAssistantUsers assistantUsers={assistantUsers} openModal={handleOpenModal} />
              </TabPanel> */}
            </Box>
          </Card>
        </Container>
      </Page>
    </>
  );
};

export default PanelManager;
