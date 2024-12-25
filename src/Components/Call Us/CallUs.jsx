import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid,
  IconButton,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const CallUs = () => {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: '#EFF8FF',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom sx={{color:'#003B6D'}}>
        Call Us or Fill the Form
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Get in touch with us easily. Whether you have questions, feedback, or inquiries, we’re here to assist you.
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
         Contact our team through the provided methods, and we’ll respond promptly.
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          marginTop: 4,
          alignItems: 'flex-start',
        }}
      >
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'left' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 6 }}>
              <IconButton color="primary">
                <PhoneIcon fontSize="large" />
              </IconButton>
              <Box>
                <Typography variant="h6">+968 1234 5678</Typography>
                <Typography variant="body2">Don’t hesitate to contact us!</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 6 }}>
              <IconButton color="primary">
                <AccessTimeIcon fontSize="large" />
              </IconButton>
              <Box>
                <Typography variant="h6">Working Time</Typography>
                <Typography variant="body2">
                  Mon - Fri: 9:00 - 19:00 / Closed on Weekends
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton color="primary">
                <LocationOnIcon fontSize="large" />
              </IconButton>
              <Box>
                <Typography variant="h6">Company Headquarters</Typography>
                <Typography variant="body2">123 Main Street, Muscat, Oman</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Box
            component="form"
            sx={{
              maxWidth: 600,
              mx: 'auto',
              textAlign: 'left',
            }}
          >
            <RadioGroup row defaultValue="supplier" sx={{ marginBottom: 2 }}>
              <FormControlLabel
                value="supplier"
                control={<Radio />}
                label="I am a Supplier"
              />
              <FormControlLabel
                value="retailer"
                control={<Radio />}
                label="I am a Retailer"
              />
            </RadioGroup>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="First Name"
                  fullWidth
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Last Name"
                  fullWidth
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Email Address"
                  fullWidth
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Phone Number"
                  fullWidth
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Your Message"
                  multiline
                  rows={4}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CallUs;
