import React from 'react';
import { Box, Typography, TextField, Button, Grid, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#003366',
        color: '#ffffff',
        padding: 4,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <Box sx={{ flex: 1, marginBottom: { xs: 4, md: 0 } }}>
        <Typography variant="h6" gutterBottom>
          Delivered on time with no hassle.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
          <IconButton href="#" color="inherit">
            <InstagramIcon />
          </IconButton>
          <IconButton href="#" color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton href="#" color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton href="#" color="inherit">
            <LinkedInIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" sx={{ marginTop: 4 }}>
          Copyright © 2023 - Assarain Food Products L.L.C. Design & Developed by Codeative
        </Typography>
      </Box>

      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" gutterBottom>
          Keep Up To Date
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            marginTop: 2,
          }}
        >
          <TextField
  label="Email Address"
  variant="outlined"
  size="small"
  InputLabelProps={{
    style: { color: 'white' },
  }}
  InputProps={{
    style: { color: 'white' },
  }}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white', 
      },
      '&:hover fieldset': {
        borderColor: 'white', 
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white', 
      },
    },
    borderRadius: 1,
    flex: 1,
  }}

          />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              backgroundColor: '#007bff',
            }}
          >
            Sign Me Up!
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' },
            gap: 2,
            marginTop: 4,
          }}
        >
          <Link href="#" underline="none" color="inherit">
            Privacy
          </Link>
          <Link href="#" underline="none" color="inherit">
            Terms & Conditions
          </Link>
          <Link href="#" underline="none" color="inherit">
            Site Map
          </Link>
          <Link href="#" underline="none" color="inherit">
            Contact
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
