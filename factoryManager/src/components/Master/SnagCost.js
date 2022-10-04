import { filter } from 'lodash';
import React, { useState, useEffect } from 'react';
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
import { addSnagCost } from '../../actions/master/snagCost';
import Scrollbar from '../Scrollbar';
import Iconify from '../Iconify';
import SearchNotFound from '../SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../../sections/@dashboard/user';

const TABLE_HEAD = [
  { id: 'snagCostCode', label: 'Snag Cost Code', alignRight: true },
  { id: 'cost', label: 'Cost', alignRight: true },
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

const SnagCost = (props) => {
  const { snagCosts} = props;
  const [ snagCostsTable, setSnagCostsTable ] = useState(snagCosts);

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
      const newSelecteds = snagCostsTable.map((n) => n.id);
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

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - snagCostsTable.length) : 0;

  const filteredUsers = applySortFilter(snagCostsTable, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;
  
    const [snagCost, setSnagCost] = useState({
      cost:'',
    });
  
    const handleChange = ({ currentTarget: input }) => {
        setSnagCost({
        ...snagCost,
        [input.name]: input.value,
      });
      console.log(snagCost);
    };
  
    const [age, setAge] = React.useState('');
  
    const handleServiceChange = (event) => {
        setSnagCost({
        ...snagCost,
        serviceType: event.target.value,
      });
      console.log(snagCost);
    };
  
    const dispatch = useDispatch();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        console.log(snagCost);
        dispatch(addSnagCost(snagCost));
        setSnagCost({
          cost:'',
        });
        alert("snagCost submitted successfully");
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <>
        <form onSubmit={handleSubmit}>
            {/* <Box mt={2}>
            <Typography variant="h6">Snag Cost</Typography>
          </Box> */}
          {/* <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: { md: 1 } }}>
              <InputLabel id="demo-simple-select-label">Service Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={snagCost.serviceType}
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
                value={snagCost.clientProductCode}
                label="Product Code"
                onChange={(e) => {
                  setsnagCost({
                    ...snagCost,
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
              value={snagCost.sno}
              onChange={handleChange}
            />
            <TextField
              label="Cost Code"
              variant="outlined"
              fullWidth
              type="number"
              name="cCode"
              value={snagCost.cCode}
              onChange={handleChange}
              sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            />
          </Box> */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                <TextField
              label="Cost"
              variant="outlined"
              fullWidth
              sx={{ mr: { md: 1 } }}
              type="number"
              name="cost"
              value={snagCost.cost}
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
        <Box>
        <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

        <Scrollbar>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <UserListHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                rowCount={snagCostsTable.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
                onSelectAllClick={handleSelectAllClick}
              />
              <TableBody>
                {snagCostsTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((custInfo) => {
                  const { id, costCode, cost } =
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
                            {costCode}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell align="left">{cost}</TableCell>
                     
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
          count={snagCostsTable.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      </>
    );
  };
  
  export default SnagCost;