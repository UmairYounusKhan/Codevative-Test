import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

// Import all images manually
import logo1 from "../../Images/1.png";
import logo2 from "../../Images/2.png";
import logo3 from "../../Images/3.png";
import logo4 from "../../Images/4.png";
import logo5 from "../../Images/5.png";
import logo6 from "../../Images/6.png";
import logo7 from "../../Images/7.png";
import logo8 from "../../Images/8.png";
import logo9 from "../../Images/9.png";
import logo10 from "../../Images/10.png";
import logo11 from "../../Images/11.png";
import logo12 from "../../Images/12.png";
import logo13 from "../../Images/13.png";
// 
import wegive from '../../Images/we give.jpg'

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
];


const brandNames = [
  "Freshly Foods",
  "Wattie's",
  "Lutosa",
  "Happy Cow",
  "Sutas",
  "Fonterra",
  "Unilever",
  "Leprino Foods",
  "Gourmet Foods",
  "Campagna",
  "Minstrel",
  "Maestro Foods",
  "Olam",
];


const brands = brandNames.map((name, index) => ({
  name,
  logo: logos[index],
}));

const OurBrands = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", py: 5, backgroundColor: "#EFF8FF", px: 3 }}>
   
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Our Brands
        </Typography>
        <Typography variant="body1" sx={{ px: 2 }}>
  Our way forward strategy is to work with more international brands and leverage our sales expertise and marketing skills in the
</Typography>
<Typography variant="body1" sx={{ px: 2 }}>
   market for the  development of the brand & gain market share. Below are some of our brand partners in the Retail &
</Typography>
<Typography variant="body1" sx={{ mb: 4, px: 2 }}>
  Foodservices sectors.
</Typography>


       
        <Grid container spacing={0}>
          {brands.map((brand, index) => (
            <Grid
              item
              xs={6}
              sm={4} 
              md={2.4} 
              key={index}
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "250px",
                  border: "1px solid lightblue",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={brand.logo}
                  alt={brand.name}
                  sx={{
                    maxWidth: "80%",
                    maxHeight: "80%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

    
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row', backgroundColor:'#003B6D' }, alignItems: 'center', justifyContent: 'space-between', p: 2 }}>

  <Box sx={{ flex: 1, p: 2, textAlign: { xs: 'center', md: 'left' }, backgroundColor:'#003B6D', color:'white'}}>
    <Typography variant="h4" gutterBottom>
      We Give You Complete Control Of Your Distribution.
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            p: 3,
            textAlign: "center",
            borderRight: { md: '2px solid #ccc', xs: 'none' },
          }}
        >
          <Typography variant="h6" gutterBottom>
            Warehouse Solutions
          </Typography>
          <Typography>
            We offer end-to-end distribution services to make sure that your products are safely stored and delivered.
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }}>
            Read More
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box
          sx={{
            p: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Logistics Solutions
          </Typography>
          <Typography>
            Our logistics solutions ensure smooth delivery to your customers, with full control over the process.
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }}>
            Read More
          </Button>
        </Box>
      </Grid>
    </Grid>
  </Box>

 
  <Box sx={{ flex: 1, mt: { xs: 2, md: 0 } }}>
    <img
      src={wegive}
      alt="Distribution"
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
  </Box>
</Box>



    </>
  );
};

export default OurBrands;
