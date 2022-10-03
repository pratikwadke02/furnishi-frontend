import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  Tab,
  Tabs,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Iconify from '../components/Iconify';
import Page from '../components/Page';
import Source from '../components/Master/Source';
import ArchitectDesignerCordinator from '../components/Master/Architect.Designer.Cordinator';
import Product from '../components/Master/Product';
import CordinatorType from '../components/Master/CordinatorType';
import Cordinator from '../components/Master/Cordinator';
import FactoryInfo from '../components/Master/FactoryInfo';
import StatusAction from '../components/Master/StatusAction';
import Status from '../components/Master/Status';
import SnagIssue from '../components/Master/SnagIssue';
import SnagSolution from '../components/Master/SnagSolution';
import SnagAction from '../components/Master/SnagAction';
import SnagCost from '../components/Master/SnagCost';
import Location from '../components/Master/Location';
import WorkType from '../components/Master/WorkType';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p:2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Master = () => {

  const products = (useSelector(state => state.product.products));
  // const managers = (useSelector(state => state.manager.managers));
  // const cordinators = (useSelector(state => state.cordinator.cordinators));
  // const archDesigrs = (useSelector(state => state.archtDesigr.archDesigrs));

  const [headTab, setHeadTab] = useState(0);
  const [subTab, setSubTab] = useState(0);


  const handleHeadTabChange = (event, newValue) => {
    setHeadTab(newValue);
  };

  // const handleSubtabChange = (event, newValue) => {
  //   setSubTab(newValue);
  // };

  // const handleChange = ({ currentTarget: input }) => {
  //   setRateMasterData({ ...rateMasterData, [input.name]: input.value });
  //   console.log(rateMasterData);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <Page title="User">
        <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Master
          </Typography>
          {/* <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Setting
          </Button> */}
        </Stack>
          <Card sx={{ p: 2 }}>
            <Box>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={headTab} onChange={handleHeadTabChange}
                variant="scrollable" aria-label="basic tabs example">
                  <Tab label="Source" {...a11yProps(0)} />
                  <Tab label="Cordinator Type" {...a11yProps(1)} />
                  <Tab label="Cordinator" {...a11yProps(2)} />
                  <Tab label="Product" {...a11yProps(3)} />
                  <Tab label="Factory Info" {...a11yProps(4)} />
                  <Tab label="Status/Action" {...a11yProps(5)} />
                  <Tab label="Status" {...a11yProps(6)} />
                  <Tab label="Snag Issue" {...a11yProps(7)} />
                  <Tab label="Snag Solution" {...a11yProps(8)} />
                  <Tab label="Snag Action" {...a11yProps(9)} />
                  <Tab label="Snag Cost" {...a11yProps(10)} />
                  <Tab label="Location" {...a11yProps(11)} />
                  <Tab label="Work Type" {...a11yProps(12)} />
                </Tabs>
              </Box>
              <TabPanel value={headTab} index={0}>
                <Source />
              </TabPanel>
              <TabPanel value={headTab} index={1}>
                <CordinatorType />
              </TabPanel>
              <TabPanel value={headTab} index={2}>
                <Cordinator />
              </TabPanel>
              <TabPanel value={headTab} index={3}>
                <Product products={products} />
              </TabPanel>
              <TabPanel value={headTab} index={4}>
                <FactoryInfo />
              </TabPanel>
              <TabPanel value={headTab} index={5}>
                <StatusAction />
              </TabPanel>
              <TabPanel value={headTab} index={6}>
                <Status />
              </TabPanel>
              <TabPanel value={headTab} index={7}>
                <SnagIssue />
              </TabPanel>
              <TabPanel value={headTab} index={8}>
                <SnagSolution />
              </TabPanel>
              <TabPanel value={headTab} index={9}>
                <SnagAction />
              </TabPanel>
              <TabPanel value={headTab} index={10}>
                <SnagCost />
              </TabPanel>
              <TabPanel value={headTab} index={11}>
                <Location />
              </TabPanel>
              <TabPanel value={headTab} index={12}>
                <WorkType />
              </TabPanel>
            </Box>
          </Card>
        </Container>
      </Page>
    </>
  );
};

export default Master;
