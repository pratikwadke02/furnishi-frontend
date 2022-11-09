import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import {
  Box,
  Card,
  Table,
  Grid,
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
  FormControlLabel,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import EnquiryFMTable from './EnquiryFMTable'
import { addEnquiry } from '../../actions/enquiry/enquiry';
import { addNewAssistantUser } from '../../actions/assistantUser/assistantUser';

const AccessManager = (props) => {

  const {cordinators, products, statusActions, statuses, carcasses, shutters, panels, orderlists} = props;

  const [assistantUser, setAssistantUser] = useState({
    panel: '',
    name: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    orderNumber: '',
    receivedDate: false,
    targetDate: false,
    customerName: false,
    customerNumber: false,
    siteAddress: false,
    sitePincode: false,
    siteGoogleLocation: false,
    source: false,
    sourceCordinator: false,
    sourceCordinatorNumber: false,
    customerCordinator: false,
    customerCordinatorNumber: false,
    factoryCordinator: false,
    factoryCordinatorNumber: false,
    product: false,
    location: false,
    noOfServices: false,
    area: false,
    orderValue: false,
    paymentReceived: false,
    currentStatus: false,
    carcass: false,
    shutter: false,
    salesPerson: false,
    designer: false,
    indentNumber: false,
    finalSiteSurveyor: false,
    workStartTime: false,
    workEndTime: false,
    factoryEngineer: false,
    accountClearance: false,
    designClearance: false,
    indentRelease: false,
    shopDocuments: false,
    stockCheck: false,
    poPrepare: false,
    poApproval: false,
    poRelease: false,
    rawMaterialAvailable: false,
    otherMaterialAvailable: false,
    jobWorkDone: false,
    panelProduction: false,
    paintMaterialProduction: false,
    otherMaterialProduction: false,
    assembly: false,
    cleaning: false,
    packing: false,
    dispatch: false,
  });

  const handleChange = ({ currentTarget: input }) => {
    setAssistantUser({
      ...assistantUser,
      [input.name]: input.value,
    });
    console.log(assistantUser);
  };

  const handleAccessChange = (event) => {
    setAssistantUser({
        ...assistantUser,
        [event.target.name]: event.target.value,
    });
    console.log(assistantUser);
    };

  const [age, setAge] = React.useState('');

//   const handleStatusChange = (event) => {
//     setAssistantUser({
//       ...assistantUser,
//       currentStatus: event.target.value,
//     });
//     console.log(assistantUser);
//   };
//   const handleActionChange = (event) => {
//     setEnquiry({
//       ...assistantUser,
//       action: event.target.value,
//     });
//     console.log(assistantUser);
//   };
//   const handleCarcassChange = (event) => {
//     setEnquiry({
//       ...assistantUser,
//       carcass: event.target.value,
//     });
//   };
//   const handleShutterChange = (event) => {
//     setEnquiry({
//       ...assistantUser,
//       shutter: event.target.value,
//     });
//   };
//   const handleCustomerCordinatorChange = (event) => {
//     const cordinator = cordinators.find((cordinator) => cordinator.id === event.target.value);
//     setEnquiry({
//       ...assistantUser,
//       customerCordinator: cordinator.cordinatorName,
//       customerCordinatorNumber: cordinator.cordinatorNumber,
//     })
//     console.log(assistantUser);
//   };

//   const handleSourceCordinatorChange = (event) => {
//     const cordinator = cordinators.find((cordinator) => cordinator.id === event.target.value);
//     setEnquiry({
//       ...enquiry,
//       sourceCordinator: cordinator.cordinatorName,
//       sourceCordinatorNumber: cordinator.cordinatorNumber,
//     })
//     console.log(enquiry);
//   };
//   const handleFCordinatorChange = (event) => {
//     const cordinator = cordinators.find((cordinator) => cordinator.id === event.target.value);
//     setEnquiry({
//       ...enquiry,
//       factoryCordinator: cordinator.cordinatorName,
//       factoryCordinatorNumber: cordinator.cordinatorNumber,
//     })
//     console.log(enquiry);
//   };
  const handlePanelChange = (event) => {
    setAssistantUser({
      ...assistantUser,
        panel: event.target.value,
    });
  };

  const handleOrderNumberChange = (event) => {
    const order = orderlists.find((order) => order.id === event.target.value);
    setAssistantUser({
        ...assistantUser,
        orderNumber: event.target.value,
    });
    console.log(assistantUser);
    };
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(assistantUser);
      dispatch(addNewAssistantUser(assistantUser));
    //   setEnquiry({
    //     targetDate: null,
    // sitePincode: '',
    // product: '',
    // area: '',
    // currentStatus: '',
    // carcass: '',
    // shutter: '',
    // workStartTime: null,
    // workEndTime: null,
    // dispatch:'',
    // estimate: '',
    // action: ''
    //   });
      alert('Access created successfully');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: {md: 1} }}>
                <InputLabel id="demo-simple-select-label">Panel</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={assistantUser.panel}
                  label="Panel"
                  onChange={handlePanelChange}
                >
                  {
                    panels.map(panel => (
                      <MenuItem value={panel.panel}>{panel.panel}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
              <TextField
                fullWidth
                sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                label="Name"
                name="name"
                onChange={handleChange}
                required
                value={assistantUser.name}
                variant="outlined"
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                fullWidth   
                sx={{ width: '100%', mr: { md: 1 } }}
                label="Mobile Number"
                name="mobileNumber"
                onChange={handleChange}
                required
                value={assistantUser.mobileNumber}
                variant="outlined"
                />
                <TextField
                fullWidth
                sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                label="Email"
                name="email"
                onChange={handleChange}
                required
                value={assistantUser.email}
                variant="outlined"
                />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                fullWidth
                sx={{ width: '100%', mr: { md: 1 } }}
                label="Password"
                name="password"
                onChange={handleChange}
                required
                value={assistantUser.password}
                variant="outlined"
                />
                <TextField
                fullWidth
                sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                label="Confirm Password"
                name="confirmPassword"
                onChange={handleChange}
                required
                value={assistantUser.confirmPassword}
                variant="outlined"
                />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: {md: 1} }}>
                <InputLabel id="demo-simple-select-label">Order Number</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={assistantUser.orderNumber}
                  label="Order Number"
                  onChange={handleOrderNumberChange}
                >
                  {
                    orderlists.map(orderlist => (
                      <MenuItem value={orderlist.orderNumber}>{orderlist.orderNumber}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
                <Box sx={{ width: '100%', ml: { md: 1 }, }}/>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Typography variant="h6" sx={{ width: '100%', mr: { md: 1 } }}>
                    Choose Access For
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.receivedDate}
                        onChange={() => setAssistantUser({ ...assistantUser, receivedDate: !assistantUser.receivedDate })}
                        name="receivedDate"
                    />
                    }
                    label="Received Date"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.targetDate}
                        onChange={() => setAssistantUser({ ...assistantUser, targetDate: !assistantUser.targetDate })}
                        name="targetDate"
                    />
                    }
                    label="Target Date"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.customerName}
                        onChange={() => setAssistantUser({ ...assistantUser, customerName: !assistantUser.customerName })}
                        name="customerName"
                    />
                    }
                    label="Customer Name"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.customerNumber}
                        onChange={() => setAssistantUser({ ...assistantUser, customerNumber: !assistantUser.customerNumber })}
                        name="customerNumber"
                    />
                    }
                    label="Customer Number"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.siteAddress}
                        onChange={() => setAssistantUser({ ...assistantUser, siteAddress: !assistantUser.siteAddress })}
                        name="siteAddress"
                    />
                    }
                    label="Site Address"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.sitePincode}
                        onChange={() => setAssistantUser({ ...assistantUser, sitePincode: !assistantUser.sitePincode })}
                        name="sitePincode"
                    />
                    }
                    label="Site Pincode"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.siteGoogleLocation}
                        onChange={() => setAssistantUser({ ...assistantUser, siteGoogleLocation: !assistantUser.siteGoogleLocation })}
                        name="siteGoogleLocation"
                    />
                    }
                    label="Site Google Location"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.source}
                        onChange={() => setAssistantUser({ ...assistantUser, source: !assistantUser.source })}
                        name="source"
                    />
                    }
                    label="Source"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.sourceCordinator}
                        onChange={() => setAssistantUser({ ...assistantUser, sourceCordinator: !assistantUser.sourceCordinator })}
                        name="sourceCordinator"
                    />
                    }
                    label="Source Cordinator"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.sourceCordinatorNumber}
                        onChange={() => setAssistantUser({ ...assistantUser, sourceCordinatorNumber: !assistantUser.sourceCordinatorNumber })}
                        name="sourceCordinatorNumber"
                    />
                    }
                    label="Source Cordinator Number"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.customerCordinator}
                        onChange={() => setAssistantUser({ ...assistantUser, customerCordinator: !assistantUser.customerCordinator })}
                        name="customerCordinator"
                    />
                    }
                    label="Customer Cordinator"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.customerCordinatorNumber}
                        onChange={() => setAssistantUser({ ...assistantUser, customerCordinatorNumber: !assistantUser.customerCordinatorNumber })}
                        name="customerCordinatorNumber"
                    />
                    }
                    label="Customer Cordinator Number"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.factoryCordinator}
                        onChange={() => setAssistantUser({ ...assistantUser, factoryCordinator: !assistantUser.factoryCordinator })}
                        name="factoryCordinator"
                    />
                    }
                    label="Factory Cordinator"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.factoryCordinatorNumber}
                        onChange={() => setAssistantUser({ ...assistantUser, factoryCordinatorNumber: !assistantUser.factoryCordinatorNumber })}
                        name="factoryCordinatorNumber"
                    />
                    }
                    label="Factory Cordinator Number"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.product}
                        onChange={() => setAssistantUser({ ...assistantUser, product: !assistantUser.product })}
                        name="product"
                    />
                    }
                    label="Product"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.location}
                        onChange={() => setAssistantUser({ ...assistantUser, location: !assistantUser.location })}
                        name="location"
                    />
                    }
                    label="Location"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.noOfServices}
                        onChange={() => setAssistantUser({ ...assistantUser, noOfServices: !assistantUser.noOfServices })}
                        name="noOfServices"
                    />
                    }
                    label="No Of Services"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.area}
                        onChange={() => setAssistantUser({ ...assistantUser, area: !assistantUser.area })}
                        name="area"
                    />
                    }
                    label="Area"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.orderValue}
                        onChange={() => setAssistantUser({ ...assistantUser, orderValue: !assistantUser.orderValue })}
                        name="orderValue"
                    />
                    }
                    label="Order Value"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.paymentReceived}
                        onChange={() => setAssistantUser({ ...assistantUser, paymentReceived: !assistantUser.paymentReceived })}
                        name="paymentReceived"
                    />
                    }
                    label="Payment Received"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.currentStatus}
                        onChange={() => setAssistantUser({ ...assistantUser, currentStatus: !assistantUser.currentStatus })}
                        name="currentStatus"
                    />
                    }
                    label="Current Status"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.factoryEngineer}
                        onChange={() => setAssistantUser({ ...assistantUser, factoryEngineer: !assistantUser.factoryEngineer })}
                        name="factoryEngineer"
                    />
                    }
                    label="Factory Engineer"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.carcass}
                        onChange={() => setAssistantUser({ ...assistantUser, carcass: !assistantUser.carcass })}
                        name="carcass"
                    />
                    }
                    label="Carcass"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.shutter}
                        onChange={() => setAssistantUser({ ...assistantUser, shutter: !assistantUser.shutter })}
                        name="shutter"
                    />
                    }
                    label="Shutter"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.salesPerson}
                        onChange={() => setAssistantUser({ ...assistantUser, salesPerson: !assistantUser.salesPerson })}
                        name="salesPerson"
                    />
                    }
                    label="Sales Person"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.designer}
                        onChange={() => setAssistantUser({ ...assistantUser, designer: !assistantUser.designer })}
                        name="designer"
                    />
                    }
                    label="Designer"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.indentNumber}
                        onChange={() => setAssistantUser({ ...assistantUser, indentNumber: !assistantUser.indentNumber })}
                        name="indentNumber"
                    />
                    }
                    label="Indent Number"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.finalSiteSurveyor}
                        onChange={() => setAssistantUser({ ...assistantUser, finalSiteSurveyor: !assistantUser.finalSiteSurveyor })}
                        name="finalSiteSurveyor"
                    />
                    }
                    label="Final Site Surveyor"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.workStartTime}
                        onChange={() => setAssistantUser({ ...assistantUser, workStartTime: !assistantUser.workStartTime })}
                        name="workStartTime"
                    />
                    }
                    label="Work Start Time"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.workEndTime}
                        onChange={() => setAssistantUser({ ...assistantUser, workEndTime: !assistantUser.workEndTime })}
                        name="workEndTime"
                    />
                    }
                    label="Work End Time"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={   
                    <Checkbox
                        checked={assistantUser.indentRelease}
                        onChange={() => setAssistantUser({ ...assistantUser, indentRelease: !assistantUser.indentRelease })}
                        name="indentRelease"
                    />
                    }
                    label="Indent Release"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.accountClearance}
                        onChange={() => setAssistantUser({ ...assistantUser, accountClearance: !assistantUser.accountClearance })}
                        name="accountClearance"
                    />
                    }
                    label="Account Clearance"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.designClearance}
                        onChange={() => setAssistantUser({ ...assistantUser, designClearance: !assistantUser.designClearance })}
                        name="designClearance"
                    />
                    }
                    label="Design Clearance"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.shopDocuments}
                        onChange={() => setAssistantUser({ ...assistantUser, shopDocuments: !assistantUser.shopDocuments })}
                        name="shopDocuments"
                    />
                    }
                    label="Shop Documents"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel

                    control={
                    <Checkbox
                        checked={assistantUser.stockCheck}
                        onChange={() => setAssistantUser({ ...assistantUser, stockCheck: !assistantUser.stockCheck })}
                        name="stockCheck"
                    />
                    }
                    label="Stock Check"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.poPrepare}
                        onChange={() => setAssistantUser({ ...assistantUser, poPrepare: !assistantUser.poPrepare })}
                        name="poPrepare"
                    />
                    }
                    label="PO Prepare"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.poRelease}
                        onChange={() => setAssistantUser({ ...assistantUser, poRelease: !assistantUser.poRelease })}
                        name="poRelease"
                    />
                    }
                    label="PO Release"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.poApproval}
                        onChange={() => setAssistantUser({ ...assistantUser, poApproval: !assistantUser.poApproval })}
                        name="poApproval"
                    />
                    }
                    label="PO Approval"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.jobWorkDone}
                        onChange={() => setAssistantUser({ ...assistantUser, jobWorkDone: !assistantUser.jobWorkDone })}
                        name="jobWorkDone"
                    />
                    }
                    label="Job Work Done"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.rawMaterialAvailable}
                        onChange={() => setAssistantUser({ ...assistantUser, rawMaterialAvailable: !assistantUser.rawMaterialAvailable })}
                        name="rawMaterialAvailable"
                    />
                    }
                    label="Raw Material Available"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.otherMaterialAvailable}
                        onChange={() => setAssistantUser({ ...assistantUser, otherMaterialAvailable: !assistantUser.otherMaterialAvailable })}
                        name="otherMaterialAvailable"
                    />
                    }
                    label="Other Material Available"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.paintMaterialProduction}
                        onChange={() => setAssistantUser({ ...assistantUser, paintMaterialProduction: !assistantUser.paintMaterialProduction })}
                        name="paintMaterialProduction"
                    />
                    }
                    label="Paint Material Production"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.otherMaterialProduction}
                        onChange={() => setAssistantUser({ ...assistantUser, otherMaterialProduction: !assistantUser.otherMaterialProduction })}
                        name="otherMaterialProduction"
                    />
                    }
                    label="Other Material Production"
                />
                </Box>
            </Box>  
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.panelProduction}
                        onChange={() => setAssistantUser({ ...assistantUser, panelProduction: !assistantUser.panelProduction })}
                        name="panelProduction"
                    />
                    }
                    label="Panel Production"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.assembly}
                        onChange={() => setAssistantUser({ ...assistantUser, assembly: !assistantUser.assembly })}
                        name="assembly"
                    />
                    }
                    label="Assembly"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.cleaning}
                        onChange={() => setAssistantUser({ ...assistantUser, cleaning: !assistantUser.cleaning })}
                        name="cleaning"
                    />
                    }
                    label="Cleaning"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 }, mt: {xs: 2, md:0 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={assistantUser.packing}
                        onChange={() => setAssistantUser({ ...assistantUser, packing: !assistantUser.packing })}
                        name="packing"
                    />
                    }
                    label="Packing"
                />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        
                        checked={assistantUser.dispatch}
                        onChange={() => setAssistantUser({ ...assistantUser, dispatch: !assistantUser.dispatch })}
                        name="dispatch"
                    />
                    }
                    label="Dispatch"
                />
                </Box>
                <Box sx={{ width: '100%', ml: { md: 2 } }}/>
            </Box>
            <Box>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Box>
          </form>
    </>
  );
};

export default AccessManager;