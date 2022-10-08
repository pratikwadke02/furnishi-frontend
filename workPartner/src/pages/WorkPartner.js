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
  Modal
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

const WorkPartner = () => {

  const WorkPartnerTermsAndConditions = [
    {
      id: 1,
      title: 'Work Partner team should be available on two day notice',
    },
    {
      id: 2,
      title: 'Work Partner has to follow all product assembly and installation related documents',
    },
    {
      id: 3,
      title: 'Work Partner has to depute his own supervisor to inspect the work progress and quality',
    },
    {
      id: 4,
      title: 'Work Partner has to post the site reaching time with single picture of all team members and product in back ground. It should be posted on WSB platform.',
    },
    {
      id: 5,
      title: 'Work Partner has to inspect the material packets first and before touching any material he has to take images from multiple angels to report the packed material status. He also has to make small video from all angel.',
    },
    {
      id: 6,
      title: 'Work Partner has to post the packed material images and video on WSB platform',
    },
    {
      id: 7,
      title: 'Incase of wrong/damage packaging Work Partner has to inform to client cordinator on call as well as ask approval on WSB platform to work. If client coordinator approved to work on WSB portal, work can be started.',
    },
    {
      id: 8,
      title: 'Work Partner team has to make video of each packet when opening it and has to post on WSB platform.',
    },
    {
      id: 9,
      title: 'Work Partner has to post the end time and image of work progress on leaving the site on WSB platform. After taking images and video, material has to be covered with protection material and post the image on WSB platform',
    },
    {
      id: 10,
      title: 'On every visit for installation, Work Partner has to make sure all material is safe and avaialble. Daily reaching time entry, team picture with product in back ground, leaving time, image and video of product without cover and with protection cover has to be posted on WSB platform',
    },
    {
      id: 11,
      title: 'Keeping the material in safe custody is Work Partner responsibility',
    },
    {
      id: 12,
      title: 'Work Partner has to ensure his team is reaching at site on right time',
    },
    {
      id: 13,
      title: 'New member without intimation to WSB, will not be allowed',
    },
    {
      id: 14,
      title: 'No worker will be allowed to work without proper dress and shoes.',
    },
    {
      id: 15,
      title: 'Work Partner has to make sure cleaning of product and site starting, during and after work. Dirty material has to be cleaned by Work Partner.',
    },
    {
      id: 16,
      title: 'If material is received dirty, it should be reported to client on WSB platform',
    },
    {
      id: 17,
      title: 'No tabacco, Pan Gutkha chewing will be allowed at site.',
    },
    {
      id: 18,
      title: 'All tool condition should up to date. Screw head should not be damaged due to poor or wrong bit.',
    },
    {
      id: 19,
      title: "End customer's any material should not be damaged by Work Partner, if something like this happens, he has to bear the cost.",
    },
    {
      id: 20,
      title: 'Tools or material should not be spread on floor, counter or any sensitive surface. Tools should be in hand or in kit.',
    },
    {
      id: 21,
      title: 'Work Partner should have a smart phone',
    }
  ]

  const Note = "Note	Incase of missing/non readable image, video, Work Partner has to panelised financially"

  const [workPartnerAdmin, setWorkPartnerAdmin] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    presentAddress: "",
    permanentAddress: "",
    workPlace: "",
  });

  const [workPartner, setWorkPartner] = useState({
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
    setWorkPartner({
      ...workPartner,
      [input.name]: input.value,
    });
    console.log(workPartner);
  };

  const handleSubmit = async (e) => {
    try{
        console.log(workPartner)
        await axios
            .post("http://localhost:8080/api/wsb/addWorkPartner", workPartner)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        setWorkPartner({
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            mobileNumber: "",
            presentAddress: "",
            permanentAddress: "",
            workPlace: "",
        });
        alert("Work Partner added successfully");
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
              WorkPartnerTermsAndConditions.map((item) => {
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
              Work Partner
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
                  value={workPartner.firstName}
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
                  value={workPartner.middleName}
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
                  value={workPartner.lastName}
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
                  value={workPartner.workPlace}
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
                  value={workPartner.email}
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
                  value={workPartner.mobileNumber}
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
                  value={workPartner.presentAddress}
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
                  value={workPartner.permanentAddress}
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

export default WorkPartner;
