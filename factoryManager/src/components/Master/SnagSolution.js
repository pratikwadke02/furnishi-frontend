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
import { addSnagSolution } from '../../actions/master/snagSolution';

const SnagSolution = () => {
    // const user = JSON.parse(localStorage.getItem('profile')).data;
    // const products = useSelector((state) => state.product.products);
    // console.log('products', products);
  
    const [snagSolution, setSnagSolution] = useState({
      solution:'',
    });
  
    const handleChange = ({ currentTarget: input }) => {
        setSnagSolution({
        ...snagSolution,
        [input.name]: input.value,
      });
      console.log(snagSolution);
    };
  
    const [age, setAge] = React.useState('');
  
    const handleServiceChange = (event) => {
        setSnagSolution({
        ...snagSolution,
        serviceType: event.target.value,
      });
      console.log(snagSolution);
    };
  
    const dispatch = useDispatch();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        console.log(snagSolution);
        dispatch(addSnagSolution(snagSolution));
        setSnagSolution({
          solution:'',
        });
        alert("snagSolution submitted successfully");
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <>
        <form onSubmit={handleSubmit}>
            {/* <Box mt={2}>
            <Typography variant="h6">Snag Solution</Typography>
          </Box> */}
          {/* <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: { md: 1 } }}>
              <InputLabel id="demo-simple-select-label">Service Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={snagSolution.serviceType}
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
                value={snagSolution.clientProductCode}
                label="Product Code"
                onChange={(e) => {
                  setsnagSolution({
                    ...snagSolution,
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
          {/* <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <TextField
              label="SNo"
              variant="outlined"
              fullWidth
              sx={{ mr: { md: 1 } }}
              type="number"
              name="sno"
              value={snagSolution.faceArea}
              onChange={handleChange}
            />
            <TextField
              label="Solution Code"
              variant="outlined"
              fullWidth
              type="number"
              name="sCode"
              value={snagSolution.sCode}
              onChange={handleChange}
              sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            />
          </Box> */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                <TextField
              label="Solution"
              variant="outlined"
              fullWidth
              sx={{ mr: { md: 1 } }}
              type="text"
              name="solution"
              value={snagSolution.solution}
              onChange={handleChange}
            />
            </Grid>
            </Grid>
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
  
  export default SnagSolution;