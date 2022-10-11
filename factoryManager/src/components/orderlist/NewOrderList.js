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

  const {cordinators, products, statuses, carcasses, shutters, planners, designers, salesPersons, siteSurveyors} = props;
  console.log(siteSurveyors);

  const [orderList, setOrderList] = useState({
    receivedDate: null,
    targetDate: null,
    source: '',
    client: '',
    address: '',
    product: '',
    location: '',
    value: '',
    received: '',
    status: '',
    carcass: '',
    shutter: '',
    salesPerson: '',
    designer: '',
    planner: '',
    finalSiteSurveyor: '',
    indentNumber: '',
    workingTime: '',
    accountClearance: null,
    designClearance: null,
    mrpRelease: null,
    shopDocuments: null,
    stockCheck: null,
    poApproval: null,
    poRelease: null,
    rawMaterialPurchase: null,
    accHardwareGlassPurchase: null,
    jobWork: null,
    finalSiteSurvey: null,
    panelProduction: null,
    jobWorkMaterial: null,
    metalWork: null,
    paintWork: null,
    assembly: null,
    packing: null,
    dispatch: null,
    installation: null,
    handover: null,
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
      status: event.target.value,
    });
    console.log(orderList);
  };
  const handleCustomerCordinatorChange = (event) => {
    const cordinator = cordinators.find((cordinator) => cordinator.id === event.target.value);
    setOrderList({
      ...orderList,
      customerCordinator: cordinator.cordinatorName,
      customerCordinatorNumber: cordinator.cordinatorNumber,
    })
    console.log(orderList);
  };

  const handleSourceCordinatorChange = (event) => {
    setOrderList({
      ...orderList,
      source: event.target.value,
    });
  };
  const handleFCordinatorChange = (event) => {
    const cordinator = cordinators.find((cordinator) => cordinator.id === event.target.value);
    setOrderList({
      ...orderList,
      factoryCordinator: cordinator.cordinatorName,
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

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      console.log(orderList);
      dispatch(addOrderList(orderList));
      setOrderList({
        receivedDate: null,
    targetDate: null,
    source: '',
    client: '',
    address: '',
    product: '',
    location: '',
    value: '',
    received: '',
    status: '',
    carcass: '',
    shutter: '',
    salesPerson: '',
    designer: '',
    planner: '',
    finalSiteSurveyor: '',
    indentNumber: '',
    workingTime: '',
    accountClearance: null,
    designClearance: null,
    mrpRelease: null,
    shopDocuments: null,
    stockCheck: null,
    poApproval: null,
    poRelease: null,
    rawMaterialPurchase: null,
    accHardwareGlassPurchase: null,
    jobWork: null,
    finalSiteSurvey: null,
    panelProduction: null,
    jobWorkMaterial: null,
    metalWork: null,
    paintWork: null,
    assembly: null,
    packing: null,
    dispatch: null,
    installation: null,
    handover: null,
      });
      alert('Order List submitted successfully');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt:2, mb: 2 }}>
            <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    fullWidth
                    disableFuture
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
                    disableFuture
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
            <Box sx={{ display: 'flex',flexDirection: { xs: 'column', md: 'row' }, mt:2, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: { md: 1 } }}>
                <InputLabel id="demo-simple-select-label">Source</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={orderList.source}
                  label="Source"
                  onChange={handleSourceCordinatorChange}
                >
                  {
                    cordinators.filter(cordinator => cordinator.cordinatorType === 'Source').map(cordinator => (
                      <MenuItem value={cordinator.id}>{cordinator.cordinatorName}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
              <TextField 
                fullWidth
                sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                label="Client Name"
                name="client"
                value={orderList.client}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                sx={{ mr: { md: 1 } }}
                type="text"
                name="address"
                value={orderList.address}
                onChange={handleChange}
              />
              <FormControl fullWidth sx={{ ml: {md: 1}, mt: {xs:2, md: 0}  }}>
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
                label="Value"
                variant="outlined"
                fullWidth
                sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                type="number"
                name="value"
                value={orderList.value}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
              <TextField
                label="Received"
                variant="outlined"
                fullWidth
                sx={{ mr: { md: 1 } }}
                type="number"
                name="received"
                value={orderList.received}
                onChange={handleChange}
              />
              <FormControl fullWidth sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={orderList.status}
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
                <InputLabel id="demo-simple-select-label">Planner</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={orderList.planner}
                  label="Planner"
                  onChange={
                    handlePlannerChange
                  }
                >
                  {
                    planners.map((planner) => (
                      <MenuItem value={planner.planner}>{planner.planner}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
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
              <TextField
              sx={{ width: '100%', mr: { md: 1 } }}
                fullWidth
                label="Working Hours"
                name="workingTime"
                onChange={handleChange}
                value={orderList.workingTime}
                variant="outlined"
              />
              <TextField
                label="Indent Number"
                variant="outlined"
                fullWidth
                sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                name="indentNumber"
                onChange={handleChange}
                value={orderList.indentNumber}
              />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <TextField
                label="MRP Number"
                variant="outlined"
                fullWidth
                sx={{ mr: { md: 1 } }}
                type="text"
                name="mrpNumber"
                value={orderList.mrpNumber}
                onChange={handleChange}
              />
              <Box sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ maxWidth: '100%', width: '100%' }}>
                  <DatePicker
                    fullWidth
                    disableFuture
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
                    disableFuture
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
                    disableFuture
                    label="MRP Release Date"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.mrpRelease}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        mrpRelease: newValue,
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
                    disableFuture
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
                    disableFuture
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
                    disableFuture
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
              <Box sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ maxWidth: '100%', width: '100%' }}>
                  <DatePicker
                    fullWidth
                    disableFuture
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
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    fullWidth
                    disableFuture
                    label="Acc/ Hardware/ Glass Purchase"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.accHardwareGlassPurchase}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        accHardwareGlassPurchase: newValue,
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
                    disableFuture
                    label="Raw Material Purchase"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.rawMaterialPurchase}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        rawMaterialPurchase: newValue,
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
                    disableFuture
                    label="Final Site Survey"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.finalSiteSurvey}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        finalSiteSurvey: newValue,
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
                    disableFuture
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
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    fullWidth
                    disableFuture
                    label="Job Work Material"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.jobWorkMaterial}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        jobWorkMaterial: newValue,
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
                    disableFuture
                    label="Metal Work"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.metalWork}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        metalWork: newValue,
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
                    disableFuture
                    label="Paint Work"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.paintWork}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        paintWork: newValue,
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
                    disableFuture
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
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    fullWidth
                    disableFuture
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
                    disableFuture
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
            <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    fullWidth
                    disableFuture
                    label="Installation"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.installation}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        installation: newValue,
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
                    disableFuture
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
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ width: '100%', mr: { md: 1 }}}>
                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ maxWidth: '100%', width: '100%' }}>
                  <DatePicker
                    fullWidth
                    disableFuture
                    label="Job Work"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={orderList.jobWork}
                    onChange={(newValue) => {
                      setOrderList({
                        ...orderList,
                        jobWork: newValue,
                      });
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Box>
              <Box sx={{ml:{md:1}, width:'100%'}}/>
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