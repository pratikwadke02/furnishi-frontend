import React from 'react';
import {
  Typography,
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button
} from '@mui/material';
import { useSelector } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   tableheading: {
//     color: 'gray',
//   },
// });

function createData(id, description, qty, unitprice) {
  return { id, description, qty, unitprice };
}


const Invoice = () => {
  const invoiceData = (useSelector((state) => state.invoice.invoice))
  console.log(invoiceData);
  // const [rows, setRows] = React.useState();
    const rows = [
      createData(1, 'AMC', invoiceData.amcData || 0, invoiceData.amcPrice),
      createData(2, 'Deep Cleaning', invoiceData.deepClean || 'No', invoiceData.deepCleanPrice),
      createData(3, 'Live Streaming', invoiceData.liveStreaming || 'No', invoiceData.liveStreamingPrice),
      createData(4, 'Installation Recording', invoiceData.installationRecording || 'No', invoiceData.installationRecordingPrice),
      createData(5, 'Installation', invoiceData.enquiryType === "installationEnquiry" ? invoiceData.area : 0, invoiceData.installationPrice),
      createData(6, 'Survey', invoiceData.enquiryType === "surveyEnquiry" ? invoiceData.product : 'No', invoiceData.surveyPrice),
      createData(7, 'Complaint', invoiceData.enquiryType === "complaintEnquiry" ? invoiceData.product : 'No', invoiceData.complaintPrice),
    ];
  console.log(rows);
  if(!invoiceData) return 'Loading...';
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: '80vw',
          height: '900px',
          borderRadius: '6px',
          margin: 'auto',
          marginTop: '30px',
          justifyContent: 'center',
        }}
      >
         <Grid container spacing={2} sx={{ margin: 'auto' }}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ marginLeft: '10px' }}>
              Furnishi
            </Typography>
          </Grid>
          {/* <Grid item xs={6}>
            <Typography variant="h6" sx={{ marginLeft: '400px' }}>
              INV-17052
            </Typography>
          </Grid> */}
        </Grid>
        {/* <Grid container spacing={2} sx={{ margin: 'auto' }}>
          <Grid item xs={6}>
            <Typography variant="p" sx={{ color: 'gray', marginLeft: '10px' }}>
              <b>INVOICE FROM</b>
            </Typography>
            <br />
            <br />
            <Typography sx={{ marginLeft: '10px' }}>
              Reece Chung
              <br />
              36901 Elmer Spurs Apt, 762-Miramar,DE/92836
              <br />
              Phone:990-588-5716
            </Typography>
            <br />
            <br />
            <Typography variant="p" sx={{ color: 'gray', marginLeft: '10px' }}>
              <b>DATE CREATE</b>
            </Typography>
            <br />
            <br />
            <Typography sx={{ marginLeft: '10px' }}>13 Jan 2023</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="p" sx={{ color: 'gray', marginLeft: '30px' }}>
              <b>INVOICE TO</b>
            </Typography>
            <br />
            <br />
            <Typography sx={{ marginLeft: '30px' }}>
              Lainey Davidson
              <br />
              2089 Runolfsson Harbors Suite 886-Chapel Hill, TX/32827
              <br />
              Phone:955-439-2578
            </Typography>
            <br />
            <br />
            <Typography variant="p" sx={{ color: 'gray', marginLeft: '30px' }}>
              <b>DUE DATE</b>
            </Typography>
            <br />
            <br />
            <Typography sx={{ marginLeft: '30px' }}>05 FEB 2023</Typography>
          </Grid>
        </Grid>
        <br />
        <br /> */}
        <TableContainer component={Paper} sx={{ marginLeft: '20px', margin: 'auto', boxShadow: 'none' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell >
                  <b>#</b>
                </TableCell>
                <TableCell >
                  <b>Description</b>
                </TableCell>
                <TableCell >
                  <b>Qty</b>
                </TableCell>
                <TableCell >
                  <b>Unit price</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} sx={{ borderBottom: '1px solid rgba(224, 224, 224, 0.5)' }}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    <b>{row.description}</b>
                  </TableCell>
                  <TableCell>{row.qty}</TableCell>
                  <TableCell>{row.unitprice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <br />
        <Box sx={{ marginLeft: '950px' }}>
          <Typography>SubTotal : ₹{invoiceData.total}</Typography>
          <br />
          <Typography>Discount: </Typography>
          <br />
          <Typography>Taxes</Typography>
          <br />
          <Typography>
            <b>Total: ₹{invoiceData.total}</b>
          </Typography>
        </Box>
        <br />
        <br />
        <hr style={{ opacity: 0.2 }} />
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="p" sx={{ marginLeft: '20px' }}>
              <b>NOTES</b>
            </Typography>
            <br />
            <Typography variant="subtitle" sx={{ marginLeft: '20px' }}>
              We appreciate your business.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="p" sx={{ marginLeft: '160px' }}>
              <b>Have a Question?</b>
            </Typography>
            <br />
            <Typography variant="subtitle" sx={{ marginLeft: '150px' }}>
              support@furnishi.cc
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ marginLeft: '20px' }}>
          <Button variant="contained" sx={{ marginTop: '20px' }}>
            Submit
          </Button>
          <Button variant="contained" sx={{ marginTop: '20px', marginLeft: '20px' }}>
            Discuss
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default Invoice;
