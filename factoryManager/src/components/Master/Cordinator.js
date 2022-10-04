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
import { addCordinator } from '../../actions/master/cordinator';
import Scrollbar from '../Scrollbar';
import Iconify from '../Iconify';
import SearchNotFound from '../SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../../sections/@dashboard/user';

const TABLE_HEAD = [
  { id: 'cordinatorCode', label: 'Cordinator Code', alignRight: true },
  { id: 'sourceCode', label: 'Source Code', alignRight: true },
  { id: 'source', label: 'Source', alignRight: true },
  { id: 'firmName', label: 'Firm Name', alignRight: true },
  { id: 'firmAddress', label: 'Firm Address', alignRight: true },
  { id: 'cordinatorType', label: 'Cordinator Type', alignRight: true },
  { id: 'cordinatorName', label: 'Name', alignRight: true },
  { id: 'cordinatorNumber', label: 'Number', alignRight: true },
  { id: 'cordinatorEmailId', label: 'Email Id', alignRight: true },
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

const CordinatorMaster = (props) => {
  const {sources, cordinatorTypes, cordinators} = props;
  const [ cordinatorsTable, setCordinatorsTable ] = useState(cordinators);
  console.log('sources', sources);
  console.log('cordinatorTypes', cordinatorTypes);

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
      const newSelecteds = cordinatorsTable.map((n) => n.id);
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

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - cordinatorsTable.length) : 0;

  const filteredUsers = applySortFilter(cordinatorsTable, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;
  
    const [cordinator, setCordinator] = useState({
    sourceCode:'',
    firmName:'',
    firmAddress:'',
    cordinatorType:'',
    cordinatorName:'',
    cordinatorNumber:'',
    cordinatorEmailID:'',
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
        setCordinatorsTable([...cordinatorsTable, cordinator]);
        setCordinator({
          sourceCode:'',
          source:'',
          firmName:'',
          firmAddress:'',
          cordinatorType:'',
          cordinatorName:'',
          cordinatorNumber:'',
          cordinatorEmailID:'',
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
              name="cordinatorEmailID"
              value={cordinator.cordinatorEmailID}
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
                rowCount={cordinatorsTable.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
                onSelectAllClick={handleSelectAllClick}
              />
              <TableBody>
                {cordinatorsTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((custInfo) => {
                  const { id, sourceCode,cordinatorCode, source, firmName, firmAddress, cordinatorType, cordinatorName, cordinatorNumber, cordinatorEmailID } =
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
                            {cordinatorCode}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell align="left">{sourceCode}</TableCell>
                      <TableCell align="left">{source}</TableCell>
                      <TableCell align="left">{firmName}</TableCell>
                      <TableCell align="left">{firmAddress}</TableCell>
                      <TableCell align="left">{cordinatorType}</TableCell>
                      <TableCell align="left">{cordinatorName}</TableCell>
                      <TableCell align="left">{cordinatorNumber}</TableCell>
                      <TableCell align="left">{cordinatorEmailID}</TableCell>
                     
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
          count={cordinatorsTable.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      </>
    );
  };
  
  export default CordinatorMaster;