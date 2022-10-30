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
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import orderListFMTable from './orderListFMTable'
import { addOrderList } from '../../actions/orderlist/orderlist';
import { addOrder } from '../../actions/order/order';
import { addFurnishiOrder } from '../../actions/furnishiorder/furnishiorder';

const NewOrderList = (props) => {

  const {cordinators, products, statuses, carcasses, shutters, planners, designers, salesPersons, siteSurveyors, sources, factoryEngineers} = props;
  console.log(siteSurveyors);

  const [orderList, setOrderList] = useState({
    targetDate: null,
    customerName: '',
    customerNumber: '',
    siteAddress: '',
    sitePincode: '',
    siteGoogleLocation: '',
    source: '',
    sourceCordinator: '',
    sourceCordinatorNumber: '',
    customerCordinator: '',
    customerCordinatorNumber: '',
    factoryCordinator: '',
    factoryCordinatorNumber: '',
    product: '',
    location: '',
    area: '',
    currentStatus: '',
    carcass: '',
    shutter: '',
    workStartTime: null,
    workEndTime: null,
    factoryEngineer: '',
    dispatch: null,
    installationAssigned: null,
    installationStart: null,
    installationStatus: '',
    installationEnd: null,
    handover: null,
    conversation: '',
    snags: '',
    pictures: '',
    videos: '',
    surveyCost: '',
    installationCost: '',
    complaintCost: '',
    serviceCost: '',
    estimate: '',
  });

  const handleChange = ({ currentTarget: input }) => {
    setOrderList({
      ...orderList,
      [input.name]: input.value,
    });
    console.log(orderList);
  };

  const [age, setAge] = React.useState('');

  const handleStatusChange = (event) => {
    setOrderList({
      ...orderList,
      currentStatus: event.target.value,
    });
    console.log(orderList);
  };
  const handleInstallationStatusChange = (event) => {
    setOrderList({
      ...orderList,
      installationStatus: event.target.value,
    });
    console.log(orderList);
  };

  const handleSourceChange = (event) => {
    setOrderList({
      ...orderList,
      source: event.target.value,
    });
    console.log(orderList);
  };

  const handleCustomerCordinatorChange = (event) => {
    const cordinator = cordinators.find((cordinator) => cordinator.cordinatorName === event.target.value);
    setOrderList({
      ...orderList,
      customerCordinator: event.target.value,
      customerCordinatorNumber: cordinator.cordinatorNumber,
    })
    console.log(orderList);
  };

  const handleSourceCordinatorChange = (event) => {
    const cordinator = cordinators.find((cordinator) => cordinator.cordinatorName === event.target.value);
    setOrderList({
      ...orderList,
      sourceCordinator: cordinator.event.target.value,
      sourceCordinatorNumber: cordinator.cordinatorNumber,
    })
    console.log(orderList);
  };

  const handleFactoryCordinatorChange = (event) => {
    const cordinator = cordinators.find((cordinator) => cordinator.cordinatorName === event.target.value);
    setOrderList({
      ...orderList,
      factoryCordinator: event.target.value,
      factoryCordinatorNumber: cordinator.cordinatorNumber,
    })
    console.log(orderList);
  };
  const handleProductChange = (event) => {
    const product = products.find((product) => product.name === event.target.value)
    setOrderList({
      ...orderList,
      product: product.name,
      productCode: product.productCode,
      productId: product.id,
    });
  };
  const handleCarcassChange = (event) => {
    setOrderList({
      ...orderList,
      carcass: event.target.value,
    });
  };
  const handleShutterChange = (event) => {
    setOrderList({
      ...orderList,
      shutter: event.target.value,
    });
  };
  const handleSalesPersonChange = (event) => {
    setOrderList({
      ...orderList,
      salesPerson: event.target.value,
    });
  };
  const handleDesignerChange = (event) => {
    setOrderList({
      ...orderList,
      designer: event.target.value,
    }); 
  };
  const handlePlannerChange = (event) => {
    setOrderList({
      ...orderList,
      planner: event.target.value,
    });
  };
  const handleSiteSurveyorChange = (event) => {
    setOrderList({
      ...orderList,
      finalSiteSurveyor: event.target.value,
    });
  };
  const handleFactoryEngineerChange = (event) => {

    setOrderList({
      ...orderList,
      factoryEngineer: event.target.value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      console.log(orderList);
      dispatch(addFurnishiOrder(orderList));
      setOrderList({
        targetDate: null,
    customerName: '',
    customerNumber: '',
    siteAddress: '',
    sitePincode: '',
    siteGoogleLocation: '',
    source: '',
    sourceCordinator: '',
    sourceCordinatorNumber: '',
    customerCordinator: '',
    customerCordinatorNumber: '',
    factoryCordinator: '',
    factoryCordinatorNumber: '',
    product: '',
    location: '',
    area: '',
    currentStatus: '',
    carcass: '',
    shutter: '',
    workStartTime: null,
    workEndTime: null,
    factoryEngineer: '',
    dispatch: null,
    installationAssigned: null,
    installationStart: null,
    installationStatus: '',
    installationEnd: null,
    handover: null,
    conversation: '',
    snags: '',
    pictures: '',
    videos: '',
    surveyCost: '',
    installationCost: '',
    complaintCost: '',
    serviceCost: '',
    estimate: '',
      });
      alert('Furnishi Order submitted successfully');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt:2, mb: 2 }}>
              <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ maxWidth: '100%', width: '100%' }}>
                  <DatePicker
                    fullWidth
                    
                    label="Target Date"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.targetDate}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        targetDate: newValue,
                      });
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Box>
              <TextField
                fullWidth
                sx={{ width: '100%', ml: { md: 1 }, mt: {xs:2, md:0} }}
                label="Customer Name"
                name="customerName"
                onChange={handleChange}
                required
                value={orderList.customerName}
                variant="outlined"
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt:2, mb: 2 }}>
              <TextField
                fullWidth
                sx={{ width: '100%', mr: { md: 1 }, }}
                label="Customer Number"
                name="customerNumber"
                onChange={handleChange}
                required
                value={orderList.customerNumber}
                variant="outlined"
              />
              <TextField
                fullWidth
                sx={{ width: '100%', ml: { md: 1 }, mt: {xs:2, md:0} }}
                label="Site Address"
                name="siteAddress"
                onChange={handleChange}
                required
                value={orderList.siteAddress}
                variant="outlined"
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt:2, mb: 2 }}>
            <TextField
                fullWidth
                sx={{ width: '100%', mr: { md: 1 } }}
                label="Site Google Location"
                name="siteGoogleLocation"
                onChange={handleChange}
                required
                value={orderList.siteGoogleLocation}
                variant="outlined"
              />
              <TextField
                fullWidth
                sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                label="Site Pincode"
                name="sitePincode"
                onChange={handleChange}
                required
                value={orderList.sitePincode}
                variant="outlined"
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt:2, mb: 2 }}>
              
              <FormControl sx={{ width: '100%', mr: { md: 1 } }}>
                <InputLabel id="source">Source</InputLabel>
                <Select
                  labelId="source"
                  id="source"
                  value={orderList.source}
                  label="Source"
                  onChange={handleSourceChange}
                >
                  {
                    sources.map((source) => (
                      <MenuItem value={source.source}>{source.source}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
              <Box sx={{ml:{md:1}, width:'100%'}}/>
            </Box>
            <Box sx={{ display: 'flex',flexDirection: { xs: 'column', md: 'row' }, mt:2, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: { md: 1 } }}>
                <InputLabel id="demo-simple-select-label">Source Cordinator</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={orderList.sourceCordinator}
                  label="Source Cordinator"
                  onChange={handleSourceCordinatorChange}
                >
                  {
                    cordinators.filter(cordinator => cordinator.cordinatorType === 'Source').map(cordinator => (
                      <MenuItem value={cordinator.cordinatorName}>{cordinator.cordinatorName}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
              <TextField 
                fullWidth
                sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                label="Source Cordinator Number"
                name="sourceCordinatorNumber"
                value={orderList.sourceCordinatorNumber}
                onChange={handleChange}
                disabled
              />
            </Box>
            <Box sx={{ display: 'flex',flexDirection: { xs: 'column', md: 'row' }, mt:2, mb: 2 }}>
              <TextField
                fullWidth
                sx={{ width: '100%', mr: { md: 1 } }}
                label="Customer Cordinator"
                name="customerCordinator"
                onChange={handleChange}
                required
                value={orderList.customerCordinator}
                variant="outlined"
              />
              <TextField
                fullWidth
                sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                label="Customer Cordinator Number"
                name="customerCordinatorNumber"
                value={orderList.customerCordinatorNumber}
                onChange={handleChange}
                required
              />
            </Box>
            <Box sx={{ display: 'flex',flexDirection: { xs: 'column', md: 'row' }, mt:2, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: { md: 1 } }}>
                <InputLabel id="demo-simple-select-label">Factory Cordinator</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={orderList.factoryCordinator}
                  label="Factory Cordinator"
                  onChange={handleFactoryCordinatorChange}
                >
                  {
                    cordinators.filter(cordinator => cordinator.cordinatorType === 'Factory').map(cordinator => (
                      <MenuItem value={cordinator.cordinatorName}>{cordinator.cordinatorName}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
              <TextField
                fullWidth
                sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                label="Factory Cordinator Number"
                name="factoryCordinatorNumber"
                value={orderList.factoryCordinatorNumber}
                onChange={handleChange}
                disabled
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
              <FormControl fullWidth sx={{ mr: {md: 1} }}>
                <InputLabel id="demo-simple-select-label">Product</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={orderList.product}
                  label="Product"
                  onChange={handleProductChange}
                >
                  {
                    products.map(product => (
                      <MenuItem value={product.name}>{product.name}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
              <TextField
                label="Location"
                variant="outlined"
                fullWidth
                sx={{ ml: { md: 1 }, mt: {xs:2, md: 0} }}
                type="text"
                name="location"
                value={orderList.location}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
              <TextField
                label="Area (Sqft)"
                variant="outlined"
                fullWidth
                sx={{ mr: { md: 1 } }}
                type="number"
                name="area"
                value={orderList.area}
                onChange={handleChange}
              />
             <FormControl fullWidth sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={orderList.currentStatus}
                  label="Status"
                  onChange={handleStatusChange}
                >
                  {
                    statuses.map((status) => (
                      <MenuItem value={status.status}>{status.status}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: { md: 1 } }}>
                <InputLabel id="demo-simple-select-label">Carcass</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={orderList.carcass}
                  label="Carcass"
                  onChange={
                    handleCarcassChange
                  }
                >
                  {
                    carcasses.map((carcass) => (
                      <MenuItem value={carcass.carcass}>{carcass.carcass}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                <InputLabel id="demo-simple-select-label">Shutter</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={orderList.shutter}
                  label="Shutter"
                  onChange={handleShutterChange}
                >
                  {
                    shutters.map((shutter) => (
                      <MenuItem value={shutter.shutter}>{shutter.shutter}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
              <FormControl fullWidth sx={{ mr: { md: 1 }}}>
                <InputLabel id="demo-simple-select-label">Factory Engineer</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={orderList.factoryEngineer}
                  label="Factory Engineer"
                  onChange={
                    handleFactoryEngineerChange
                  }
                >
                  {
                    factoryEngineers.map((factoryEngineer) => (
                      <MenuItem value={factoryEngineer.factoryEngineer}>{factoryEngineer.factoryEngineer}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
              <Box sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ maxWidth: '100%', width: '100%' }}>
                  <DatePicker
                    fullWidth
                    label="Dispatch"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.dispatch}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        dispatch: newValue,
                      });
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en"}>
              <Box sx={{width:'100%', mr: { md: 1 } }}>
                <TimePicker
                  label="Work Start Time"
                  value={orderList.workStartTime}
                  onChange={
                    (newValue) => {
                      setOrderList({
                        ...orderList,
                        workStartTime: newValue
                      })
                    }
                  }
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </Box>
              <Box sx={{width:'100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                <TimePicker
                  label="Work End Time"
                  value={orderList.workEndTime}
                  onChange={
                    (newValue) => {
                      setOrderList({
                        ...orderList,
                        workEndTime: newValue
                      })
                    }
                  }
                  renderInput={(params) => <TextField {...params} fullWidth/>}
                />
              </Box>
              </LocalizationProvider>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ width: '100%', mr: { md: 1 }, }}>
                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ maxWidth: '100%', width: '100%' }}>
                  <DatePicker
                    fullWidth
                    label="Installation Assigned"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.installationAssigned}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        installationAssigned: newValue,
                      });
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Box>
              <Box sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ maxWidth: '100%', width: '100%' }}>
                  <DatePicker
                    fullWidth
                    label="Installation Start"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.installationStart}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        installationStart: newValue,
                      });
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: { md: 1 }}}>
                <InputLabel id="demo-simple-select-label">Installation Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={orderList.installationStatus}
                  label="Installation Status"
                  onChange={handleInstallationStatusChange}
                >
                  {
                    statuses.map((status) => (
                      <MenuItem value={status.status}>{status.status}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
              <Box sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ maxWidth: '100%', width: '100%' }}>
                  <DatePicker
                    fullWidth
                    label="Installation End"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.installationEnd}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        installationEnd: newValue,
                      });
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ width: '100%', mr: { md: 1 }, }}>
                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ maxWidth: '100%', width: '100%' }}>
                  <DatePicker
                    fullWidth
                    label="Handover"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.handover}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        handover: newValue,
                      });
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Box>
              <TextField
                fullWidth
                sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                label="Conversation"
                name="conversation"
                value={orderList.conversation}
                onChange={handleChange}
                
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <TextField
                fullWidth
                sx={{ mr: { md: 1 }, }}
                label="Snags"
                name="snags"
                value={orderList.snags}
                onChange={handleChange}
                
              />
              <TextField
                fullWidth
                sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                label="Survey Cost"
                type="number"
                name="surveyCost"
                value={orderList.surveyCost}
                onChange={handleChange}
                
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <TextField
                fullWidth
                sx={{ mr: { md: 1 }, }}
                label="Installation Cost"
                name="installationCost"
                value={orderList.installationCost}
                type="number"
                onChange={handleChange}
                
              />
              <TextField
                fullWidth
                sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                label="Complaint Cost"
                type="number"
                name="complaintCost"
                value={orderList.complaintCost}
                onChange={handleChange}
                
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <TextField
                fullWidth
                sx={{ mr: { md: 1 }, }}
                label="Service Cost"
                name="serviceCost"
                value={orderList.serviceCost}
                type="number"
                onChange={handleChange}
                
              />
              <TextField
                fullWidth
                sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                label="Estimate"
                type="number"
                name="estimate"
                value={orderList.estimate}
                onChange={handleChange}
              />
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

export default NewOrderList;