import React, { useState } from 'react';
import { Box, Typography, Button, Rating } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { isMobile } from 'react-device-detect';

// Sample texts for the slider
const texts = [
  'Welcome to our site!',
  'Explore our amazing products!',
  'Explore the Future of Electrical Innovation!',
  'Get the Best Solutions for Your Electrical Needs Today!',
];

const App = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Function to handle next text
  const handleNext = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  // Function to handle previous text
  const handlePrev = () => {
    setCurrentTextIndex(
      (prevIndex) => (prevIndex - 1 + texts.length) % texts.length
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 2,
        minHeight: '60vh',
      }}
    >
      {/* Heading */}
      <Typography variant="h3" sx={{ fontWeight: 'bold', fontFamily: "Jost, sans-serif", color: '#4A7BEF' }}>
      Testimonials
      </Typography>

      {/* Text Slider with Arrows */}
      <Box sx={{ 
        width: '60%', 
        height: '100px', 
        margin: '20px 0',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'relative'
      }}>
        {/* Previous Button */}
        <Button 
          variant="outlined" 
          onClick={handlePrev} 
          sx={{
           
            position: 'absolute', 
            left: 0, 
            zIndex: 1, 
            top:isMobile?"70px":"0",
            
            fontWeight: 'bold',
            borderRadius:'50%',padding:'20px',
            fontSize: isMobile ? '10px' : '16px', 
            // marginTop:isMobile?'230px':'0px',
          }}
        >
            <ArrowBackIosIcon style={{fontSize:isMobile?"small" : "default"}} />
        </Button>
       

        {/* Centered Text */}
        <Typography 
          variant="h5" 
          sx={{ 
            fontFamily: "Jost, sans-serif", 
            fontWeight: '600', 
            fontSize:isMobile?'15px':'26px', 
            color: '#333', 
            textAlign: 'center'
          }}
        >
          {texts[currentTextIndex]}
        </Typography>

        {/* Next Button */}
        <Button 
  variant="outlined" 
  onClick={handleNext} 
  sx={{
    position: 'absolute', 
    right: "0px", 
    zIndex: 1, 
    top: isMobile ? "70px" : "0",
    fontWeight: 'bold',
    padding: '20px', // Reduced padding
    fontSize: isMobile ? '10px' : '16px', // Adjusted font size
    borderRadius: '60%', // Optional refinement
  }}
>
  <ArrowForwardIosIcon style={{fontSize:isMobile?"small" : "default"}} /> {/* Adjust icon size */}
</Button>

      </Box>

      {/* Ratings Section */}
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <Box sx={{ textAlign: 'center',marginTop:isMobile?'70px':'0px' }}>
          <Typography variant="h5" sx={{ fontWeight: '600', fontFamily: "Jost, sans-serif", color:"grey" }}>
            Our Rating
          </Typography>
          <Rating name="read-only" value={5} readOnly size="large" />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
