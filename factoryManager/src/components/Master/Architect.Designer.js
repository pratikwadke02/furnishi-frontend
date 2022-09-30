import {filter} from 'lodash';
import React, { useState, useEffect } from 'react';
import { Box,
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
  TablePagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem
 } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCordinator } from '../../actions/master/cordinator';
import Label from '../Label';
import Scrollbar from '../Scrollbar';
import Iconify from '../Iconify';
import SearchNotFound from '../SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../../sections/@dashboard/user';

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: true },
  { id: 'firmName', label: 'Firm Name', alignRight: true },
  { id: 'firmAddress', label: 'Firm Address', alignRight: true },
  { id: 'emailId', label: 'emailId', alignRight: true },
  { id: 'contact', label: 'Contact', alignRight: true },
  { id: 'cordiantorName', label: 'Cordinator Name', alignRight: true },
  { id: 'projectName', label: 'Project Name', alignRight: true },
  { id: 'cordinatorDetails', label: 'Cordinator Details', alignRight: true },
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

const ArchitectDesigner = (props) => {

  const {cordinators, archDesigrs} = props;

  const [archDesigrsTable, setArchDesigrsTable] = useState(
    archDesigrs
  );

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
      const newSelecteds = archDesigrsTable.map((n) => n.id);
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

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - archDesigrsTable.length) : 0;

  const filteredUsers = applySortFilter(archDesigrsTable, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;



  const [archtDesigrInfo, setArchtDesigrInfo] = React.useState({
    name: '',
    firmName: '',
    firmAddress: '',
    emailId: '',
    contactOne: '',
    contactTwo: '',
    cordinatorName: '',
    cordinatorContact: '',
    cordinatorEmail: '',
    projectName: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(archtDesigrInfo);
      await axios.post('http://localhost:8080/api/wsb/addArchtDesigr', archtDesigrInfo).then((res) => {
        console.log(res);
      });
      setArchDesigrsTable([...archDesigrsTable, archtDesigrInfo]);
      setArchtDesigrInfo({
        name: '',
        firmName: '',
        firmAddress: '',
        emailId: '',
        contactOne: '',
        contactTwo: '',
        cordinatorName: '',
        cordinatorContact: '',
        cordinatorEmail: '',
        projectName: '',
      });
      alert('Architect/Designer Added Successfully');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setArchtDesigrInfo({ ...archtDesigrInfo, [e.target.name]: e.target.value });
    console.log(archtDesigrInfo);
  };

  const handleCordinatorChange = (e) => {
    cordinators.map((cordinator) => {
      if(cordinator.id === e.target.value){
        setArchtDesigrInfo({ ...archtDesigrInfo, cordinatorName: cordinator.cordinatorName, cordinatorContact: cordinator.cordinatorContact, cordinatorEmail: cordinator.cordinatorEmail, projectName: cordinator.projectName });
      }
      return null;
    })
    console.log(archtDesigrInfo);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
        <TextField
          required
          label="Name"
          variant="outlined"
          fullWidth
          sx={{ mr: { md: 1 } }}
          type="text"
          name="name"
          value={archtDesigrInfo.name}
          onChange={handleChange}
        />
        <TextField
          label="Firm Name"
          required
          variant="outlined"
          fullWidth
          sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          type="text"
          name="firmName"
          value={archtDesigrInfo.firmName}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
        <TextField
          required
          label="Firm Address"
          variant="outlined"
          fullWidth
          sx={{ mr: { md: 1 } }}
          type="text"
          name="firmAddress"
          value={archtDesigrInfo.firmAddress}
          onChange={handleChange}
        />
        <TextField
          required
          label="Email Id"
          variant="outlined"
          fullWidth
          sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          type="email"
          name="emailId"
          value={archtDesigrInfo.emailId}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
        <TextField
          required
          label="Contact One"
          variant="outlined"
          fullWidth
          sx={{ mr: { md: 1 } }}
          type="number"
          name="contactOne"
          value={archtDesigrInfo.contactOne}
          onChange={handleChange}
        />
        <TextField
          required
          label="Contact Two"
          variant="outlined"
          fullWidth
          sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          type="number"
          name="contactTwo"
          value={archtDesigrInfo.contactTwo}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ width: '100%', mt: 2, mb: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Cordinator Details
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
        <FormControl fullWidth sx={{ mr: { md: 1 } }}>
          <InputLabel id='demo-simple-select-label'>Cordinator Name</InputLabel>
        <Select
          required
          labelId='demo-simple-select-label'
          label="Cordinator Name"
          variant="outlined"
          fullWidth
          type="text"
          name="cordinatorName"
          value={archtDesigrInfo.cordinatorName}
          onChange={handleCordinatorChange}
        >
          {
            cordinators.map((cordinator, index) => {
              return <MenuItem key={index} value={cordinator.id}>{cordinator.cordinatorName}</MenuItem>
            })
          }
        </Select>
        </FormControl>
        {
          archtDesigrInfo.cordinatorName !== '' ? (
            <TextField
            required
            label="Project Name"
            variant="outlined"
            fullWidth
            sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
            type="text"
            name="projectName"
            value={archtDesigrInfo.projectName}
            onChange={handleChange}
          />
          ) : <Box sx={{width:'100%', ml:1}}/>
        }
      </Box>
      {
        archtDesigrInfo.cordinatorName !== '' ? (
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
        <TextField
          required
          label="Project Cordinator Contact"
          variant="outlined"
          fullWidth
          sx={{ mr: { md: 1 } }}
          type="number"
          name="projectCordinatorContact"
          value={archtDesigrInfo.cordinatorContact}
          onChange={handleChange}
        />
        <TextField
          required
          label="Project Cordinator Email"
          variant="outlined"
          fullWidth
          sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
          type="email"
          name="projectCordinatorEmail"
          value={archtDesigrInfo.cordinatorEmail}
          onChange={handleChange}
        />
      </Box> 
        ) : null
      }
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
      rowCount={archDesigrsTable.length}
      numSelected={selected.length}
      onRequestSort={handleRequestSort}
      onSelectAllClick={handleSelectAllClick}
    />
    <TableBody>
      {archDesigrsTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((custInfo) => {
        const { id, name, firmName, firmAddress,emailId, contactOne, contactTwo, cordinatorName, cordinatorContact, cordinatorEmail, projectName } = custInfo;
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
                  {name}
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align="left">{firmName}</TableCell>
            <TableCell align="left">{firmAddress}</TableCell>
            <TableCell align="left">{emailId}</TableCell>
            <TableCell align="left">
              <Box sx={{display:'flex', flexDirection:'column', alignItems:'start'}}>
                <Box>
              {contactOne}
              </Box>
              <Box>
              {contactTwo}
                  </Box>
              </Box>
              </TableCell>
            <TableCell align="left">{cordinatorName}</TableCell>
            <TableCell align="left">{projectName}</TableCell>
             <TableCell align="left">
             <Box sx={{display:'flex', flexDirection:'column', alignItems:'start'}}>
                <Box>
              {cordinatorEmail}
              </Box>
              <Box>
              {cordinatorContact}
                  </Box>
              </Box>
              </TableCell>
            
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
count={archDesigrsTable.length}
rowsPerPage={rowsPerPage}
page={page}
onPageChange={handleChangePage}
onRowsPerPageChange={handleChangeRowsPerPage}
/>
  </Box>
  </>
  );
};

export default ArchitectDesigner;
