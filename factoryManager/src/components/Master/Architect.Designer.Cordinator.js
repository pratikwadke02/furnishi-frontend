// import {filter} from 'lodash';
// import React, { useState, useEffect } from 'react';
// import { Box,
//   TextField,
//   Button,
//   Typography,
//   Card,
//   Table,
//   Stack,
//   Checkbox,
//   TableRow,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TablePagination } from '@mui/material';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { addCordinator } from '../../actions/master/cordinator';
// import Label from '../Label';
// import Scrollbar from '../Scrollbar';
// import Iconify from '../Iconify';
// import SearchNotFound from '../SearchNotFound';
// import { UserListHead, UserListToolbar, UserMoreMenu } from '../../sections/@dashboard/user';

// const TABLE_HEAD = [
//   { id: 'projectName', label: 'Project Name', alignRight: true },
//   { id: 'name', label: ' Name', alignRight: true },
//   { id: 'email', label: ' Email', alignRight: true },
//   { id: 'contact', label: ' Contact', alignRight: true },
// ];

// // ----------------------------------------------------------------------

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function applySortFilter(array, comparator, query) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   if (query) {
//     return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
//   }
//   return stabilizedThis.map((el) => el[0]);
// }

// const ArchitectDesignerCordinator = (props) => {
//   const {cordinators, archDesigrs} = props;
//   const [cordinatorsTable , setCordinatorsTable] = useState(cordinators);

//   const [page, setPage] = useState(0);

//   const [order, setOrder] = useState('asc');

//   const [selected, setSelected] = useState([]);

//   const [orderBy, setOrderBy] = useState('name');

//   const [filterName, setFilterName] = useState('');

//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelecteds = cordinatorsTable.map((n) => n.id);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, id) => {
//     const selectedIndex = selected.indexOf(id);
//     let newSelected = [];
//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, id);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
//     }
//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleFilterByName = (event) => {
//     setFilterName(event.target.value);
//   };

//   const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - cordinatorsTable.length) : 0;

//   const filteredUsers = applySortFilter(cordinatorsTable, getComparator(order, orderBy), filterName);

//   const isUserNotFound = filteredUsers.length === 0;



//   const [archtDesigrCordInfo, setArchtDesigrCordInfo] = React.useState({
//     projectName: '',
//     cordinatorName: '',
//     cordinatorContact: '',
//     cordinatorEmail: '',
//   });

//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log(archtDesigrCordInfo);
//       dispatch(addCordinator(archtDesigrCordInfo));
//       setCordinatorsTable([...cordinatorsTable, archtDesigrCordInfo]);
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

//   const handleChange = (e) => {
//     setArchtDesigrCordInfo({ ...archtDesigrCordInfo, [e.target.name]: e.target.value });
//     console.log(archtDesigrCordInfo);
//   };

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//       <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
//         <TextField
//           required
//           label="Project Name"
//           variant="outlined"
//           fullWidth
//           sx={{ mr: { md: 1 } }}
//           type="text"
//           name="projectName"
//           value={archtDesigrCordInfo.projectName}
//           onChange={handleChange}
//         />
//         <TextField
//           label="Project Cordinator Name"
//           required
//           variant="outlined"
//           fullWidth
//           sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
//           type="text"
//           name="cordinatorName"
//           value={archtDesigrCordInfo.cordinatorName}
//           onChange={handleChange}
//         />
//       </Box>
//       <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
//         <TextField
//           required
//           label="Project Cordinator Contact"
//           variant="outlined"
//           fullWidth
//           sx={{ mr: { md: 1 } }}
//           type="number"
//           name="cordinatorContact"
//           value={archtDesigrCordInfo.cordinatorContact}
//           onChange={handleChange}
//         />
//         <TextField
//           required
//           label="Project Cordinator Email"
//           variant="outlined"
//           fullWidth
//           sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
//           type="email"
//           name="cordinatorEmail"
//           value={archtDesigrCordInfo.cordinatorEmail}
//           onChange={handleChange}
//         />
//       </Box>

//       <Box>
//         <Button variant="contained" color="primary" type="submit">
//           Submit
//         </Button>
//       </Box>
//     </form>
//     <Box>
//       <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

// <Scrollbar>
//   <TableContainer sx={{ minWidth: 800 }}>
//     <Table>
//       <UserListHead
//         order={order}
//         orderBy={orderBy}
//         headLabel={TABLE_HEAD}
//         rowCount={cordinatorsTable.length}
//         numSelected={selected.length}
//         onRequestSort={handleRequestSort}
//         onSelectAllClick={handleSelectAllClick}
//       />
//       <TableBody>
//         {cordinatorsTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((custInfo) => {
//           const { id, projectName, cordinatorName,cordinatorContact, cordinatorEmail } = custInfo;
//           const isItemSelected = selected.indexOf(id) !== -1;

//           return (
//             <TableRow
//               hover
//               key={id}
//               tabIndex={-1}
//               role="checkbox"
//               selected={isItemSelected}
//               aria-checked={isItemSelected}
//             >
//               <TableCell padding="checkbox">
//                 <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, id)} />
//               </TableCell>
//               <TableCell align="center">
//                 <Stack direction="row" alignItems="center" spacing={2}>
//                   <Typography variant="subtitle2" noWrap>
//                     {projectName}
//                   </Typography>
//                 </Stack>
//               </TableCell>
//               <TableCell align="left">{cordinatorName}</TableCell>
//               <TableCell align="left">{cordinatorContact}</TableCell>
//               <TableCell align="left">{cordinatorEmail}</TableCell>
//             </TableRow>
//           );
//         })}
//         {emptyRows > 0 && (
//           <TableRow style={{ height: 53 * emptyRows }}>
//             <TableCell colSpan={6} />
//           </TableRow>
//         )}
//       </TableBody>

//       {isUserNotFound && (
//         <TableBody>
//           <TableRow>
//             <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
//               <SearchNotFound searchQuery={filterName} />
//             </TableCell>
//           </TableRow>
//         </TableBody>
//       )}
//     </Table>
//   </TableContainer>
// </Scrollbar>

// <TablePagination
//   rowsPerPageOptions={[5, 10, 25]}
//   component="div"
//   count={cordinatorsTable.length}
//   rowsPerPage={rowsPerPage}
//   page={page}
//   onPageChange={handleChangePage}
//   onRowsPerPageChange={handleChangeRowsPerPage}
// />
//     </Box>
//     </>
//   );
// };

// export default ArchitectDesignerCordinator;
