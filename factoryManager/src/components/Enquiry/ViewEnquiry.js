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
// import EnquiryFMTable from './EnquiryFMTable'
import { addEnquiry } from '../../actions/enquiry/enquiry';

const NewEnquiry = (props) => {

  const {cordinators, products, statusActions, statuses, carcasses, shutters, enquiryData} = props;

  const [enquiry, setEnquiry] = useState(enquiryData);

  const handleChange = ({ currentTarget: input }) => {
    setEnquiry({
      ...enquiry,
      [input.name]: input.value,
    });
    console.log(enquiry);
  };

  const [age, setAge] = React.useState('');

  const handleStatusChange = (event) => {
    setEnquiry({
      ...enquiry,
      currentStatus: event.target.value,
    });
    console.log(enquiry);
  };
  const handleActionChange = (event) => {
    setEnquiry({
      ...enquiry,
      action: event.target.value,
    });
    console.log(enquiry);
  };
  const handleCarcassChange = (event) => {
    setEnquiry({
      ...enquiry,
      carcass: event.target.value,
    });
  };
  const handleShutterChange = (event) => {
    setEnquiry({
      ...enquiry,
      shutter: event.target.value,
    });
  };
  const handleCustomerCordinatorChange = (event) => {
    const cordinator = cordinators.find((cordinator) => cordinator.id === event.target.value);
    setEnquiry({
      ...enquiry,
      customerCordinator: cordinator.cordinatorName,
      customerCordinatorNumber: cordinator.cordinatorNumber,
    })
    console.log(enquiry);
  };

  const handleSourceCordinatorChange = (event) => {
    const cordinator = cordinators.find((cordinator) => cordinator.id === event.target.value);
    setEnquiry({
      ...enquiry,
      sourceCordinator: cordinator.cordinatorName,
      sourceCordinatorNumber: cordinator.cordinatorNumber,
    })
    console.log(enquiry);
  };
  const handleFCordinatorChange = (event) => {
    const cordinator = cordinators.find((cordinator) => cordinator.id === event.target.value);
    setEnquiry({
      ...enquiry,
      factoryCordinator: cordinator.cordinatorName,
      factoryCordinatorNumber: cordinator.cordinatorNumber,
    })
    console.log(enquiry);
  };
  const handleProductChange = (event) => {
    const product = products.find((product) => product.name === event.target.value)
    setEnquiry({
      ...enquiry,
      product: product.name,
      productCode: product.productCode,
      productId: product.id,
    });
  };
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(enquiry);
    //   dispatch(addEnquiry(enquiry));
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
      alert('Enquiry submitted successfully');
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ width: '100%', mr: { md: 1 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ maxWidth: '100%', width: '100%' }}>
                  <DatePicker
                    fullWidth
                    
                    label="Target Date"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={enquiry.targetDate}
                    onChange={(newValue) => {
                      setEnquiry({
                        ...enquiry,
                        targetDate: newValue,
                      });
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Box>
              <TextField
                fullWidth
                sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                label="Site Pincode"
                name="sitePincode"
                onChange={handleChange}
                required
                value={enquiry.sitePincode}
                variant="outlined"
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: {md: 1} }}>
                <InputLabel id="demo-simple-select-label">Product</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={enquiry.product}
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
                label="Area (Sqft)"
                variant="outlined"
                fullWidth
                sx={{ ml: { md: 1 }, mt: {xs: 2, md:0} }}
                type="number"
                name="area"
                value={enquiry.area}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: { md: 1 } }}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={enquiry.currentStatus}
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
              <FormControl fullWidth sx={{ ml: { md: 1 }, mt: {xs:2, md:0} }}>
                <InputLabel id="demo-simple-select-label">Carcass</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={enquiry.carcass}
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
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: { md: 1 }}}>
                <InputLabel id="demo-simple-select-label">Shutter</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={enquiry.shutter}
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
              <Box sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ maxWidth: '100%', width: '100%' }}>
                  <DatePicker
                    fullWidth
                    label="Dispatch"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={enquiry.dispatch}
                    onChange={(newValue) => {
                      setEnquiry({
                        ...enquiry,
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
                  value={enquiry.workStartTime}
                  onChange={
                    (newValue) => {
                      setEnquiry({
                        ...enquiry,
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
                  value={enquiry.workEndTime}
                  onChange={
                    (newValue) => {
                      setEnquiry({
                        ...enquiry,
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
                label="Estimate"
                variant="outlined"
                fullWidth
                sx={{ mr: { md: 1 }}}
                type="text"
                name="estimate"
                value={enquiry.estimate}
                onChange={handleChange}
              />
              
                          <FormControl fullWidth sx={{ ml: { md: 1 }, mt: {xs:2, md:0} }}>
                <InputLabel id="demo-simple-select-label">Action</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={enquiry.action}
                  label="Action"
                  onChange={handleActionChange}
                >
                  {
                    statusActions.map((status) => (
                      <MenuItem value={status.statusAction}>{status.statusAction}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
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

export default NewEnquiry;