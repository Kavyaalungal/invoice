import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Box, Typography } from '@mui/material';
import Navbar from './Navbar';

function SingleFetchField() {
  const [labNo, setLabNo] = useState('');
  const [branchId, setBranchId] = useState('');
  const [yearId, setYearId] = useState('');
  const [invoiceData, setInvoiceData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://172.16.16.10:8082/api/EditInvoice', {
          params: {
            LabNo: labNo,
            YearId: yearId,
            BranchId: branchId,
          }
        });
        setInvoiceData(response.data.invoiceDtls);
        console.log(response.data.invoiceDtls); // Log the fetched invoice data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    if (labNo !== '') {
      fetchData();
    }
  }, [labNo, branchId, yearId]);
  

  const handleLabNoChange = (e) => {
    setLabNo(e.target.value);
  };

  return (
    <Box className="edit-invoice-container">
      <Navbar />
      <Typography variant="h4">Edit Invoice</Typography>
      <TextField
        id="labNo"
        label="Lab No"
        variant="outlined"
        size="small"
        fullWidth
        value={labNo}
        onChange={handleLabNoChange}
      />
      {/* Render other form fields using the fetched invoiceData */}
      {invoiceData && (
        <>
          <TextField
            id="invName"
            label="Invoice Name"
            variant="outlined"
            size="small"
            fullWidth
            value={invoiceData.Inv_name} // Set the value of the text field to the corresponding field from invoiceData
            // Add any other necessary props and event handlers
          />
          {/* Render other form fields similarly */}
        </>
      )}
    </Box>
  );
}

export default SingleFetchField;
