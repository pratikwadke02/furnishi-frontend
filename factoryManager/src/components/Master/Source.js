import { filter } from 'lodash';
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
import Scrollbar from '../Scrollbar';
import SearchNotFound from '../SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../../sections/@dashboard/user';
import { addSource } from '../../actions/master/source';

const TABLE_HEAD = [
  { id: 'sourceCode', label: 'Source Code', alignRight: true },
  { id: 'source', label: 'Source', alignRight: true },
  { id: 'firmName', label: 'Firm Name', alignRight: true },
  { id: 'firmAddress', label: 'Firm Address', alignRight: true },
  { id: 'emailId', label: 'Email Id', alignRight: true },
  { id: 'contactNo', label: 'Contact No', alignRight: true },
  { id: 'cordinatorName', label: 'Cordinator Name', alignRight: true },
  { id: 'cordinatorContactNo', label: 'Cordinator Number', alignRight: true },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

const Source = (props) => {

  const {sources} = props;
  console.log(sources);
  const [sourcesTable, setSourcesTable] = useState(
    sources
  );
  console.log(sourcesTable);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = sourcesTable.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - sourcesTable.length) : 0;

  const filteredUsers = applySortFilter(sourcesTable, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;
  
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
        <Box>
        <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

        <Scrollbar>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <UserListHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                rowCount={sourcesTable.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
                onSelectAllClick={handleSelectAllClick}
              />
              <TableBody>
                {sourcesTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((custInfo) => {
                  console.log(custInfo);
                  const { id, source, sourceCode, firmName, firmAddress, emailId, contactNumberOne, contactNumberTwo, cordinatorName, cordinatorNumber } =
                    custInfo;
                  const isItemSelected = selected.indexOf(id) !== -1;

                  return (
                    <TableRow
                      hover
                      key={id}
                      tabIndex={-1}
                      role="checkbox"
                      selected={isItemSelected}
                      aria-checked={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, id)} />
                      </TableCell>
                      <TableCell align="center">
                        <Stack direction="row" alignItems="center" spacing={2}>

                          <Typography variant="subtitle2" noWrap>
                            {sourceCode}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell align="center">{source}</TableCell>
                      <TableCell align="left">{firmName}</TableCell>
                      <TableCell align="left">{firmAddress}</TableCell>
                      <TableCell align="left">{emailId}</TableCell>
                      <TableCell align="left">
                        <Box sx={{display:'flex', flexDirection:'column'}}>
                          <Box>
                            
                        {contactNumberOne}
                          </Box>
                          <Box>
                            {contactNumberTwo}
                          </Box>
                        </Box>
                        </TableCell>
                      <TableCell align="left">{cordinatorName}</TableCell>
                      <TableCell align="left">{cordinatorNumber}</TableCell>
                     
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>

              {isUserNotFound && (
                <TableBody>
                  <TableRow>
                    <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                      <SearchNotFound searchQuery={filterName} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              )}
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={sourcesTable.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      </>
    );
  };
  
  export default Source;