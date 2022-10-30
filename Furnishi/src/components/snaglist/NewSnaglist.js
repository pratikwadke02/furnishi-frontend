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
import { addSnaglist } from '../../actions/snaglist/snaglist';

const NewSnaglist = (props) => {
  const { cordinators, products, statuses, actions, costs, issues, solutions } = props;

  const [enquiry, setEnquiry] = useState({
    name: '',
    number: '',
    address: '',
    pincode: '',
    locationCode: '',
    customerCordinator: '',
    customerCordinatorNumber: '',
    sourceCordinator: '',
    sourceCordinatorNumber: '',
    factoryCordinator: '',
    factoryCordinatorNumber: '',
    productId: '',
    product: '',
    productCode: '',
    saleValue: '',
    materialValue: '',
    faceArea: '',
    targetStartDate: null,
    targetEndDate: null,
    startDate: null,
    endDate: null,
    issue: '',
    reason: '',
    solution: '',
    action: '',
    cost: '',
    pic: '',
    video: '',
    totalService: '',
    serviceDone: '',
    servicePending: '',
    serviceCalendar: '',
    estimatedCost: '',
    actualCost: '',
    attachment: '',
    totalHistory: '',
    totalExpenseTillDate: '',
    estimatedQuoteAfterDiscount: '',
    status: '',
  });

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
      status: event.target.value,
    });
    console.log(enquiry);
  };

  const handleIssueChange = (event) => {
    setEnquiry({
      ...enquiry,
      issue: event.target.value,
    });
    console.log(enquiry);
  };
  const handleSolutionChange = (event) => {
    setEnquiry({
      ...enquiry,
      solution: event.target.value,
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
  const handleCostChange = (event) => {
    setEnquiry({
      ...enquiry,
      cost: event.target.value,
    });
    console.log(enquiry);
  };

  const handleCustomerCordinatorChange = (event) => {
    const cordinator = cordinators.find((cordinator) => cordinator.id === event.target.value);
    setEnquiry({
      ...enquiry,
      customerCordinator: cordinator.cordinatorName,
      customerCordinatorNumber: cordinator.cordinatorNumber,
    });
    console.log(enquiry);
  };

  const handleSourceCordinatorChange = (event) => {
    const cordinator = cordinators.find((cordinator) => cordinator.id === event.target.value);
    setEnquiry({
      ...enquiry,
      sourceCordinator: cordinator.cordinatorName,
      sourceCordinatorNumber: cordinator.cordinatorNumber,
    });
    console.log(enquiry);
  };
  const handleFCordinatorChange = (event) => {
    const cordinator = cordinators.find((cordinator) => cordinator.id === event.target.value);
    setEnquiry({
      ...enquiry,
      factoryCordinator: cordinator.cordinatorName,
      factoryCordinatorNumber: cordinator.cordinatorNumber,
    });
    console.log(enquiry);
  };
  const handleProductChange = (event) => {
    const product = products.find((product) => product.name === event.target.value);
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
      dispatch(addSnaglist(enquiry));
      setEnquiry({
        name: '',
        number: '',
        address: '',
        pincode: '',
        locationCode: '',
        customerCordinator: '',
        customerCordinatorNumber: '',
        sourceCordinator: '',
        sourceCordinatorNumber: '',
        factoryCordinator: '',
        factoryCordinatorNumber: '',
        productId: '',
        product: '',
        productCode: '',
        saleValue: '',
        materialValue: '',
        faceArea: '',
        targetStartDate: null,
        targetEndDate: null,
        startDate: null,
        endDate: null,
        issue: '',
        reason: '',
        solution: '',
        action: '',
        cost: '',
        pic: '',
        video: '',
        totalService: '',
        serviceDone: '',
        servicePending: '',
        serviceCalendar: '',
        estimatedCost: '',
        actualCost: '',
        attachment: '',
        totalHistory: '',
        totalExpenseTillDate: '',
        estimatedQuoteAfterDiscount: '',
        status: '',
      });
      alert('Snaglist submitted successfully');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="text"
            name="name"
            value={enquiry.name}
            onChange={handleChange}
          />
          <TextField
            label="Mobile Number"
            variant="outlined"
            fullWidth
            type="number"
            name="number"
            value={enquiry.number}
            onChange={handleChange}
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
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
            value={enquiry.address}
            onChange={handleChange}
          />
          <TextField
            label="Pin Code"
            variant="outlined"
            fullWidth
            type="number"
            name="pincode"
            value={enquiry.pincode}
            onChange={handleChange}
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Location Code"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="number"
            name="locationCode"
            value={enquiry.locationCode}
            onChange={handleChange}
          />
          <Box sx={{ width: '100%', ml: { md: 1 } }} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <FormControl fullWidth sx={{ mr: { md: 1 } }}>
            <InputLabel id="demo-simple-select-label">Customer Cordinator</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={enquiry.customerCordinator}
              label="Customer Cordinator"
              onChange={handleCustomerCordinatorChange}
            >
              {cordinators
                .filter((cordinator) => cordinator.cordinatorType === 'Customer')
                .map((cordinator) => (
                  <MenuItem value={cordinator.id}>{cordinator.cordinatorName}</MenuItem>
                ))}
            </Select>
          </FormControl>
          <TextField
            label="Customer Cordinator Number"
            variant="outlined"
            fullWidth
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            type="number"
            name="customerCordinatorNumber"
            value={enquiry.customerCordinatorNumber}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <FormControl fullWidth sx={{ mr: { md: 1 } }}>
            <InputLabel id="demo-simple-select-label">Source Cordinator</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={enquiry.sourceCordinator}
              label="Source Cordinator"
              onChange={handleSourceCordinatorChange}
            >
              {cordinators
                .filter((cordinator) => cordinator.cordinatorType === 'Source')
                .map((cordinator) => (
                  <MenuItem value={cordinator.id}>{cordinator.cordinatorName}</MenuItem>
                ))}
            </Select>
          </FormControl>
          <TextField
            label="Source Cordinator Number"
            variant="outlined"
            fullWidth
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            type="number"
            name="sourceCordinatorNumber"
            value={enquiry.sourceCordinatorNumber}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <FormControl fullWidth sx={{ mr: { md: 1 } }}>
            <InputLabel id="demo-simple-select-label">Factory Cordinator</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={enquiry.factoryCordinator}
              label="Factory Cordinator"
              onChange={handleFCordinatorChange}
            >
              {cordinators
                .filter((cordinator) => cordinator.cordinatorType === 'Factory')
                .map((cordinator) => (
                  <MenuItem value={cordinator.id}>{cordinator.cordinatorName}</MenuItem>
                ))}
            </Select>
          </FormControl>
          <TextField
            label="Factory Cordinator Number"
            variant="outlined"
            fullWidth
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            type="number"
            name="factoryCordinatorNumber"
            value={enquiry.factoryCordinatorNumber}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <FormControl fullWidth sx={{ mr: { md: 1 } }}>
            <InputLabel id="demo-simple-select-label">Product</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={enquiry.product}
              label="Product"
              onChange={handleProductChange}
            >
              {products.map((product) => (
                <MenuItem value={product.name}>{product.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Product Id"
            variant="outlined"
            fullWidth
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            type="number"
            name="productId"
            value={enquiry.productId}
            // onChange={handleChange}
            disabled
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Product Code"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="text"
            name="productCode"
            value={enquiry.productCode}
            // onChange={handleChange}
            disabled
          />
          <TextField
            label="Sale Value"
            variant="outlined"
            fullWidth
            type="number"
            name="saleValue"
            value={enquiry.saleValue}
            onChange={handleChange}
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Material Value"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="number"
            name="materialValue"
            value={enquiry.materialValue}
            onChange={handleChange}
          />
          <TextField
            label="Face Area"
            variant="outlined"
            fullWidth
            type="number"
            name="faceArea"
            value={enquiry.faceArea}
            onChange={handleChange}
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          />
        </Box>
        {/* <Box>
            <Typography variant="h6">Completion Target</Typography>
          </Box> */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <Box sx={{ width: '100%', mr: { md: 1 } }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                fullWidth
                disableFuture
                label="Target Start Date"
                openTo="year"
                views={['year', 'month', 'day']}
                value={enquiry.targetStartDate}
                onChange={(newValue) => {
                  setEnquiry({
                    ...enquiry,
                    targetStartDate: newValue,
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
                label="Target End Date"
                openTo="year"
                views={['year', 'month', 'day']}
                value={enquiry.targetEndDate}
                onChange={(newValue) => {
                  setEnquiry({
                    ...enquiry,
                    targetEndDate: newValue,
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
                label="Start Date"
                openTo="year"
                views={['year', 'month', 'day']}
                value={enquiry.startDate}
                onChange={(newValue) => {
                  setEnquiry({
                    ...enquiry,
                    startDate: newValue,
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
                label="End Date"
                openTo="year"
                views={['year', 'month', 'day']}
                value={enquiry.endDate}
                onChange={(newValue) => {
                  setEnquiry({
                    ...enquiry,
                    endDate: newValue,
                  });
                }}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: { md: 1 } }}>
                <InputLabel id="demo-simple-select-label">Issue</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={enquiry.issue}
                    label="Issue"
                    onChange={handleIssueChange}
                    name="issue"
                >
                    {
                        issues.map((issue) => (
                            <MenuItem value={issue.issue}>{issue.issue}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <TextField
                label="Reason"
                variant="outlined"
                fullWidth
                sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                type="text"
                name="reason"
                value={enquiry.reason}
                onChange={handleChange}
            />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: { md: 1 } }}>
                <InputLabel id="demo-simple-select-label">Solution</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={enquiry.solution}
                    label="Solution"
                    onChange={handleSolutionChange}
                    name="solution"
                >
                    {
                        solutions.map((solution) => (
                            <MenuItem value={solution.solution}>{solution.solution}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                <InputLabel id="demo-simple-select-label">Action</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={enquiry.action}
                    label="Action"
                    onChange={handleActionChange}
                    name="action"
                >
                    {
                        actions.map((action) => (
                            <MenuItem value={action.action}>{action.action}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: { md: 1 } }}>
                <InputLabel id="demo-simple-select-label">Cost</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={enquiry.cost}
                    label="Cost"
                    onChange={handleCostChange}
                    name="cost"
                >
                    {
                        costs.map((cost) => (
                            <MenuItem value={cost.cost}>{cost.cost}</MenuItem>  
                        ))
                    }
                </Select>
            </FormControl>
            <TextField
            label="Attachment"
            variant="outlined"
            fullWidth
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            type="text"
            name="attachment"
            value={enquiry.attachment}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Pic"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="text"
            name="pic"
            value={enquiry.pic}
            onChange={handleChange}
          />
          <TextField
            label="Video"
            variant="outlined"
            fullWidth
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            type="text"
            name="video"
            value={enquiry.video}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Total Service"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="text"
            name="totalService"
            value={enquiry.totalService}
            onChange={handleChange}
          />
          <TextField
            label="Service Done"
            variant="outlined"
            fullWidth
            type="text"
            name="serviceDone"
            value={enquiry.serviceDone}
            onChange={handleChange}
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Service Pending"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="text"
            name="servicePending"
            value={enquiry.servicePending}
            onChange={handleChange}
          />
          <TextField
            label="Service Calendar"
            variant="outlined"
            fullWidth
            type="text"
            name="serviceCalendar"
            value={enquiry.serviceCalendar}
            onChange={handleChange}
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Estimated Cost"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="number"
            name="estimatedCost"
            value={enquiry.estimatedCost}
            onChange={handleChange}
          />
          <TextField
            label="Actual Cost"
            variant="outlined"
            fullWidth
            type="number"
            name="actualCost"
            value={enquiry.actualCost}
            onChange={handleChange}
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
        <TextField
            label="Expense Till Date"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="number"
            name="totalExpenseTillDate"
            value={enquiry.totalExpenseTillDate}
            onChange={handleChange}
          />
          <TextField
            label="Transaction History"
            variant="outlined"
            fullWidth
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            type="number"
            name="totalHistory"
            value={enquiry.totalHistory}
            onChange={handleChange}
          />
        </Box>
       
          {/* <FormControl fullWidth sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                <InputLabel id="demo-simple-select-label">Status/Action</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={enquiry.statusAction}
                  label="Status/Action"
                  onChange={handleStatusChange}
                >
                  {
                    statusActions.map((statusAction) => (
                      <MenuItem value={statusAction.statusAction}>{statusAction.statusAction}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl> */}
        {/* <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
              <TextField
                label="Estimated Quote"
                variant="outlined"
                fullWidth
                sx={{ mr: { md: 1 } }}
                type="number"
                name="estimatedQuote"
                value={enquiry.estimatedQuote}
                onChange={handleChange}
              />
              <TextField
                label="Discount Percent"
                variant="outlined"
                fullWidth
                sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                type="number"
                name="discount"
                value={enquiry.discount}
                onChange={handleChange}
              />
            </Box> */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            label="Estimated Quote after Discount"
            variant="outlined"
            fullWidth
            sx={{ mr: { md: 1 } }}
            type="number"
            name="estimatedQuoteAfterDiscount"
            value={enquiry.estimatedQuoteAfterDiscount}
            onChange={handleChange}
          />
          <FormControl fullWidth sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={enquiry.status}
              label="
              Status"
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
        <Box>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default NewSnaglist;
