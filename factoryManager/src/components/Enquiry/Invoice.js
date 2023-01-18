import React from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tableheading: {
    color: 'gray',
  },
});

function createData(id, description, qty, unitprice) {
  return { id, description, qty, unitprice };
}

const rows = [
  createData(1, 'Apply These 7 Secret Techniques To improve Event', 5, '$16.19'),
  createData(2, 'Believing These 7 Myth About Event Keeps You From Growing', 5, '$35.71'),
  createData(3, "Don't Waste Time! 7 Fact Until You Reach Your Event", 5, '$34.31'),
];

const Invoice = () => {
  const classes = useStyles();
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
          <Grid item xs={6}>
            <Typography variant="h5" sx={{ marginLeft: '10px' }}>
              Minimal
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="p" sx={{ marginLeft: '460px' }}>
              Paid
            </Typography>
            <Typography variant="h6" sx={{ marginLeft: '400px' }}>
              INV-17052
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ margin: 'auto' }}>
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
        <br />
        <TableContainer component={Paper} sx={{ marginLeft: '20px', margin: 'auto', boxShadow: 'none' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableheading}>
                  <b>#</b>
                </TableCell>
                <TableCell className={classes.tableheading}>
                  <b>Description</b>
                </TableCell>
                <TableCell className={classes.tableheading}>
                  <b>Qty</b>
                </TableCell>
                <TableCell className={classes.tableheading}>
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
          <Typography>SubTotal</Typography>
          <br />
          <Typography>Discount</Typography>
          <br />
          <Typography>Taxes</Typography>
          <br />
          <Typography>
            <b>Total</b>
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
              We appreciate your business. Should you need us to add VAT or extra notes let us know?
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="p" sx={{ marginLeft: '160px' }}>
              <b>Have a Question?</b>
            </Typography>
            <br />
            <Typography variant="subtitle" sx={{ marginLeft: '150px' }}>
              support@minimals.cc
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Invoice;
