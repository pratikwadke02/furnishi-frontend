import {filter} from 'lodash';
import React, { useState, useEffect } from 'react';
import {  Box,
  TextField,
  Button,
  Typography,
  Card,
  Table,
  Stack,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination, } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addManager } from '../../actions/master/manager';
import Label from '../Label';
import Scrollbar from '../Scrollbar';
import Iconify from '../Iconify';
import SearchNotFound from '../SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../../sections/@dashboard/user';

const TABLE_HEAD = [
  { id: 'projectName', label: 'Name', alignRight: true },
  { id: 'managerName', label: 'Manager Name', alignRight: true },
  { id: 'managerEmail', label: 'Manager Email', alignRight: true },
  { id: 'managerContact', label: 'Manager Contact', alignRight: true },
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

const Manager = (props) => {
  const {managers} = props;
  const [managersTable, setManagersTable] = useState(managers);

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
      const newSelecteds = managersTable.map((n) => n.id);
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

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - managersTable.length) : 0;

  const filteredUsers = applySortFilter(managersTable, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;


  const [managerInfo, setManagerInfo] = useState({
    projectName: '',
    managerName: '',
    managerContact: '',
    managerEmail: '',
  });

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(managerInfo);
      dispatch(addManager(managerInfo));
      setManagersTable([...managersTable, managerInfo]);
      setManagerInfo({
        projectName: '',
        managerName: '',
        managerContact: '',
        managerEmail: '',
      });
      alert('Manager Added Successfully');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setManagerInfo({ ...managerInfo, [e.target.name]: e.target.value });
    console.log(managerInfo);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
        <TextField
          required
          label="Project Name"
          variant="outlined"
          fullWidth
          sx={{ mr: { md: 1 } }}
          type="text"
          name="projectName"
          value={managerInfo.projectName}
          onChange={handleChange}
        />
        <TextField
          label="Project Manager Name"
          required
          variant="outlined"
          fullWidth
          sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          type="text"
          name="managerName"
          value={managerInfo.managerName}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
        <TextField
          required
          label="Project Manager Contact"
          variant="outlined"
          fullWidth
          sx={{ mr: { md: 1 } }}
          type="number"
          name="managerContact"
          value={managerInfo.managerContact}
          onChange={handleChange}
        />
        <TextField
          required
          label="Project Manager Email"
          variant="outlined"
          fullWidth
          sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          type="email"
          name="managerEmail"
          value={managerInfo.managerEmail}
          onChange={handleChange}
        />
      </Box>

      <Box>
        <Button variant="contained" color="primary" type="submit">
          Add Manager
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
        rowCount={managersTable.length}
        numSelected={selected.length}
        onRequestSort={handleRequestSort}
        onSelectAllClick={handleSelectAllClick}
      />
      <TableBody>
        {managersTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((custInfo) => {
          const { id, projectName, managerName, managerContact, managerEmail  } = custInfo;
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
                    {projectName}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align="left">{managerName}</TableCell>
              <TableCell align="left">{managerContact}</TableCell>
              <TableCell align="left">{managerEmail}</TableCell>
               
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
  count={managersTable.length}
  rowsPerPage={rowsPerPage}
  page={page}
  onPageChange={handleChangePage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/>
    </Box>
    </>
  );
};

export default Manager;
