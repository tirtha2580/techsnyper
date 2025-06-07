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
                 <span style={{ marginLeft: "10px" }}>Level Measurement</span> 
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
             <span style={{ borderBottom: "2px solid #F8B400" }}>L</span>evel Measurement
           </Typography>
         </div>
         <br />
         
    

     <Grid container>
          <Grid item xs={12} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
          <img 
              src="la.jpeg" 
              alt="Placeholder" 
              style={{  width:isMobile?"350px": 'auto',
                height:isMobile? '250px':'400px',
                borderRadius:'10px' }} 
            />
          </Grid>
        
          
          <Grid container spacing={2} style={{marginTop:'20px'}}>
            <Grid item xs={12}md={2}></Grid>
          <Grid item xs={12} md={8} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Typography style={{fontSize:'16px,',color:'#000',textAlign:'center',fontFamily: "Jost, sans-serif",}}>  Level transmitters use guided wave radar (GWR) technology and can measure the level of a wide range of liquid products on a large variety of installations within the stated pressure and temperature range.</Typography>
          </Grid>
          <Grid item xs={12}md={2}></Grid>
          </Grid>
         
        </Grid>


    <Grid container spacing={4} style={{marginTop:'0px',background:'#F1F1EE',padding:'10px'}}>

{/* First Grid - Blank */}
<Grid item xs={12} md={1}/>

<Grid item xs={12} md={5} style={{marginTop:'50px'}}>
  <Typography  gutterBottom style={{fontFamily: "Jost, sans-serif",fontSize:'24px',fontWeight:'600',}}>
  Non Contact Radar Level Transmitter
  </Typography>
  <Typography style={{fontFamily: "Jost, sans-serif",fontSize:'16px'}}>
  SmartLine Level Transmitter uses Non Contact radar (NCR) 80 GHz FMCW technology and can measure the level of a wide range of liquid and Solid products on a large variety of installations within the stated pressure and temperature range.
  </Typography>
</Grid>
<Grid item xs={12} md={5} style={{}}>
  <img
    src="/levelTransmitter.jpg"
    alt="Placeholder"
    style={{ width: "100%", height: "400px",borderRadius:'20px', }}
  />
  <br />
  <br />
  <br />
  <br />
</Grid>

<Grid item xs={12} md={1}/>
</Grid>
<Grid container spacing={4} style={{marginTop:'0px',background:'#fff',padding:'10px'}}>

{/* First Grid - Blank */}
<Grid item xs={12} md={1} />
<Grid item xs={12} md={5}>
  <img
    src="/ultra.webp"
    alt="Placeholder"
    style={{ width: "100%", height: "350px",borderRadius:'20px', }}
  />
  <br />
  <br />
</Grid>

<Grid item xs={12} md={5} style={{marginTop:'50px'}}>
  <Typography  gutterBottom style={{fontFamily: "Jost, sans-serif",fontSize:'24px',fontWeight:'600',}}>
  Ultrasonic Level Transmitter
  </Typography>
  <Typography style={{fontFamily: "Jost, sans-serif",fontSize:'16px'}}>
  Ideal for level, volume and volume flow measurement. It works with liquid, slurries and bulk material up to 12mtr. (40 ft.) Communication using HART. Low power and current start up.

  </Typography>
</Grid>


{/* Third Grid - Text Heading and Texts */}


{/* Fourth Grid - Blank */}
<Grid item xs={12} md={1} />
</Grid>


      <Footer/>
    </div>
  )
}

export default index