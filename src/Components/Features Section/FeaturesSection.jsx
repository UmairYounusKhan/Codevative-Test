import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";
import Card1 from '../../Images/card1.png';
import Card2 from '../../Images/card2.png';
import Card3 from '../../Images/card3.png';

const FeaturesSection = () => {
  const features = [
    {
      title: "Insights",
      description: "The Art of Sourcing: How We Find the Freshest Ingredients for You",
      date: "September 20, 2023",
      image: Card1,
    },
    {
      title: "Insights",
      description: "Food Safety Matters: Our Rigorous Standards for Quality Assurance",
      date: "September 20, 2023",
      image: Card2,
    },
    {
      title: "Insights",
      description: "Healthy Eating Made Easy: Tips for a Balanced Diet with Our Products",
      date: "September 20, 2024",
      image: Card3,
    },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#003B6D' }}>
          Featured Assarain News
        </Typography>
        <Typography variant="body1">
          We offer attractive prospects for fresh graduates as well as for experienced professionals to be part of a fast-growing, progressive
        </Typography>
        <Typography variant="body1">
          organization. You will have the opportunity to work with our multinational business partners and gain the opportunity to work with
        </Typography>
        <Typography variant="body1">
          some of the best brands in the world and gain the latest know-how in the FMCG business.
        </Typography>
      </Box>

      {/* Second Box - Three Cards */}
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
              <CardMedia
                component="img"
                height="200"
                image={feature.image}  
                alt={feature.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: 'lightblue' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: '#003B6D', fontSize: '1rem', fontWeight: 'bold' }}>
                  {feature.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Date: {feature.date}
                </Typography>
                <Button size="small" color="primary">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
