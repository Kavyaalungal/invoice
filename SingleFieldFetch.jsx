// import React, { useState, useEffect } from 'react';
// import { TextField, Box, Typography } from '@mui/material';

// function SingleFieldFetch() {
//   const [name, setName] = useState('');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://172.16.16.10:8082/api/EditInvoice?LabNo=1&YearId=2425&BranchId=2');
//         if (!response.ok) {
//           throw new Error(`Network response was not ok: ${response.statusText}`);
//         }
//         const data = await response.json();
//         if (data && data.invoiceDtls) {
//           setName(data.invoiceDtls.Inv_name || '');
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Box className="single-field-fetch" sx={{ padding: 2 }}>
//       {/* <Typography variant="h4" gutterBottom>
//         Fetch Single Field
//       </Typography> */}
//       {error ? (
//         <Typography variant="body1" color="error">
//           Error: {error}
//         </Typography>
//       ) : (
//         <TextField
//           label="Name"
//           variant="outlined"
//           value={name}
//           fullWidth
//           disabled
//         />
//       )}
//     </Box>
//   );
// }

// export default SingleFieldFetch;








import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Grid, Box, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import './Invoice.css';
import Navbar from './Navbar';

function SingleFieldFetch() {
  const [invoiceData, setInvoiceData] = useState(null);

  useEffect(() => {
    fetch('http://172.16.16.10:8082/api/EditInvoice?LabNo=1&YearId=2425&BranchId=2')
      .then((res) => res.json())
      .then((data) => {
        setInvoiceData(data.invoiceDtls);
      })
      .catch((error) => {
        console.error('Error fetching invoice data:', error);
      });
  }, []);

  if (!invoiceData) {
    return <div>Loading...</div>;
  }

  // Destructure the invoice data object for easier access
  const {
    Inv_No,
    Inv_Date,
    Inv_time,
    Inv_name,
    Inv_Gender,
    Inv_ageYY,
    Inv_ageMM,
    Inv_ageDD,
    Inv_Dob,
    Inv_phno,
    Inv_Mob,
    Inv_Email,
    Inv_Address,
    Inv_Nationality,
    Inv_RefBy,
    Inv_OutDr,
    SmplDate,
    Inv_RepTime,
    Inv_Comment,
    Branch,
    Inv_RepThrPersonal,
    Inv_RepThrCourier,
    Inv_RepThrPhone,
    Inv_RepThrEmail,
    Inv_RepThrSms,
    Inv_CollMode,
    Inv_Ward,
    Inv_SRFno,
    Inv_Passport,
    Inv_Aadhaar
  } = invoiceData;

  return (
    <Box className="edit-invoice-container">
      <Navbar />
      <Typography variant="h4" className="navbar-heading">Edit Invoice</Typography>
      {/* Render your form fields here using the invoice data */}
      <TextField
  id="labNo"
  label="Lab No"
  variant="outlined"
  size="small"
  fullWidth
  value={Inv_No} // Replace with the corresponding field from the invoice data
  // Add any other necessary props and event handlers
/>

    </Box>
  );
}

export default SingleFieldFetch;

