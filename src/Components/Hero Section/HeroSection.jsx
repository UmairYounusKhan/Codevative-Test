import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "./HeroSection.css";
import BgImage from '../../Images/about img.jpg'

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage:`url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "2rem",
      }}
    >
      
      <Box
        sx={{
            width:'700px',
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
      >
        
        <Box
          sx={{
            padding: "1.5rem",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold"}}
          >
            Oman Best Food Distributor
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Natural, Organic, Specialty,
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
           and Fresh.
          </Typography>
          <Button variant="contained" color="primary">
            Request a Quote
          </Button>
        </Box>

     
        <Box className="custom-box" sx={{ padding: "1.5rem", textAlign: "center",  }}>
        <Button variant="outlined" color="primary" sx={{marginBottom:3}}>
            Play Video ▶
          </Button>
          <Typography
            variant="h6"
            color="white"
          >
            Video of a Warehouse
          </Typography>
          <Typography
            variant="h6"
            color="white"
          >
             how our distribution
          </Typography>
          <Typography
            variant="h6"
            color="white"
          >
             process works...
          </Typography>
         
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
