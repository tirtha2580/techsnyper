import React, { useState } from 'react';
import { Tabs, Tab, Box, Grid, Card, CardMedia } from '@mui/material';

const EquipmentTabs = () => {
  const [mainTab, setMainTab] = useState(0); // Main tab index
  const [subTab, setSubTab] = useState(0); // Sub tab index

  const mainTabs = [
    "Pressure Measurement",
    "Temperature Measurement",
    "Level Measurement",
    "Pressure Accessories",
    "Temperature Accessories",
    "Automation",
    "Measuring Instruments",
    "Air Velocity Measurement"
  ];

  const subTopics = {
    "Pressure Measurement": [
      {
        images: [
          { src: "/Pressure mng/img1.jpg" },
          { src: "/Pressure mng/img3.jpg" },
          { src: "/Pressure mng/img5.jpg" },
          { src: "/Pressure mng/img6.jpg" },
          { src: "/Pressure mng/img8.jpg" },
          { src: "/Pressure mng/img9.jpg" },
        ],
      },
    ],
    "Temperature Measurement": [
      {
        images: [
          { src: "/temperature mng/img2.jpg" },
          { src: "/temperature mng/img8.jpg" },
          { src: "/temperature mng/img4.jpg" },
          { src: "/temperature mng/img5.jpg" },
          { src: "/temperature mng/img6.jpg" },
          { src: "/temperature mng/img7.jpg" },
        ],
      },
    ],
    "Level Measurement": [
      {
        images: [
          { src: "/level/img1.jpeg" },
          { src: "/level/img2.webp" },
          { src: "/level/img3.jpg" },
          { src: "/level/img4.webp" },
          { src: "/level/img5.jpg" },
          { src: "/level/img6.webp" },
        ],
      },
    ],
    "Pressure Accessories": [
      {
        images: [
          { src: "/Pressure Acce/img1.jpg" },
          { src: "/Pressure Acce/img2.jpeg" },
          { src: "/Pressure Acce/img4.avif" },
          { src: "/Pressure Acce/img5.jpg" },
          { src: "/Pressure Acce/img6.jpg" },
          { src: "/Pressure Acce/img7.webp" },
        ],
      },
    ],
    "Temperature Accessories": [
      {
        images: [
          { src: "/temperature acce/img1.jpg" },
          { src: "/temperature acce/img2.jpg" },
          { src: "/temperature acce/img3.jpg" },
          { src: "/temperature acce/img4.jpg" },
          { src: "/temperature acce/img5.jpg" },
          { src: "/temperature acce/img7.jpg" },
        ],
      },
    ],
    "Automation": [
      {
        images: [
          { src: "/automation/img1.jpg" },
          { src: "/automation/img2.jpg" },
          { src: "/automation/img3.webp" },
          { src: "/automation/img4.jpg" },
          { src: "/automation/img6.jpg" },
          { src: "/automation/img5.jpg" },
        ],
      },
    ],
    "Measuring Instruments": [
      {
        images: [
          { src: "/Measureing instruments/DIGITAL.jpg" },
          { src: "/Measureing instruments/img1.jpg" },
          { src: "/Measureing instruments/img2.jpg" },
          { src: "/Measureing instruments/img3.jpg" },
          { src: "/Measureing instruments/img4.jpg" },
          { src: "/Measureing instruments/img5.jpg" },
        ],
      },
    ],
    "Air Velocity Measurement": [
      {
        images: [
          { src: "/airvelocity/img1.jpg" },
          { src: "/airvelocity/img2.jpg" },
          { src: "/airvelocity/img3.jpg" },
          { src: "/airvelocity/img9.jpg" },
          { src: "/airvelocity/img5.jpg" },
          { src: "/airvelocity/img10.jpg" },
        ],
      },
    ],
    // Repeat similar structure for other main tabs
  };

  const handleMainTabChange = (event, newValue) => {
    setMainTab(newValue);
    setSubTab(0); // Reset sub tab to first when switching main tab
  };

  const handleSubTabChange = (event, newValue) => {
    setSubTab(newValue);
  };

  return (
    <Box sx={{ width: '100%', padding: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Tabs
          value={mainTab}
          onChange={handleMainTabChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="Main Equipment Tabs"
          sx={{
            marginBottom: 3,
            '& .MuiTab-root': {
              fontFamily: 'Jost, sans-serif',
              textTransform: 'none',
              fontWeight: 600,
            },
            '& .Mui-selected': {
              color: '#F2781D',
            },
          }}
        >
          {mainTabs.map((tab, index) => (
            <Tab key={index} label={tab} />
          ))}
        </Tabs>
      </Box>

      {/* Subtopics Tabs (For Active Main Tab) */}
      <Box>
        <Tabs
          value={subTab}
          onChange={handleSubTabChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="Subtopics Tabs"
          sx={{
            marginBottom: 2,
            '& .MuiTab-root': {
              fontFamily: 'Jost, sans-serif',
              textTransform: 'none',
              fontWeight: 500,
            },
            '& .Mui-selected': {
              color: '#F2781D',
            },
          }}
        >
         
        </Tabs>
      </Box>

      {/* Subtopic Content */}
      <Box sx={{ textAlign: 'center', marginTop: 2 }}>
        <Grid container spacing={4} justifyContent="center">
          {(subTopics[mainTabs[mainTab]] || [])[subTab]?.images.slice(0, 6).map((image, idx) => (
            <Grid item xs={12} sm={4} key={idx}>
             <Card
  sx={{
    overflow: 'hidden',
    filter: 'grayscale(100%)',
    transition: 'box-shadow 0.5s ease-out',
    '&:hover': {
      boxShadow: 6,
      transform: 'scale(1.1)',
      filter: 'grayscale(0)',
    },
  }}
>
  <CardMedia
    component="img"
    height="250"
    image={image.src}
    alt={`Image ${idx + 1}`}
    sx={{
      objectFit: 'fill',
      height: '250px',
      width: '100%',
      transition: 'transform 0.5s ease-in-out', // Smooth transition for zoom effect
      '&:hover': {
        transform: 'scale(1.1)', // Zoom effect
      },
    }}
  />
</Card>

            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default EquipmentTabs;
