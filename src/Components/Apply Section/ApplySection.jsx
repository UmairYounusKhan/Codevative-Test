import React from "react";
import { Box, Typography, Button } from "@mui/material";

const ApplySection = () => {
    return (
        <>

            <Box
                sx={{
                    padding: 4,
                    width: '100%',
                    height: '60vh',
                    position: 'relative',
                    backgroundColor: '#EFF8FF'
                }}
            >
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen

                />
            </Box>

            <Box
                sx={{
                    padding: 4,
                    backgroundColor: '#EFF8FF',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Join Our Team
                </Typography>
                <Typography variant="body1" >
                    We offer attractive prospects for fresh graduates as well as for experienced professionals to be part of a fast-growing, progressive
                </Typography>
                <Typography variant="body1" >
                    organization. You will have the opportunity to work with our multinational business partners and gain the opportunity to work with
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    some of the best brands in the world and gain the latest know-how in the FMCG business.
                </Typography>
                <Typography variant="body1" >
                    We are looking to recruit talented individuals to join our workforce. If you are highly motivated, goal-oriented and thrive on challenges,
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    do get in touch with us.
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#003B6D',
                        padding: '12px 24px',
                        fontSize: '16px',
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#0056b3',
                        },
                    }}
                >
                    Apply Now
                </Button>

            </Box>
        </>
    );
};

export default ApplySection;
