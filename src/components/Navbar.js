import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '90px', xs: '20px' }, mt: { sm: '32px', xs: '10px' }, justifyContent: 'none',fontSize:{lg:'18px',sm:'6px'} }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="30px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"

      sx={{
        fontSize:{lg:"24px",md:"21px",xs:"18px"}
      }}
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>

      <Link to="/BMICalculator" style={{ textDecoration: 'none', color: '#3A1212' }}>Fitness Test</Link>
    </Stack>
  </Stack>
);

export default Navbar;
