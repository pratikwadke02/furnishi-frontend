import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
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
  Modal,
  Grid,
} from '@mui/material';
import Page from '../components/Page';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '100%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 800,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 1,
  p: 2,
};

const CustomerInformation = () => {

  const clientTermsAndConditions = [
    {
      id: 1,
      title: 'Client has to provide 7 day advance planning',
    },
    {
      id: 2,
      title: 'Client has to provide all product assembly and installation related documents',
    },
    {
      id: 3,
      title: 'Client has to depute his own manager to get handover from WSB team',
    },
    {
      id: 4,
      title: 'Client has to provide packing list',
    },
    {
      id: 5,
      title:
        'Incase of wrong packaging, client has to pay the cost of waiting/visit failure and has to arrange seggrigation of material',
    },
    {
      id: 6,
      title: 'Incase of phase wise installation, client has to inform on each phase to start next phase work',
    },
    {
      id: 7,
      title: 'Any damage during shifting will be client responsibilty',
    },
    {
      id: 8,
      title: 'Client has to provide product protection material for each phase',
    },
    {
      id: 9,
      title: 'Client has to arrange all work pemissions',
    },
    {
      id: 10,
      title: 'Client has to arrange gate pass for team',
    },
    {
      id: 11,
      title: 'Material cleaning cost will be extra',
    },
    {
      id: 12,
      title: 'Deep cleaning cost will be extra',
    },
    {
      id: 13,
      title:
        'Client has to plan material supply considering WSB never leaves the site for purchasing. If WSB teem has been asked to proccure or arrange something, it will cost extra and will done on next working day if available.',
    },
  ];

  const Note =
    'All the above work instructions should be taken as support needed to save and deliver the best quality product to your prestigeous client with best service experience.';

  

  const [customerInfo, setCustomerInfo] = useState({
    // firstName: '',
    // middleName: '',
    // lastName: '',
    // mobileNumber: '',
    // companyName: '',
    // designation: '',
    // companyRole: '',
    id: 1,
    name: 'Pratik Wadke',
    teacher: '',
    
  });

  const handleChange = ({ currentTarget: input }) => {
    setCustomerInfo({
      ...customerInfo,
      [input.name]: input.value,
    });
    console.log(customerInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(customerInfo);
      await axios
        .post('http://localhost:8080/api/wsb/addCustomerInfo', customerInfo)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setCustomerInfo({
        firstName: '',
        middleName: '',
        lastName: '',
        mobileNumber: '',
        companyName: '',
        designation: '',
        companyRole: '',
      });
      alert('Information submitted successfully');
    } catch (error) {
      console.log(error);
    }
  };

  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
    handleCloseModal();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <Typography variant="h4">Terms & Conditions</Typography>
          </Box>
          <Box sx={{ mt: 1 }}>
            {clientTermsAndConditions.map((item) => {
              return (
                <Box sx={{ textAlign: 'left', p: 1 }}>
                  <Typography variant="h7">
                    {item.id}. {item.title}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleFormSubmit} sx={{ mr: 1 }}>
              Accept
            </Button>
            <Button variant="contained" color="primary" onClick={handleCloseModal} sx={{ ml: 1 }}>
              Decline
            </Button>
          </Box>
        </Card>
      </Modal>
      <Page title="User">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Customer Information
            </Typography>
          </Stack>
          <Card sx={{ p: 2 }}>
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
                <TextField
                  required
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  sx={{ mr: { md: 1 } }}
                  name="firstName"
                  value={customerInfo.firstName}
                  onChange={handleChange}
                />
                <TextField
                  label="Middle Name"
                  required
                  variant="outlined"
                  fullWidth
                  sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                  type="text"
                  name="middleName"
                  value={customerInfo.middleName}
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                  required
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  sx={{ mr: { md: 1 } }}
                  type="text"
                  name="lastName"
                  value={customerInfo.lastName}
                  onChange={handleChange}
                />
                <TextField
                  required
                  label="Mobile Number"
                  variant="outlined"
                  fullWidth
                  sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                  type="number"
                  name="mobileNumber"
                  value={customerInfo.mobileNumber}
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
                <TextField
                  required
                  label="Company Name"
                  variant="outlined"
                  fullWidth
                  sx={{ mr: { md: 1 } }}
                  name="companyName"
                  value={customerInfo.companyName}
                  onChange={handleChange}
                />
                <TextField
                  required
                  label="Designation"
                  variant="outlined"
                  fullWidth
                  sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                  type="text"
                  name="designation"
                  value={customerInfo.designation}
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ display: 'flex', mt: 2, mb: 2 }}>
                <TextField
                  required
                  label="Company Role"
                  variant="outlined"
                  fullWidth
                  name="companyRole"
                  value={customerInfo.companyRole}
                  onChange={handleChange}
                  sx={{ mr: { md: 1 } }}
                />
                <Box sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }} />
                
              </Box>
              <Box>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Box>
            </form>
          </Card>
        </Container>
      </Page>
    </>
  );
};

export default CustomerInformation;
