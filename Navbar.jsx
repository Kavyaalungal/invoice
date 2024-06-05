import React from 'react';
import { IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// import logo from './logo.png'; // Ensure your logo image is in the correct path

function Navbar() {
  return (
    <Box className="navbar" display="flex" justifyContent="space-between" alignItems="center">
      <img src="" alt="Logo" className="logo" />
      <IconButton color="default" className="close-button">
        <CloseIcon />
      </IconButton>
    </Box>
  );
}

export default Navbar;

