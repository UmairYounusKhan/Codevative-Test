import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import assasarinfood from '../../Images/assasarin ffod.png'

const AboutUs = () => {
  return (
    <>
      <Box sx={{ p: 4 }}>
      <Typography 
          variant="h4" 
          gutterBottom 
          align="center"
          sx={{
            color: '003B6D',
            textDecoration: 'underline', 
            textDecorationColor: '#ADD8E6',
          }}
        >
          About Us
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, px: 4 }}>
          In acknowledgement of the basic premise that good food leads to good health and well-being, Assarain Food Products LLC, occupies a place of pride among the market leaders in the Omani industry of Fast Moving Consumer Goods (FMCG), founded on a reputation built over four decades of excellence in food products and operations. Setting high benchmarks for other local competitors, we are the first FMCG sales and distribution company to acquire ISO 22000:2005 Certification for Food Safety Management Systems within the Sultanate.
        </Typography>
        <Grid container spacing={4}>
          {[
            { title: "200+", subtitle: "Global Brands", subsubtitle: "We use a hub and spoke distribution platform covering Oman with our Head Office and main stores located in Muscat" },
            { title: "20", subtitle: "Warehouses", subsubtitle: "We use a hub and spoke distribution platform covering Oman with our Head Office and main stores located in Muscat" },
            { title: "85,000+", subtitle: "Pallet Capacity", subsubtitle: "We use a hub and spoke distribution platform covering Oman with our Head Office and main stores located in Muscat" },
            { title: "300+", subtitle: "Own Vehicles", subsubtitle: "We use a hub and spoke distribution platform covering Oman with our Head Office and main stores located in Muscat" },
            { title: "1000+", subtitle: "Skilled Employees", subsubtitle: "We use a hub and spoke distribution platform covering Oman with our Head Office and main stores located in Muscat" },
            { title: "Omni", subtitle: "Channel Coverage", subsubtitle: "We use a hub and spoke distribution platform covering Oman with our Head Office and main stores located in Muscat" },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  p: 3,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  position: "relative", 
                }}
              >
                  <Typography
                  variant="h2"
                  
                  sx={{ fontFamily: 'Arial, sans-serif', color: '#ADD8E6' }} 
                >
                  {item.title}
                </Typography>

                
                <Typography gutterBottom  variant="h3" sx={{fontFamily: 'Arial, sans-serif', fontSize: '1.5rem', color: '#003B6D'}}>
                  {item.subtitle}
                </Typography>

               
                <Typography variant="body2" sx={{ fontSize: '1rem' }}>
                  {item.subsubtitle}
                </Typography>

               
                {index % 3 !== 3 && <Divider sx={{ my: 2 }} />}

               
                {index % 3 !== 2 && (
                  <Box
                    sx={{
                      position: "absolute",
                      right: 0,
                      top: 0,
                      height: "100%",
                      width: "1px",
                      bgcolor: "divider",
                    }}
                  />
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ p: 4, bgcolor: "#003B6D", color: 'white' }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: 'white' }}>
          Assarain Food Products L.L.C.
        </Typography>
        <Typography variant="body1" align="center">
          “Food, in the end, in our own tradition, is something holy. It's not about nutrients and calories. It's about sharing. It's about honesty. It's about identity.”
        </Typography>
        <Typography variant="body1" align="center"> It's about sharing. It's about honesty. It's about identity.”
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, color: 'blue' }}>
          Louise Fresco
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{mb:3}}>
              Our commitment to maintaining high standards, delivering superior quality food products and services and the unwavering trust placed in us by our ever-increasing loyal customer base reflects our desire and effort to provide only the best in handling, storage, logistics and distribution of a wide range of premium food products. Since our inception in 1975, we have grown from strength to strength through diversification of our operations, new brand acquisition, and participation of major tenders.
            </Typography>
            <Typography variant="body1">

              At Assarain Food Products, we are importers, distributors and suppliers of a wide variety of food products and our portfolio includes frozen food products, poultry, meat, French fries, further processed products, etc. We have an established presence as a market leader, offering a unique basket of products both suitable for B2B (business to business) and B2C (business to consumer) in the food and consumer products market. We have the unique advantage of providing a full range of branded and commodity products that are suitable to our customers and this is what makes us stand apart from our competitors, who focus only on certain product categories.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={assasarinfood}
              alt="Assarain"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AboutUs;
