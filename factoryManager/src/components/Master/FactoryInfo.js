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
import { addFactoryInfo } from '../../actions/master/factoryInfo';
// import Page from '../Page';
// import Date from '../components/Date';

const FactoryInfo = () => {
  //   const user = JSON.parse(localStorage.getItem('profile')).data;
  //   const products = useSelector((state) => state.product.products);
  // console.log('products', products);

  const [factory, setFactory] = useState({
    companyName: '',
    companyAddress: '',
    contactNumber: '',
    website: '',
    gstNumber: '',
    manager: '',
    managerNumber: '',
    managerEmailId: '',
  });

  const handleChange = ({ currentTarget: input }) => {
    setFactory({
      ...factory,
      [input.name]: input.value,
    });
    console.log(factory);
  };

  const [age, setAge] = React.useState('');

  const handleServiceChange = (event) => {
    setFactory({
      ...factory,
      serviceType: event.target.value,
    });
    console.log(factory);
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(factory);
      dispatch(addFactoryInfo(factory));
      setFactory({
        companyName: '',
        companyAddress: '',
        contactNumber: '',
        website: '',
        gstNumber: '',
        manager: '',
        managerNumber: '',
        managerEmailId: '',
      });
      alert('factory submitted successfully');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="text"
            name="companyName"
            value={factory.companyName}
            onChange={handleChange}
          />
          <TextField
            label="Company Address"
            variant="outlined"
            fullWidth
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            type="text"
            name="companyAddress"
            value={factory.companyAddress}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Contact Number"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="number"
            name="contactNumber"
            value={factory.contactNumber}
            onChange={handleChange}
          />
          <TextField
            label="Website"
            variant="outlined"
            fullWidth
            type="text"
            name="website"
            value={factory.website}
            onChange={handleChange}
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
          <TextField
            label="GST Number"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="number"
            name="gstNumber"
            value={factory.gstNumber}
            onChange={handleChange}
          />
          <TextField
            label="Manager"
            variant="outlined"
            fullWidth
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            type="text"
            name="manager"
            value={factory.manager}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Manager Number"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="number"
            name="managerNumber"
            value={factory.managerNumber}
            onChange={handleChange}
          />
          <TextField
            label="Manager Email Id"
            variant="outlined"
            fullWidth
            type="email"
            name="managerEmailId"
            value={factory.managerEmailId}
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

export default FactoryInfo;
