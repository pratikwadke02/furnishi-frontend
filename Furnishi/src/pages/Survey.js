import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
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
} from '@mui/material';
import Page from '../components/Page';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width:'100%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 800,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 1,
  p: 2,
};

const Surver = () => {

  const surveyTermsAndConditions = [
    {
      id: 1,
      title: 'Survey Partner should be available on one day notice'
    },
    {
      id: 2,
      title: 'Survey Partner has to follow all product area survey checklist',
    },
    {
      id: 3,
      title: 'Survey Partner has to post the site reaching time with selfie on site in back ground. It should be posted on WSB platform.'
    },
    {
      id: 4,
      title: 'Survey Partner has to take video and image of each area from left to right. All walls, floor, ceiling video and picture has to be posted on WSB platform.'
    },
    {
      id: 5,
      title: 'Survey Partner has to draft the dimensions cleanly on graph. Plan and all wall elevation should be drafted on graph and have to be posted on WSB platform before leaving the site.'
    },
    {
      id: 6,
      title: 'Survey Partner has to reach at site on right time'
    },
    {
      id: 7,
      title: 'New member without intimation to WSB, will not be allowed'
    },
    {
      id: 8,
      title: 'No worker will be allowed to work without proper dress and shoes.'
    },
    {
      id: 9,
      title: 'No tabacco, Pan Gutkha chewing will be allowed at site.'
    },
    {
      id: 10,
      title: 'All tool condition should up to date.'
    },
    {
      id: 11,
      title: 'Tools or material should not be spread on floor, counter or any sensitive surface. Tools should be in hand or in kit.'
    },
    {
      id: 12,
      title: 'Survey Partner should have a smart phone'
    }
  ]

  const Note = 'Incase of missing/non readable dimension, image, video, Survey Partner has to revisit at his own cost.'


  const [survey, setSurvey] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    presentAddress: "",
    permanentAddress: "",
    workPlace: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setSurvey({
      ...survey,
      [input.name]: input.value,
    });
    console.log(survey);
  };

  const handleSubmit = async (e) => {
    try{
        console.log(survey)
        await axios
            .post("http://localhost:8080/api/wsb/addSurvey", survey)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        setSurvey({
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            mobileNumber: "",
            presentAddress: "",
            permanentAddress: "",
            workPlace: "",
        });
        alert("Survey added successfully");
    }catch(error){
        console.log(error);
    }
  };

  const [open, setOpen ] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  }

  const handleCloseModal = () => {
    setOpen(false);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
    handleCloseModal();
  }

  return (
    <>
    <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <Box sx={{width:'100%', textAlign:'center'}}>
            <Typography variant="h3">
                Terms & Conditions
            </Typography>
          </Box>
          <Box sx={{mt:1}}>
            {
              surveyTermsAndConditions.map((item) => {
                return (
                  <Box sx={{textAlign:'left',pt:1, pb:1}}>
                    <Typography variant="h7">
                      {item.id}. {item.title}
                    </Typography>
                  </Box>
                )
              })
            }
            <Box sx={{mt:1}}>
              <Typography variant="h6">
                Note: {Note}
              </Typography>
            </Box>
          </Box>
          <Box sx={{mt:2}}>
            <Button variant="contained" color="primary" onClick={handleFormSubmit} sx={{mr:1}}>
              Accept
            </Button>
            <Button variant="contained" color="primary" onClick={handleCloseModal} sx={{ml:1}}>
              Decline
            </Button>
          </Box>
        </Card>
      </Modal>
      <Page title="User">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
               Survey
            </Typography>
          </Stack>
          <Card sx={{ p: 2 }}>
            <form>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
                <TextField
                  required
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  sx={{ mr: { md: 1 } }}
                  name="firstName"
                  value={survey.firstName}
                  onChange={handleChange}
                />
                <TextField
                  required
                  label="Middle Name"
                  variant="outlined"
                  fullWidth
                  sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                  type="text"
                  name="middleName"
                  value={survey.middleName}
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
                  value={survey.lastName}
                  onChange={handleChange}
                />
                <TextField
                  required
                  label="Best Suitable Work Place"
                  variant="outlined"
                  fullWidth
                  sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                  type="text"
                  name="workPlace"
                  value={survey.workPlace}
                  onChange={handleChange}
                />
                
              </Box>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
                <TextField
                  required
                  label="Email"
                  variant="outlined"
                  fullWidth
                  sx={{ mr: { md: 1 } }}
                  name="email"
                  value={survey.email}
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
                  value={survey.mobileNumber}
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ display: 'flex', mt: 2, mb: 2 }}>
                <TextField
                  required
                  label="Present Address"
                  variant="outlined"
                  multiline
                  rows={2}
                  fullWidth
                  name="presentAddress"
                  value={survey.presentAddress}
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ display: 'flex', mt: 2, mb: 2 }}>
                <TextField
                  required
                  label="Permanent Address"
                  variant="outlined"
                  multiline
                  rows={2}
                  fullWidth
                  name="permanentAddress"
                  value={survey.permanentAddress}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <Button variant="contained" color="primary" onClick={handleOpenModal}>
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

export default Surver;
