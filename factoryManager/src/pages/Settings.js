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
import { useDispatch } from 'react-redux';
import { updatePassword } from '../actions/auth/auth';
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

const Settings = () => {

  const user = JSON.parse(localStorage.getItem('profile')).data;
  console.log(user);

  

  const [userInfo, setUserInfo] = useState({
    email: user.email,
    password: '',
    confirmPassword: '',
    oldPassword: '',
  });

  const handleChange = ({ currentTarget: input }) => {
    setUserInfo({
      ...userInfo,
      [input.name]: input.value,
    });
    console.log(userInfo);
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(userInfo);
      dispatch(updatePassword(userInfo));
      setUserInfo({
        email: user.email,
        password: '',
        confirmPassword: '',
        oldPassword: '',
      });
      alert("Password updated successfully");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Page title="User">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
             User Settings
            </Typography>
          </Stack>
          <Card sx={{ p: 2 }}>
            <Box>
              {/* <Box>
                <Typography variant="h4">
                  Personal Details
                </Typography>
              </Box> */}
              <Box sx={{mt:1, mb:1}}>
                <Typography variant="h6" >
                  Email : {user.email}
                </Typography>
              </Box>
              <Box sx={{mt:1, mb:1}}>
                <Typography variant="h6" >
                  Password : ********
                </Typography>
              </Box>
            </Box>
            <form onSubmit={handleSubmit} style={{marginTop:'30px'}}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2, alignItems:'center' }}>
                <Box sx={{width:'100%', maxWidth:'150px'}}>
                    New Password
                </Box>
                <TextField
                  label="New Password"
                  required
                  variant="outlined"
                  fullWidth
                  sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 }, maxWidth:{md:'300px'} }}
                  type="password"
                  name="password"
                  value={userInfo.password}
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 2, mb: 2 , alignItems:'center' }}>
              <Box sx={{width:'100%', maxWidth:'150px'}}>
                  
                  New Password
              </Box>
              <TextField
                label="Confirm Password"
                required
                variant="outlined"
                fullWidth
                sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 }, maxWidth:{md:'300px'} }}
                type="password"
                name="confirmPassword"
                value={userInfo.confirmPassword}
                onChange={handleChange}
              />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2, alignItems:'center'  }}>
              <Box sx={{width:'100%', maxWidth:'150px'}}>
                  
                    Old Password
                </Box>
                <TextField
                  label="Old Password"
                  required
                  variant="outlined"
                  fullWidth
                  sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 }, maxWidth:{md:'300px'} }}
                  type="password"
                  name="oldPassword"
                  value={userInfo.oldPassword}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <Button variant="contained" color="primary" type="submit">
                  Update Password
                </Button>
              </Box>
            </form>
          </Card>
        </Container>
      </Page>
    </>
  );
};

export default Settings;
