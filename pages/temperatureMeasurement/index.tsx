import React, { useState } from "react";
import Header from "../../src/components/navbar/Navbar";
import Footer from "../../src/components/footer/Footer";
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
  Divider,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MobileMenu from "src/components/mobileMenu/MobileMenu";
import { useMediaQuery } from "@mui/material";

const index = () => {
    const isMobile = useMediaQuery("(max-width:600px)");
    
  return (
    <div>
      <Header/>
      <MobileMenu/>
    <div
           style={{
             position: "relative", 
             backgroundImage: "url(backgroundImg.png)", 
             backgroundPosition: "center",
             backgroundRepeat: "no-repeat",
             padding: "16px",
             height: isMobile ? "100%" : "60vh", 
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
                 marginTop: "20px",
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
                   marginTop:isMobile? "90px":'0px'
                   
                 }}
               >
                 <span style={{ marginLeft: "10px" }}>Temperature Measurement</span> 
               </Typography>
             </Grid>
   
             <Grid item xs={12} md={1}></Grid>
   
             {/* 2nd Section - 5 parts */}
             <Grid item xs={12} md={4} style={{}}></Grid>
           </Grid>
         </div>
         <br />
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
               marginTop: "0px",
             }}
           >
             <span style={{ borderBottom: "2px solid #F8B400" }}>T</span>emperature Measurement
           </Typography>
         </div>
         <br />
         
    {/* <Box 
      sx={{ 
       
        width: '600px', 
        margin: 'auto',
      }}
    >
      <Box
        component="img"
        src="SmartLine.png"
        alt="Placeholder"
        sx={{
          display: 'block',
          width: '100%',
          height: 'auto',
          borderRadius:'10px'
        }}
      />
      <br />
      <Typography
        sx={{
         
          top: '50%',
          left: '50%',
         
          color: '#000',
          fontSize: '20px',
          fontWeight: '500',
        
          textAlign:"center",
          fontFamily: "Jost, sans-serif",
        }}
      >
      A Temperature sensor converts a temperature reading into an electrical signal sent directly to a display or to a remote control location by a transmitter. A resistance thermometer operates on the principle that the electrical resistance in a metal wire changes based on the temperature.


      </Typography>
    </Box> */}
    <Grid container style={{padding:'0px'}}>
          <Grid item xs={12} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
          <img 
              src="SmartLine.png"
              alt="Placeholder" 
              style={{  width:isMobile?"350px": 'auto',
                height:isMobile? '250px':'400px',
                borderRadius:'10px' }} 
            />
          </Grid>
        
          
          <Grid container spacing={2} style={{marginTop:'20px'}}>
            <Grid item xs={12}md={2}></Grid>
          <Grid item xs={12} md={8} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Typography style={{fontSize:'16px,',color:'#000',textAlign:'center',fontFamily: "Jost, sans-serif",}}>  A Temperature sensor converts a temperature reading into an electrical signal sent directly to a display or to a remote control location by a transmitter. A resistance thermometer operates on the principle that the electrical resistance in a metal wire changes based on the temperature.</Typography>
          </Grid>
          <Grid item xs={12}md={2}></Grid>
          </Grid>
         
        </Grid>


         <Grid container spacing={4} style={{marginTop:'30px',background:'#F1F1EE'}}>

      {/* First Grid - Blank */}
      <Grid item xs={12} md={1} />
      {/* Fourth Grid - Blank */}
      <Grid item xs={12} md={1} />
    </Grid>
    <Grid container spacing={4} style={{marginTop:'0px',background:'#F1F1EE',padding:'15px'}}>

{/* First Grid - Blank */}
<Grid item xs={12} md={1}/>

<Grid item xs={12} md={5} style={{marginTop:'50px'}}>
  <Typography  gutterBottom style={{fontFamily: "Jost, sans-serif",fontSize:'24px',fontWeight:'600',}}>
  Temperature Transmitters
  </Typography>
  <Typography style={{fontFamily: "Jost, sans-serif",fontSize:'16px'}}>
  SmartLine Temperature Transmitters deliver value with industry-leading performance, unique features that lower users total cost of ownership and the most efficient control system integration.
Available with HART, PROFIBUS AND FOUNDATION FIELDBUS communication.

  </Typography>
</Grid>
<Grid item xs={12} md={5}>
  <img
    src="/temperatreRTd.jpg"
    alt="Placeholder"
    style={{ width: "100%", height: "400px",borderRadius:'20px', }}
  />
  <br />
  <br />
  <br />
  <br />
</Grid>

{/* Third Grid - Text Heading and Texts */}


{/* Fourth Grid - Blank */}
<Grid item xs={12} md={1} />
</Grid>
<Grid container spacing={4} style={{background:'#F1F1EE'}}>
</Grid>

<br /><br />
<Grid container style={{padding:'20px'}}>
          <Grid item xs={12} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
          <img 
              src="thermo.avif"
              alt="Placeholder" 
              style={{  width:isMobile?"350px": 'auto',
                height:isMobile? '250px':'400px',
                borderRadius:'10px' }} 
            />
          </Grid>
        
          
          <Grid container spacing={2} style={{marginTop:'20px'}}>
            <Grid item xs={12}md={2}></Grid>
          <Grid item xs={12} md={8} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Typography style={{fontSize:'16px,',color:'#000',textAlign:'center',fontFamily: "Jost, sans-serif",}}>  A Temperature sensor converts a temperature reading into an electrical signal sent directly to a display or to a remote control location by a transmitter. A resistance thermometer operates on the principle that the electrical resistance in a metal wire changes based on the temperature.</Typography>
          </Grid>
          <Grid item xs={12}md={2}></Grid>
          </Grid>
         
        </Grid>
        <Grid container style={{padding:'20px',background:'#F1F1EE'}}>
          <Grid item xs={12} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
          <img 
              src="contactType.jpg"
              alt="Placeholder" 
              style={{  width:isMobile?"350px": 'auto',
                height:isMobile? '250px':'400px',
                
                borderRadius:'10px' }} 
            />
          </Grid>
        
          
          <Grid container spacing={2} style={{marginTop:'20px'}}>
            <Grid item xs={12}md={2}></Grid>
          <Grid item xs={12} md={8} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Typography style={{fontSize:'16px,',color:'#000',textAlign:'center',fontFamily: "Jost, sans-serif",}}> The most common kind of contact thermometer uses electronic heat sensors to record body temperature. These thermometers can be used on the forehead, mouth, armpit or rectum. Most electronic thermometers have a digital display that shows you the temperature reading.</Typography>
          </Grid>
          <Grid item xs={12}md={2}></Grid>
          </Grid>
         
        </Grid>
        <br />
      <Footer/>
    </div>
  )
}

export default index