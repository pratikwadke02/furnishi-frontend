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
  TablePagination } from '@mui/material';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addCordinator } from '../../actions/master/cordinator';
import Label from '../Label';
import Scrollbar from '../Scrollbar';
import Iconify from '../Iconify';
import SearchNotFound from '../SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../../sections/@dashboard/user';

const TABLE_HEAD = [
  { id: 'orderCode', label: 'Order Code', alignRight: true },
  { id: 'clientName', label: 'Client Name', alignRight: true },
  { id: 'serviceType', label: 'Service Type', alignRight: true },
  { id: 'productType', label: 'Product Type', alignRight: true },
  { id: 'pincode', label: 'Pincode', alignRight: true },
    { id: 'status', label: 'Status', alignRight: true },
  { id: '' },
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

const AllOrders = (props) => {
    
  const {orders, openModal} = props;
  // const orders = useSelector((state) => state.order.orders);
  console.log(orders);

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
      const newSelecteds = orders.map((n) => n.id);
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

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - orders.length) : 0;

  const filteredUsers = applySortFilter(orders, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;



  
  const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log(archtDesigrCordInfo);
//       dispatch(addCordinator(archtDesigrCordInfo));
//       setorders([...orders, archtDesigrCordInfo]);
//       setArchtDesigrCordInfo({
//         projectName: '',
//         cordinatorName: '',
//         cordinatorContact: '',
//         cordinatorEmail: '',
//       });
//       alert('Architect/Designer/Cordinator Added Successfully');
//     } catch (error) {
//       console.log(error);
//     }
//   };


  return (
    <>
    <Box>
      <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

<Scrollbar>
  <TableContainer sx={{ minWidth: 800 }}>
    <Table>
      <UserListHead
        order={order}
        orderBy={orderBy}
        headLabel={TABLE_HEAD}
        rowCount={orders.length}
        numSelected={selected.length}
        onRequestSort={handleRequestSort}
        onSelectAllClick={handleSelectAllClick}
      />
      <TableBody>
        {orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((custInfo) => {
          const { id, orderCode, clientName,serviceType, productType, pincode, status   } = custInfo;
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
                    {orderCode}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align="left">{clientName}</TableCell>
              <TableCell align="left">{serviceType}</TableCell>
              <TableCell align="left">{productType}</TableCell>

            <TableCell align="left">{pincode}</TableCell>
            <TableCell align="left">{status}</TableCell>

               <TableCell align="right">
                {/* <RouterLink to ={`/dashboard/student/${id}`} style={{textDecoration:'none'}}> */}
                <Button variant="contained" onClick={()=>openModal(id)}>
                  View
                </Button>
                {/* </RouterLink> */}
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
  count={orders.length}
  rowsPerPage={rowsPerPage}
  page={page}
  onPageChange={handleChangePage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/>
    </Box>
    </>
  );
};

export default AllOrders;
