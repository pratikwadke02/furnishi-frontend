import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import {
  Box,
  Card,
  Grid,
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
import { addCordinator } from '../../actions/master/cordinator';

const CordinatorMaster = (props) => {
  const {sources, cordinatorTypes} = props;
  console.log('sources', sources);
  console.log('cordinatorTypes', cordinatorTypes);
    // const user = JSON.parse(localStorage.getItem('profile')).data;
    // const products = useSelector((state) => state.product.products);
    // console.log('products', products);
  
    const [cordinator, setCordinator] = useState({
    sourceCode:'',
    firmName:'',
    firmAddress:'',
    cordinatorType:'',
    cordinatorName:'',
    cordinatorNumber:'',
    emailId:'',
    });
  
    const handleChange = ({ currentTarget: input }) => {
        setCordinator({
        ...cordinator,
        [input.name]: input.value,
      });
      console.log(cordinator);
    };
  
    const [age, setAge] = React.useState('');
  
    const handleSourceCodeChange = (event) => {

        setCordinator({
        ...cordinator,
        sCode: event.target.value,
      });
      console.log(cordinator);
    };
    const handleSourceChange = (event) => {
      console.log(event.target);
      const source = sources.find((source) => source.id === event.target.value);
      setCordinator({
        ...cordinator,
        source: source.source,
        sourceCode: source.sourceCode,
        firmName: source.firmName,
        firmAddress: source.firmAddress,
      });
      console.log(cordinator);
    };
    const handleFNameChange = (event) => {
      setCordinator({
        ...cordinator,
        fName: event.target.value,
      });
      console.log(cordinator);
    };
    const handleFAddressChange = (event) => {
      setCordinator({
        ...cordinator,
        fAddress: event.target.value,
      });
      console.log(cordinator);
    };
    const handleCTypeChange = (event) => {
      setCordinator({
        ...cordinator,
        cordinatorType: event.target.value,
      });
      console.log(cordinator);
    };
  
    const dispatch = useDispatch();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        console.log(cordinator);
        dispatch(addCordinator(cordinator));
        setCordinator({
          sourceCode:'',
          source:'',
          firmName:'',
          firmAddress:'',
          cordinatorType:'',
          cordinatorName:'',
          cordinatorNumber:'',
          emailId:'',
        });
        alert("cordinator submitted successfully");
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <>
        <form onSubmit={handleSubmit}>
            {/* <Box mt={2}>
            <Typography variant="h6">Cordinator Master</Typography>
          </Box> */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: { md: 1 },  }}>
              <InputLabel id="demo-simple-select-label">Source</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cordinator.source}
                label="Source"
                onChange={handleSourceChange}
              >
                {
                  sources.map((source) => (
                    <MenuItem value={source.id}>{source.source}</MenuItem>
                  ))
                }
              </Select>
            </FormControl> 
            <TextField
              fullWidth
              sx={{ ml: { md: 1 }, mt: { xs: 1, md: 0 } }}
              label="Source Code"
              name="sourceCode"
              value={cordinator.sourceCode}
              disabled
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <TextField
              fullWidth
              sx={{ mr: { md: 1 },  }}
              label="Firm Name"
              name="firmName"
              value={cordinator.firmName}
              disabled
            />
            <TextField
              fullWidth
              sx={{ ml: { md: 1 }, mt: { xs: 1, md: 0 } }}
              label="Firm Address"
              name="firmAddress"
              value={cordinator.firmAddress}
              disabled
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <FormControl fullWidth sx={{ mr: { md: 1 } }}>
              <InputLabel id="demo-simple-select-label">Cordinator Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cordinator.cordinatorType}
                label="Cordinator Type"
                onChange={handleCTypeChange}
              >
                {
                  cordinatorTypes.map((cordinatorType) => (
                    <MenuItem value={cordinatorType.cordinatorType}>{cordinatorType.cordinatorType}</MenuItem>
                  ))
                }
              </Select>
            </FormControl> 
            <TextField
              label="Cordinator Name"
              variant="outlined"
              fullWidth
              type="text"
              name="cordinatorName"
              value={cordinator.cordinatorName}
              onChange={handleChange}
              sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <TextField
              label="Cordinator Number"
              variant="outlined"
              fullWidth
              sx={{ mr: { md: 1 } }}
              type="number"
              name="cordinatorNumber"
              value={cordinator.cordinatorNumber}
              onChange={handleChange}
            />
            <TextField
              label="Email Id"
              variant="outlined"
              fullWidth
              type="email"
              name="emailId"
              value={cordinator.emailId}
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
  
  export default CordinatorMaster;