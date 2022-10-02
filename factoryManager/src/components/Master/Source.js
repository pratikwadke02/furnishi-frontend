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
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { addSource } from '../../actions/master/source';

const Source = () => {
  
    const [source, setSource] = useState({
      source:'',
      firmName:'',
      firmAddress:'',
      emailId:'',
      contactNumberOne:'',
      contactNumberTwo:'',
      cordinatorName:'',
      cordinatorNumber:'',
    });
  
    const handleChange = ({ currentTarget: input }) => {
      setSource({
        ...source,
        [input.name]: input.value,
      });
      console.log(source);
    };
  
    const [age, setAge] = React.useState('');
  
    const handleServiceChange = (event) => {
      setSource({
        ...source,
        serviceType: event.target.value,
      });
      console.log(source);
    };
  
    const dispatch = useDispatch();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        console.log(source);
        dispatch(addSource(source));
        setSource({
          source:'',
      firmName:'',
      firmAddress:'',
      emailId:'',
      contactNumberOne:'',
      contactNumberTwo:'',
      cordinatorName:'',
      cordinatorNumber:'',
        });
        alert("Source submitted successfully");
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          {/* <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: { md: 1 } }}>
              <InputLabel id="demo-simple-select-label">Service Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={enquiry.serviceType}
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
                value={enquiry.clientProductCode}
                label="Product Code"
                onChange={(e) => {
                  setEnquiry({
                    ...enquiry,
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
          </Box> */}
          {/* <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' },  mb: 2 }}>
            <TextField
              label="SNo"
              variant="outlined"
              fullWidth
              sx={{ mr: { md: 1 } }}
              type="number"
              name="sno"
              value={enquiry.sno}
              onChange={handleChange}
            />
            <TextField
              label="Source Code"
              variant="outlined"
              fullWidth
              type="number"
              name="sCode"
              value={enquiry.sCode}
              onChange={handleChange}
              sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            />
          </Box> */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <TextField
              label="Source"
              variant="outlined"
              fullWidth
              sx={{ mr: { md: 1 } }}
              type="text"
              name="source"
              value={source.source}
              onChange={handleChange}
            />
            <TextField
              label="Firm Name"
              variant="outlined"
              fullWidth
              type="text"
              name="firmName"
              value={source.firmName}
              onChange={handleChange}
              sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <TextField
              label="Firm Address"
              variant="outlined"
              fullWidth
              sx={{ mr: { md: 1 } }}
              type="text"
              name="firmAddress"
              value={source.firmAddress}
              onChange={handleChange}
            />
            <TextField
              label="Email Id"
              variant="outlined"
              fullWidth
              type="email"
              name="emailId"
              value={source.emailId}
              onChange={handleChange}
              sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <TextField
              label="Contact Number-1"
              variant="outlined"
              fullWidth
              sx={{ mr: { md: 1 } }}
              type="number"
              name="contactNumberOne"
              value={source.contactNumberOne}
              onChange={handleChange}
            />
            <TextField
              label="Contact Number-2"
              variant="outlined"
              fullWidth
              type="number"
              name="contactNumberTwo"
              value={source.contactNumberTwo}
              onChange={handleChange}
              sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            />
          </Box>  
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <TextField
              label="Cordinator Name"
              variant="outlined"
              fullWidth
              sx={{ mr: { md: 1 } }}
              type="text"
              name="cordinatorName"
              value={source.cordinatorName}
              onChange={handleChange}
            />
            <TextField
              label="Cordinator Number"
              variant="outlined"
              fullWidth
              type="number"
              name="cordinatorNumber"
              value={source.cordinatorNumber}
              onChange={handleChange}
              sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
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
  
  export default Source;