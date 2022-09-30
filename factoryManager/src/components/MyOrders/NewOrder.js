import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { addOrder } from '../../actions/order/order';
import Page from '../Page';
// import Date from '../components/Date';

const NewOrder = () => {
  const user = JSON.parse(localStorage.getItem('profile')).data;
  const products = useSelector((state) => state.product.products);
  // console.log('products', products);

  const [order, setOrder] = useState({
    clientName: `${user.firstName} ${user.lastName}`,
    clientEmail: user.email,
    clientCode: user.id,
    clientProductCode: '',
    serviceType: '',
    faceArea: '',
    floatingShelf: '',
    spotLight: '',
    stripLight: '',
    expectedStartDate: null,
    expectedEndDate: null,
    startTime: null,
    endTime: null,
    breakStartTime: null,
    breakEndTime: null,
    siteCondition: '',
    productType: '',
    workPhase: '',
    workPhaseDetails: '',
    locality: '',
    pincode: '',
    status: 'pending',
    quote: '',
  });

  const handleChange = ({ currentTarget: input }) => {
    setOrder({
      ...order,
      [input.name]: input.value,
    });
    console.log(order);
  };

  const [age, setAge] = React.useState('');

  const handleServiceChange = (event) => {
    setOrder({
      ...order,
      serviceType: event.target.value,
    });
    console.log(order);
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(order);
      dispatch(addOrder(order));
      setOrder({
        clientName: `${user.firstName} ${user.lastName}`,
        clientEmail: user.email,
        clientCode: user.id,
        clientProductCode: '',
        serviceType: '',
        faceArea: '',
        floatingShelf: '',
        spotLight: '',
        stripLight: '',
        expectedStartDate: null,
        expectedEndDate: null,
        startTime: null,
        endTime: null,
        breakStartTime: null,
        breakEndTime: null,
        siteCondition: '',
        productType: '',
        workPhase: '',
        workPhaseDetails: '',
        locality: '',
        pincode: '',
        status: 'pending',
        quote: '',
      });
      alert("Order submitted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
          <FormControl fullWidth sx={{ mr: { md: 1 } }}>
            <InputLabel id="demo-simple-select-label">Service Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={order.serviceType}
              label="Service Type"
              onChange={handleServiceChange}
            >
              <MenuItem value={'Site Survey'}>Site Survey</MenuItem>
              <MenuItem value={'Kitchen Installation'}>Kitchen Installation</MenuItem>
              <MenuItem value={'Wardrobe Installation'}>Wardrobe Installation</MenuItem>
              <MenuItem value={'Product Service'}>Product Service</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
            <InputLabel id="demo-simple-select-label">Product Code</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={order.clientProductCode}
              label="Product Code"
              onChange={(e) => {
                setOrder({
                  ...order,
                  clientProductCode: e.target.value,
                });
              }}
            >
              {products.map((product, index) => (
                <MenuItem key={index} value={product.productCode}>
                  {product.productCode}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Face Area (SqFt)"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="number"
            name="faceArea"
            value={order.faceArea}
            onChange={handleChange}
          />
          <TextField
            label="Floating Shelf"
            variant="outlined"
            fullWidth
            type="number"
            name="floatingShelf"
            value={order.floatingShelf}
            onChange={handleChange}
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Spot Light (Nos)"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="number"
            name="spotLight"
            value={order.spotLight}
            onChange={handleChange}
          />
          <TextField
            label="Strip Light (Nos)"
            variant="outlined"
            fullWidth
            type="number"
            name="stripLight"
            value={order.stripLight}
            onChange={handleChange}
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          />
        </Box>
        <Box>
          <Typography variant="h6">Completion Target</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <Box sx={{ width: '100%', mr: { md: 1 } }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                fullWidth
                disableFuture
                label="Expected Start Date"
                openTo="year"
                views={['year', 'month', 'day']}
                value={order.expectedStartDate}
                onChange={(newValue) => {
                  setOrder({
                    ...order,
                    expectedStartDate: newValue,
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
                label="Expected End Date"
                openTo="year"
                views={['year', 'month', 'day']}
                value={order.expectedEndDate}
                onChange={(newValue) => {
                  setOrder({
                    ...order,
                    expectedEndDate: newValue,
                  });
                }}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Box>
        </Box>
        <Typography variant="h6">Working Hours</Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <Box sx={{ width: '100%', mr: { md: 1 } }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Start Time"
                value={order.startTime}
                onChange={(newValue) => {
                  setOrder({
                    ...order,
                    startTime: newValue,
                  });
                }}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Box>
          <Box sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="End Time"
                value={order.endTime}
                onChange={(newValue) => {
                  setOrder({
                    ...order,
                    endTime: newValue,
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
              <TimePicker
                label="Break Start Time"
                value={order.breakStartTime}
                onChange={(newValue) => {
                  setOrder({
                    ...order,
                    breakStartTime: newValue,
                  });
                }}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Box>
          <Box sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Break End Time"
                value={order.breakEndTime}
                onChange={(newValue) => {
                  setOrder({
                    ...order,
                    breakEndTime: newValue,
                  });
                }}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <FormControl fullWidth sx={{ width: '100%', mr: { md: 1 } }}>
            <InputLabel id="demo-simple-select-label">Site Condition</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={order.siteCondition}
              label="Site Condition"
              onChange={(e) => {
                setOrder({
                  ...order,
                  siteCondition: e.target.value,
                });
              }}
            >
              <MenuItem value={'Renovation Site'}>Renovation Site</MenuItem>
              <MenuItem value={'New Site'}>New Site</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
            <InputLabel id="demo-simple-select-label">Type Of Product</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={order.productType}
              label="Type of Product"
              onChange={(e) => {
                setOrder({
                  ...order,
                  productType: e.target.value,
                });
              }}
            >
              <MenuItem value={'Assembled'}>Assembled</MenuItem>
              <MenuItem value={'Flat Pack'}>Flat Pack</MenuItem>
              <MenuItem value={'Mixed but Machined'}>Mixed but Machined</MenuItem>
              <MenuItem value={'Mixed and Incomplete /No Machined'}>Mixed and Incomplete /No Machined </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <Button variant="outlined" component="label" sx={{ width: '100%', mr: { md: 1 }, height: '50px' }}>
            Upload Images
            <input hidden accept="image/*" type="file" />
          </Button>
          <Button
            variant="outlined"
            component="label"
            sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 }, height: '50px' }}
          >
            Upload Videos
            <input hidden accept="image/*" type="file" />
          </Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <FormControl fullWidth sx={{ mr: { md: 1 } }}>
            <InputLabel id="demo-simple-select-label">Work Phase</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={order.workPhase}
              label="Work Phase"
              onChange={(e) => {
                setOrder({
                  ...order,
                  workPhase: e.target.value,
                });
              }}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
            <InputLabel id="demo-simple-select-label">Work Phase Details</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={order.workPhaseDetails}
              label="Work Phase Details"
              onChange={(e) => {
                setOrder({
                  ...order,
                  workPhaseDetails: e.target.value,
                });
              }}
            >
              <MenuItem value={'Carcass Fixing'}>Carcass Fixing</MenuItem>
              <MenuItem value={'Shutter Fixing'}>Shutter Fixing</MenuItem>
              <MenuItem value={'Light Fixing'}>Light Fixing</MenuItem>
              <MenuItem value={'Appliance Fixing'}>Appliance Fixing</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Locality"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="text"
            name="locality"
            value={order.locality}
            onChange={handleChange}
          />
          <TextField
            label="Pincode of Locality"
            variant="outlined"
            fullWidth
            type="number"
            name="pincode"
            value={order.pincode}
            onChange={handleChange}
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Quote"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="text"
            name="quote"
            value={order.quote}
            onChange={handleChange}
          />
          <Box sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
            <Button variant="outlined" component="label" sx={{ width: '100%', height: '50px' }}>
              Upload Drawings
              <input hidden accept="image/*" type="file" />
            </Button>
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

export default NewOrder;
