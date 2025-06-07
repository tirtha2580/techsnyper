import React, { useState } from "react";
import Header from "../../src/components/navbar/Navbar";
import Footer from "../../src/components/footer/Footer";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Grid,
  Typography,
  Box,
  CardContent,
  Card,
  Breadcrumbs,
  Link,
  Button,
  Container,
  IconButton,
  CardMedia
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MobileMenu from "src/components/mobileMenu/MobileMenu";
import { useMediaQuery } from "@mui/material";
import { useRouter } from 'next/router';


const index = () => {
   const isMobile = useMediaQuery("(max-width:600px)");
   const router = useRouter();
   const cardData = [
    { 
      id: 1, 
      title: 'Automation', 
      description: 'Automation refers to the process of using technology, systems, or machines to perform tasks or processes with minimal human intervention. It is widely applied across various industries to improve efficiency, accuracy, and productivity while reducing costs and repetitive manual efforts.', 
      image: 'automation.jpg',
      link: '/products/automation' 
    },
    { 
      id: 2, 
      title: 'Pressure Measurement', 
      description: 'Pressure Measurement refers to the process of determining the force exerted by a fluid (liquid or gas) on a surface per unit area. It is an essential parameter in various fields, including engineering, healthcare, meteorology, and industrial applications.', 
      image: '/pressure manag.jpg',
      link: '/pressureMeasurement' 
    },
    { 
      id: 3, 
      title: 'Temperature Measurement', 
      description: 'Temperature Measurement refers to the process of determining the temperature of an object or environment, which is a critical parameter in a wide range of applications, from industrial processes to healthcare. Temperature is a measure of the average kinetic energy of particles in a substance, and its accurate measurement is vital for maintaining optimal conditions in many systems.', 
      image: '/temperature.jpg',
      link: '/temperatureMeasurement' 
    },
    { 
      id: 4, 
      title: 'Air Velocity Measurement', 
      description: 'Air Velocity Measurement refers to determining the speed at which air or any other gas moves through a particular space. It is a crucial parameter in various applications such as HVAC (Heating, Ventilation, and Air Conditioning) systems, environmental monitoring, industrial processes, and aerodynamics. Accurately measuring air velocity helps optimize airflow, improve energy efficiency, and ensure safety in many systems.', 
      image: '/air velocity.jpg',
      link: '/airVelocityMeasurement' 
    },
    { 
      id: 5, 
      title: 'Level Measurement', 
      description: 'Automation refers to the process of using technology, systems, or machines to perform tasks or processes with minimal human intervention. It is widely applied across various industries to improve efficiency, accuracy, and productivity while reducing costs and repetitive manual efforts.', 
      image: 'automation.jpg',
      link: '/levelMeasurement' 
    },
    { 
      id: 6, 
      title: 'Pressure Accessories', 
      description: 'Pressure Measurement refers to the process of determining the force exerted by a fluid (liquid or gas) on a surface per unit area. It is an essential parameter in various fields, including engineering, healthcare, meteorology, and industrial applications.', 
      image: '/pressure manag.jpg',
      link: '/pressureAccessories' 
    },
    { 
      id: 7, 
      title: 'Temperature Accessories', 
      description: 'Temperature Measurement refers to the process of determining the temperature of an object or environment, which is a critical parameter in a wide range of applications, from industrial processes to healthcare. Temperature is a measure of the average kinetic energy of particles in a substance, and its accurate measurement is vital for maintaining optimal conditions in many systems.', 
      image: '/temperature.jpg',
      link: '/temperatureAccessories' 
    },
    { 
      id: 8, 
      title: 'Measuring Instruments', 
      description: 'Air Velocity Measurement refers to determining the speed at which air or any other gas moves through a particular space. It is a crucial parameter in various applications such as HVAC (Heating, Ventilation, and Air Conditioning) systems, environmental monitoring, industrial processes, and aerodynamics. Accurately measuring air velocity helps optimize airflow, improve energy efficiency, and ensure safety in many systems.', 
      image: '/air velocity.jpg',
      link: '/measuringInstruments' 
    },
  ];
  
  return (
    <div>
      <Header/>
      <MobileMenu/>

     
       <div
            style={{
              position: "relative", // To position the overlay properly
              backgroundImage: "url(backgroundImg.png)", // Replace with your image path or URL
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              padding: "16px",
              height: isMobile ? "100%" : "60vh", // Full viewport height (adjust as needed)
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black
                zIndex: 1, // Place above background but below content
              }}
            ></div>
    
            {/* Content */}
            <Grid
              container
              spacing={2}
              style={{
                zIndex: 2, // Ensure content is above the overlay
                color: "#fff", // White text for contrast
                padding: "16px",
              }}
            >
              {/* 1st Section - 7 parts */}
              <Grid
                item
                xs={12}
                md={7}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  
                  paddingLeft: isMobile ? "0px" : "100px",
                  marginTop:isMobile? "100px":'0px',
                }}
              >
                <Typography
                  gutterBottom
                  style={{
                    fontWeight: "700",
                    fontSize: isMobile ? "30px" : "60px",
                    fontFamily: "Jost, sans-serif",
                    borderLeft: "9px solid #F8B400",
                    textAlign: isMobile ? "justify" : "justify",
                   
                  }}
                >
                
                  <span style={{ marginLeft: "10px",  }}>Products</span> 
                </Typography>
              </Grid>
    
              <Grid item xs={12} md={1}></Grid>
    
              {/* 2nd Section - 5 parts */}
              <Grid item xs={12} md={4} style={{}}></Grid>
            </Grid>
          </div>
           <div
                  style={{
                    fontFamily: "Jost, sans-serif",
                    padding: 2,
                    color: "#383A3B",
                    height: "70px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    style={{
                      textAlign: "center",
                      fontSize: "34px",
                      fontWeight: "600",
                      marginTop: "40px",
                    }}
                  >
                    <span style={{ borderBottom: "2px solid #F8B400" }}>O</span>ur Products
                  </Typography>
                </div>
    
      <Grid
            container
            sx={{
              mt:4,
              height: "100%",   
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
               <Button variant="contained" disabled style={{fontFamily: "Jost, sans-serif",color:"#4B7BF3",background:'#fff',borderRadius:'20px',border:"1px solid #4B7BF3"}}>
                Products
              </Button>
              <br />
              <Typography variant="h5" gutterBottom style={{fontFamily: "Jost, sans-serif"}}>
              Your Partner in Financial Empowerment
              </Typography>
          
             
            </Grid>
      
            {/* 3rd Section: Blank */}
            
      
            {/* 4th Section: Text */}
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "justify",
              }}
            >
              <Typography variant="body2" style={{fontFamily: "Jost, sans-serif"}}>
              Techsnyper technology private limited we are passionate about transforming how individuals perceive and manage their finances. We believe financial literacy is a key to unlocking personal growth, stability, and success. Our approach blends deep expertise, practical tools, and a focus on mindset evolution, creating well-rounded, confident individuals capable of navigating the complex world of personal finance.
              </Typography>
            </Grid>
            <Grid item xs={12} md={1}></Grid>
          </Grid>
          <br />
      
          <Grid container spacing={3} justifyContent="center" alignItems="center" style={{padding:'20px'}}>
        {cardData.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.id}>
            <Card
              sx={{
                
                position: 'relative',
                overflow: 'hidden',
                height: 300, // Set a fixed height for all cards
                display: 'flex',
                flexDirection: 'column', // Ensure content stretches vertically
                '&:hover .hoverContent': {
                  opacity: 1,
                  transform: 'translateY(0%)',
                },
              }}
            >
              {/* Card Image */}
              <CardMedia
                component="img"
                height="150"
                image={card.image}
                alt={card.title}
              />

              {/* Card Name */}
              <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                <Typography variant="h6" style={{ fontWeight: '600', fontFamily: "Jost, sans-serif", color: "#4A7BEF" }}>
                  {card.title}
                </Typography>
              </CardContent>

              {/* Hover Content */}
              <Box
                className="hoverContent"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: '#fff',
                  display: 'flex',
                  flexDirection:'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  transform: 'translateY(100%)',
                  opacity: 0,
                  transition: 'transform 0.5s ease, opacity 0.5s ease',
                }}
              >
                <Typography style={{ fontSize: '15px', textAlign: 'center', fontFamily: "Jost, sans-serif",padding:'10px', }}>
                  {card.description}
                </Typography>
                <br />
                <Button
  variant="contained"
  onClick={() => router.push(card.link)}
  style={{
    backgroundColor:'transparent',
    border:'1px solid #fff',
    color: "#fff",
    fontFamily: "Jost, sans-serif",
    borderRadius: "10px",
  }}
>
  View More<ArrowForwardIcon/>
  
</Button>
              
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
<br />
<br />
<Footer/>
      
    </div>
  )
}

export default index