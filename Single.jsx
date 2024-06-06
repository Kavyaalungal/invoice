import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Box, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import Navbar from './Navbar';

function Single() {
  const [labNo, setLabNo] = useState('');
  const [branchId, setBranchId] = useState('');
  const [yearId, setYearId] = useState('');
  const [invoiceData, setInvoiceData] = useState(null);
  const [error, setError] = useState(null);

  const [dateTime, setDateTime] = useState('');
  const [prefix, setPrefix] = useState('');
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [email, setEmail] = useState('');
  const [nationality, setNationality] = useState('');
  const [address, setAddress] = useState('');
  const [refBy, setRefBy] = useState('');
  const [outDr, setOutDr] = useState('');
  const [passport, setPassport] = useState('');
  const [srfNo, setSrfNo] = useState('');
  const [branch, setBranch] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [wardNo, setWardNo] = useState('');
  const [ipOpNo, setIpOpNo] = useState('');
  const [collMode, setCollMode] = useState('');
  const [collBy, setCollBy] = useState('');
  const [sampleOn, setSampleOn] = useState('');
  const [reportOn, setReportOn] = useState('');
  const [reportRequestedThrough, setReportRequestedThrough] = useState({
    personally: false,
    whatsapp: false,
    courier: false,
    email: false,
    sms: false,
    telephone: false,
  });
  const [field, setField] = useState('');
  const [report, setReport] = useState({ urgentwork: false });
  const [notes, setNotes] = useState('');

  const fetchData = async () => {
    try {
      console.log('Fetching data with params:', { labNo, yearId, branchId });
      const response = await axios.get(`http://172.16.16.10:8082/api/EditInvoice`, {
        params: {
          LabNo: labNo,
          YearId: yearId,
          BranchId: branchId,
        },
      });
      setInvoiceData(response.data.invoiceDtls);
      console.log('Invoice Data:', response.data.invoiceDtls);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    }
  };

  const handleCheckboxChange = (event) => {
    setReportRequestedThrough({
      ...reportRequestedThrough,
      [event.target.name]: event.target.checked,
    });
  };

  const handleCheckChange = (event) => {
    setReport({
      ...report,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box className="edit-invoice-container">
      <Navbar />
      <Box className="navbar">
        <Typography variant="h4" className="navbar-heading">Edit Invoice</Typography>
        <Box className="navbar-buttons">
          <Button variant="contained" color="primary" className="navbar-button">NEW</Button>
          <Button variant="contained" color="secondary" className="navbar-button">SAVE</Button>
          <Button variant="contained" color="default" className="navbar-button">EXIT</Button>
        </Box>
      </Box>
      <Box className="fieldset">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
            <TextField
              id="labNo"
              label="Lab No"
              variant="outlined"
              size="small"
              fullWidth
              value={labNo}
              onChange={(e) => setLabNo(e.target.value)}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="branchId"
              label="Branch Id"
              variant="outlined"
              size="small"
              fullWidth
              value={branchId}
              onChange={(e) => setBranchId(e.target.value)}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="yearId"
              label="Year Id"
              variant="outlined"
              size="small"
              fullWidth
              value={yearId}
              onChange={(e) => setYearId(e.target.value)}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary" onClick={fetchData}>
              Fetch Data
            </Button>
          </Grid>
        </Grid>
      </Box>
      {error && <Typography variant="body2" color="error">{error}</Typography>}
      {invoiceData && (
        <Box className="fieldset">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={6}>
              <TextField
                id="labNo"
                label="Lab No"
                variant="outlined"
                size="small"
                fullWidth
                value={labNo}
                onChange={(e) => setLabNo(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
  <FormControl variant="outlined" size="small" fullWidth>
    <InputLabel id="dateTimeLabel">Date/Time</InputLabel>
    <Select
      labelId="dateTimeLabel"
      id="dateTime"
      value={`${invoiceData.Inv_Date} ${invoiceData.Inv_time}` || ''}
      onChange={(e) => setDateTime(e.target.value)}
      label="Date/Time"
    >
      <MenuItem value=""><em>None</em></MenuItem>
      <MenuItem value={`${invoiceData.Inv_Date} ${invoiceData.Inv_time}`}>
        {`${invoiceData.Inv_Date} ${invoiceData.Inv_time}`}
      </MenuItem>
    </Select>
  </FormControl>
</Grid>

          </Grid>
        </Box>
      )}
      {invoiceData && (
        <Box className="fieldset">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={2}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel id="prefixLabel">Prefix</InputLabel>
                <Select
                  labelId="prefixLabel"
                  id="prefix"
                  value={invoiceData.Inv_Tittle || ''}
                  onChange={(e) => setPrefix(e.target.value)}
                  label="Prefix"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value={`${invoiceData.Inv_Tittle}`}>
        {`${invoiceData.Inv_Tittle}`}
      </MenuItem>
                  
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                size="small"
                fullWidth
                value={invoiceData.Inv_name || ''}
                onChange={(e) => setName(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={1}>
    <Typography variant="body1" gutterBottom>
      Age
    </Typography>
  </Grid>
  <Grid item container xs={12} sm={7} spacing={1}>
    <Grid item xs={3}>
      <TextField
        id="dd"
        label="Day"
        variant="outlined"
        size="small"
        fullWidth
        value={invoiceData.Inv_ageDD || ''}
        onChange={(e) => setDay(e.target.value)}
        InputLabelProps={{ style: { fontSize: '14px' } }}
      />
    </Grid>
    <Grid item xs={3}>
      <TextField
        id="mm"
        label="Month"
        variant="outlined"
        size="small"
        fullWidth
        value={invoiceData.Inv_ageMM || ''}
        onChange={(e) => setMonth(e.target.value)}
        InputLabelProps={{ style: { fontSize: '14px' } }}
      />
    </Grid>
    <Grid item xs={3}>
      <TextField
        id="yyyy"
        label="Year"
        variant="outlined"
        size="small"
        fullWidth
        value={invoiceData.Inv_ageYY || ''}
        onChange={(e) => setYear(e.target.value)}
        InputLabelProps={{ style: { fontSize: '14px' } }}
      />
    </Grid>
    <Grid item xs={12} sm={3}>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel id="genderLabel">Gender</InputLabel>
              <Select
                labelId="genderLabel"
                id="gender"
                value={invoiceData.Inv_Gender || ''}
                
                onChange={(e) => setGender(e.target.value)}
                label="Gender"
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={`${invoiceData.Inv_Gender}`}>
        {`${invoiceData.Inv_Gender}`}</MenuItem>
              </Select>
            </FormControl>
          
          </Grid>
         
  </Grid>
  <Grid item xs={12} sm={4}>
            <TextField
              id="dob"
              label="Date of Birth"
              type="date"
              variant="outlined"
              size="small"
              fullWidth
              value={invoiceData.Inv_Dob || ''}
              onChange={(e) => setDob(e.target.value)}
              InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="phone1"
              label="Phone Number 1"
              variant="outlined"
              size="small"
              fullWidth
              value={invoiceData.Inv_phno || ''}
              onChange={(e) => setPhone1(e.target.value)}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="phone2"
              label="Phone Number 2"
              variant="outlined"
              size="small"
              fullWidth
              value={invoiceData.Inv_Mob || ''}
              onChange={(e) => setPhone2(e.target.value)}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
              value={invoiceData.Inv_Email || ''}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="nationality"
              label="Nationality"
              variant="outlined"
              size="small"
              fullWidth
              value={invoiceData.Inv_Nationality || ''}
              onChange={(e) => setNationality(e.target.value)}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="address"
              label="Address"
              variant="outlined"
              size="small"
              fullWidth
              value={invoiceData.Inv_Address|| ''}
              onChange={(e) => setAddress(e.target.value)}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          </Grid>
        </Box>
      )}
      {invoiceData && (
          <Box className="fieldset">
          <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
              <TextField
                id="refby"
                label="Ref by"
                variant="outlined"
                size="small"
                fullWidth
                value={invoiceData.Inv_RefBy || ''}
                onChange={(e) => setRefBy(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outdr"
                label="Out Dr"
                variant="outlined"
                size="small"
                fullWidth
                value={invoiceData.Inv_OutDr || ''}
                onChange={(e) => setOutDr(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="passport"
                label="Passport"
                variant="outlined"
                size="small"
                fullWidth
                value={invoiceData.Inv_Passport || ''}
                onChange={(e) => setPassport(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="srfno"
                label="SRF No."
                variant="outlined"
                size="small"
                fullWidth
                value={invoiceData.Inv_SRFno || ''}
                onChange={(e) => setSrfNo(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="branch"
                label="Branch"
                variant="outlined"
                size="small"
                fullWidth
                value={invoiceData.Branch || ''}
                onChange={(e) => setBranch(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="aadhar"
                label="Aadhar"
                variant="outlined"
                size="small"
                fullWidth
                value={invoiceData.Inv_Aadhaar || ''}
                onChange={(e) => setAadhar(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="wardno"
                label="Ward No"
                variant="outlined"
                size="small"
                fullWidth
                value={invoiceData.Inv_WardId || ''}
                onChange={(e) => setWardNo(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="ipopno"
                label="IP/OP NO"
                variant="outlined"
                size="small"
                fullWidth
                value={invoiceData.Inv_RsltNO || ''}
                onChange={(e) => setIpOpNo(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="collmode"
                label="Coll Mode."
                variant="outlined"
                size="small"
                fullWidth
                value={invoiceData.Inv_CollMode || ''}
                onChange={(e) => setCollMode(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="collby"
                label="Coll By."
                variant="outlined"
                size="small"
                fullWidth
                value={invoiceData.Inv_CollBy || ''}
                onChange={(e) => setCollBy(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            
          </Grid>
        </Box>
      )}
      {invoiceData && (
      <Box className="fieldset">
      <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel id="dateTimeLabel">Sample On</InputLabel>
            <Select
              labelId="sampleon"
              id="sampleon"
              value={invoiceData.SmplDate|| ''}
        onChange={(e) => setSampleOn(e.target.value)}
              label="Sample On"
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={`${invoiceData.SmplDate}`}>
        {`${invoiceData.SmplDate}`}
      </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel id="dateTimeLabel">Report On</InputLabel>
            <Select
              labelId="reporton"
              id="reporton"
              value={invoiceData.RepTime|| ''}
        onChange={(e) => setReportOn(e.target.value)}
              label="Report On"
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={`${invoiceData.RepTime}`}>
        {`${invoiceData.RepTime}`}
      </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
  <FormControl component="fieldset" fullWidth>
    <Typography variant="body1" gutterBottom>Report Requested Through</Typography>
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={invoiceData.Inv_RepThrPersonal} onChange={handleCheckboxChange} name="personally" />}
        label="Personally"
      />
      <FormControlLabel
        control={<Checkbox checked={invoiceData.Inv_RepThrCourier} onChange={handleCheckboxChange} name="courier" />}
        label="Courier"
      />
      <FormControlLabel
        control={<Checkbox checked={invoiceData.Inv_RepThrPhone} onChange={handleCheckboxChange} name="phone" />}
        label="Phone"
      />
      <FormControlLabel
        control={<Checkbox checked={invoiceData.Inv_RepThrEmail} onChange={handleCheckboxChange} name="email" />}
        label="Email"
      />
      <FormControlLabel
        control={<Checkbox checked={invoiceData.Inv_RepThrSms} onChange={handleCheckboxChange} name="sms" />}
        label="SMS"
      />
      <FormControlLabel
        control={<Checkbox checked={invoiceData.Inv_RepThrTelephone} onChange={handleCheckboxChange} name="telephone" />}
        label="Telephone"
      />
    </FormGroup>
  </FormControl>
</Grid>

      
      </Grid>
    </Box>
      )}
      {invoiceData && (
          <Box className="fieldset">
          <Grid container spacing={3} alignItems="center">
         
          
            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <FormGroup row>
                 <FormControlLabel
                    control={<Checkbox checked={report.urgentwork} onChange={handleCheckChange} name="urgentwork" />}
                    label="Urgent Report"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="notes"
                label="Notes"
                variant="outlined"
                size="small"
                fullWidth
                value={invoiceData.Inv_Comment|| ''}
                onChange={(e) => setNotes(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
         
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Single;
