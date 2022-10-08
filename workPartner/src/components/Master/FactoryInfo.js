import { filter } from 'lodash';
import React, { useState, useEffect } from 'react';
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
import Scrollbar from '../Scrollbar';
import Iconify from '../Iconify';
import SearchNotFound from '../SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../../sections/@dashboard/user';
// import Page from '../Page';
// import Date from '../components/Date';


const TABLE_HEAD = [
  { id: 'companyName', label: 'Company Name', alignRight: true },
  { id: 'companyAddress', label: 'Company Address', alignRight: true },
  { id: 'contactNumber', label: 'Contact Number', alignRight: true },
  { id: 'website', label: 'Website', alignRight: true },
  { id: 'gstNumber', label: 'GST Number', alignRight: true },
  { id: 'manager', label: 'Manager', alignRight: true },
  { id: 'managerEmailId', label: 'Manager Email Id', alignRight: true },
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

const FactoryInfo = (props) => {
  const { factoryInfos} = props;
  const [factoryInfosTable, setFactoryInfosTable] = useState(factoryInfos);

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
      const newSelecteds = factoryInfosTable.map((n) => n.id);
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

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - factoryInfosTable.length) : 0;

  const filteredUsers = applySortFilter(factoryInfosTable, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;


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
      setFactoryInfosTable([...factoryInfosTable, factory]);
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
      <Box>
        <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

        <Scrollbar>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <UserListHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                rowCount={factoryInfosTable.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
                onSelectAllClick={handleSelectAllClick}
              />
              <TableBody>
                {factoryInfosTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((custInfo) => {
                  const { id, companyName, companyAddress, contactNumber, website, gstNumber, manager, managerEmailId } =
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
                            {companyName}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell align="left">{companyAddress}</TableCell>
                      <TableCell align="left">{contactNumber}</TableCell>
                      <TableCell align="left">{website}</TableCell>
                      <TableCell align="left">{gstNumber}</TableCell>
                      <TableCell align="left">{manager}</TableCell>
                      <TableCell align="left">{managerEmailId}</TableCell>

                     
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
          count={factoryInfosTable.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </>
  );
};

export default FactoryInfo;
