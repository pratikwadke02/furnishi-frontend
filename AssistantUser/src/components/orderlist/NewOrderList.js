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

const NewOrderList = (props) => {

  const {cordinators, products, statuses, carcasses, shutters, planners, designers, salesPersons, siteSurveyors, sources, factoryEngineers, orderList} = props;
  console.log(siteSurveyors);
  // const orderList = (useSelector((state) => state.orderlist.orderlist));
  // const loadingState = (useSelector((state) => state.orderlist.loading));
  // console.log(orderList);

  const [orderListData, setOrderList] = useState();

  // const [orderList, setOrderList] = useState(orderList);

  // const [orderList, setOrderList] = useState({
  //   receivedDate: null,
  //   targetDate: null,
  //   customerName: '',
  //   customerNumber: '',
  //   siteAddress: '',
  //   sitePincode: '',
  //   siteGoogleLocation: '',
  //   source: '',
  //   sourceCordinator: '',
  //   sourceCordinatorNumber: '',
  //   customerCordinator: '',
  //   customerCordinatorNumber: '',
  //   factoryCordinator: '',
  //   factoryCordinatorNumber: '',
  //   product: '',
  //   designDocument: '',
  //   location: '',
  //   noOfServices: '',
  //   area: '',
  //   orderValue: '',
  //   paymentReceived: '',
  //   currentStatus: '',
  //   carcass: '',
  //   shutter: '',
  //   salesPerson: '',
  //   designer: '',
  //   finalSiteSurveyor: '',
  //   indentNumber: '',
  //   workStartTime: null,
  //   workEndTime: null,
  //   factoryEngineer: '',
  //   accountClearance: null,
  //   designClearance: null,
  //   indentRelease: null,
  //   shopDocuments: null,
  //   stockCheck: null,
  //   poPrepare: null,
  //   poApproval: null,
  //   poRelease: null,
  //   rawMaterialAvailable: null,
  //   otherMaterialAvailable: null,
  //   jobWorkDone: null,
  //   panelProduction: null,
  //   paintMaterialProduction: null,
  //   otherMaterialProduction: null,
  //   assembly: null,
  //   cleaning: null,
  //   packing: null,
  //   dispatch: null,
  // });

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
      dispatch(addOrderList(orderList));
      setOrderList({
        receivedDate: null,
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
    designDocument: '',
    location: '',
    noOfServices: '',
    area: '',
    orderValue: '',
    paymentReceived: '',
    currentStatus: '',
    carcass: '',
    shutter: '',
    salesPerson: '',
    designer: '',
    finalSiteSurveyor: '',
    indentNumber: '',
    workStartTime: null,
    workEndTime: null,
    factoryEngineer: '',
    accountClearance: null,
    designClearance: null,
    indentRelease: null,
    shopDocuments: null,
    stockCheck: null,
    poPrepare: null,
    poApproval: null,
    poRelease: null,
    rawMaterialAvailable: null,
    otherMaterialAvailable: null,
    jobWorkDone: null,
    panelProduction: null,
    paintMaterialProduction: null,
    otherMaterialProduction: null,
    assembly: null,
    cleaning: null,
    packing: null,
    dispatch: null,
      });
      alert('Order List submitted successfully');
    } catch (error) {
      console.log(error);
    }
  };

  // if(loadingState){
  //   return <div>Loading...</div>
  // }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt:2, mb: 2 }}>
            <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    fullWidth
                    label="Received Date"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.receivedDate}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        receivedDate: newValue,
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
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt:2, mb: 2 }}>
              <TextField
                fullWidth
                sx={{ width: '100%', mr: { md: 1 } }}
                label="Customer Name"
                name="customerName"
                onChange={handleChange}
                required
                value={"Hello"}
                variant="outlined"
              />
              <TextField
                fullWidth
                sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                label="Customer Number"
                name="customerNumber"
                
                onChange={handleChange}
                required
                value={orderList.customerNumber}
                variant="outlined"
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt:2, mb: 2 }}>
              <TextField
                fullWidth
                sx={{ width: '100%', mr: { md: 1 } }}
                label="Site Address"
                name="siteAddress"
                onChange={handleChange}
                required
                value={orderList.siteAddress}
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
              <FormControl sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
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
              <Box sx={{width:'100%', ml:{md:1}}}/>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
              <TextField
                label="Location"
                variant="outlined"
                fullWidth
                sx={{ mr: { md: 1 } }}
                type="text"
                name="location"
                value={orderList.location}
                onChange={handleChange}
              />
              <TextField
                label="No of Services"
                variant="outlined"
                fullWidth
                sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                type="number"
                name="noOfServices"
                value={orderList.noOfServices}
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
              <TextField
                label="Order Value"
                variant="outlined"
                fullWidth
                sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                type="number"
                name="orderValue"
                value={orderList.orderValue}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
              <TextField
                label="Payment Received"
                variant="outlined"
                fullWidth
                sx={{ mr: { md: 1 } }}
                type="number"
                name="paymentReceived"
                value={orderList.paymentReceived}
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
              <FormControl fullWidth sx={{ mr: { md: 1 } }}>
                <InputLabel id="demo-simple-select-label">Designer</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={orderList.designer}
                  label="Designer"
                  onChange={handleDesignerChange}
                >
                  {
                    designers.map((designer) => (
                      <MenuItem value={designer.designer}>{designer.designer}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                <InputLabel id="demo-simple-select-label">Final Site Surveyor</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={orderList.finalSiteSurveyor}
                  label="Final Site Surveyor"
                  onChange={
                    handleSiteSurveyorChange
                  }
                >
                  {
                    siteSurveyors.map((siteSurveyor) => (
                      <MenuItem value={siteSurveyor.finalSiteSurveyor}>{siteSurveyor.finalSiteSurveyor}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: { md: 1 } }}>
                <InputLabel id="demo-simple-select-label">Sales Person</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={orderList.salesPerson}
                  label="Sales Person"
                  onChange={
                    handleSalesPersonChange
                  }
                >
                  {
                    salesPersons.map((salesPerson) => (
                      <MenuItem value={salesPerson.salesPerson}>{salesPerson.salesPerson}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
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
              <TextField
                label="Indent Number"
                variant="outlined"
                fullWidth
                sx={{ mr: { md: 1 } }}
                name="indentNumber"
                onChange={handleChange}
                value={orderList.indentNumber}
              />
                <Box sx={{width:'100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ maxWidth: '100%', width: '100%' }}>
                  <DatePicker
                    fullWidth
                    
                    label="Indent Release"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.indentRelease}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        indentRelease: newValue,
                      });
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
              <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    fullWidth
                    
                    label="Design Clearance Date"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.designClearance}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        designClearance: newValue,
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
                    
                    label="Account Clearance"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.accountClearance}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        accountClearance: newValue,
                      });
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    fullWidth
                    
                    label="Shop Documents"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.shopDocuments}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        shopDocuments: newValue,
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
                    
                    label="Stock Check"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.stockCheck}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        stockCheck: newValue,
                      });
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    fullWidth
                    label="PO Prepare"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.poPrepare}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        poPrepare: newValue,
                      });
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Box>
              <Box sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    fullWidth
                    
                    label="PO Approval"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.poApproval}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        poApproval: newValue,
                      });
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    fullWidth
                    
                    label="PO Release"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.poRelease}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        poRelease: newValue,
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
                    label="Job Work Done"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.jobWorkDone}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        jobWorkDone: newValue,
                      });
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    fullWidth
                    
                    label="Raw Material Available"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.rawMaterialAvailable}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        rawMaterialAvailable: newValue,
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
                    
                    label="Other Material Available"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.otherMaterialAvailable}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        otherMaterialAvailable: newValue,
                      });
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    fullWidth
                    
                    label="Paint Material Production"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.paintMaterialProduction}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        paintMaterialProduction: newValue,
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
                    
                    label="Other Material Production"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.otherMaterialProduction}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                         otherMaterialProduction: newValue,
                      });
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    fullWidth
                    label="Panel Production"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.panelProduction}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        panelProduction: newValue,
                      });
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Box>
              <Box sx={{ width: '100%', ml: { md: 1 } }}/>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    fullWidth
                    
                    label="Assembly"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.assembly}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        assembly: newValue,
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
                    
                    label="Cleaning"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.cleaning}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        cleaning: newValue,
                      });
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    fullWidth
                    
                    label="Packing"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.packing}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        packing: newValue,
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