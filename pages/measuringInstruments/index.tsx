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
                   fontSize: isMobile ? "20px" : "50px",
                   fontFamily: "Jost, sans-serif",
                   borderLeft: "9px solid #F8B400",
                   textAlign: isMobile ? "justify" : "justify",
                   marginTop:isMobile? "90px":'0px'
                   
                 }}
               >
                 <span style={{ marginLeft: "10px" }}>Measuring Instruments</span> 
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
               fontSize:isMobile? "24px":"34px",
               fontFamily: "Jost, sans-serif",
               fontWeight: "600",
               marginTop: "40px",
             }}
           >
             <span style={{ borderBottom: "2px solid #F8B400" }}>M</span>easuring Instruments
           </Typography>
         </div>
              <br />
              <br />
           <Grid container style={{padding:'20px'}}>
               <Grid item xs={12} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
               <img 
                   src="alIinst.jpg" 
                   alt="Placeholder" 
                   style={{  width:isMobile?"350px": 'auto',
                     height:isMobile? '250px':'400px',
                     borderRadius:'10px' }} 
                 />
               </Grid>
             
               <Grid container spacing={2} style={{marginTop:'20px'}}>
                 <Grid item xs={12}md={2}></Grid>
               <Grid item xs={12} md={8} style={{display:'flex',alignItems:'center',justifyContent:'center',}}>
                     <Typography style={{fontSize:'16px,',color:'#000',textAlign:'center',fontFamily: "Jost, sans-serif",}}>Electrical measuring instruments are all the devices used to measure the magnitude of an electric current with different objectives. The values that are usually measured with this equipment are current, voltage, resistance, and power. Each is expressed in different units: amps, volts, ohms, and watts, respectively.</Typography>
               
               </Grid>
               <Grid item xs={12}md={2}></Grid>
               </Grid>
            
             </Grid>

              <Grid container spacing={4} style={{marginTop:'30px',background:'#F1F1EE',padding:'20px'}}>
             
                       {/* First Grid - Blank */}
                       <Grid item xs={12} md={1}/>
             
                       {/* Second Grid - Image */}
                       <Grid item xs={12} md={5}>
                         <img
                           src="multimeter.jpg"
                           alt="Placeholder"
                           style={{ width:isMobile?"100%": "400px", height: "400px",borderRadius:'20px', }}
                         />
                         <br />
                       </Grid>
             
                       {/* Third Grid - Text Heading and Texts */}
                       <Grid item xs={12} md={5}>
                         <Typography variant="h4" gutterBottom style={{fontWeight:'600',fontFamily: "Jost, sans-serif",marginTop:isMobile?'0px':'60px'}}>
                         Digital Multimeter
                         </Typography>
                         <Typography variant="body1" style={{fontFamily: "Jost, sans-serif",}}>
                         6000 Counts Backlit LCD, Flashlight, NCV, MAX/MIN Record, T-RMS, Measures AC/DC Voltage, AC/DC Current, Resistance, Capacitance, Temperature, Frequency, Diode and Continuity Test.
                         </Typography>
                       </Grid>
             
                       {/* Fourth Grid - Blank */}
                       <Grid item xs={12} md={1}/>
                     </Grid>
                     
                     <Grid container spacing={4} style={{marginTop:isMobile?'0px':'-60px',padding:'20px'}}>
             
                 {/* First Grid - Blank */}
                 <Grid item xs={1} />
             
                 <Grid item xs={12} md={5} style={{marginTop:isMobile?'0px':'95px'}}>
                   <Typography  gutterBottom style={{fontFamily: "Jost, sans-serif",fontSize:'24px',fontWeight:'600'}}>
                   Digital AC/DC Clamp Meter
                   </Typography>
                   <Typography style={{fontFamily: "Jost, sans-serif",fontSize:'16px'}}>
                   3-5/6-digit 5999 Count, Backlight LCD, T-RMS, Auto- Ranging, NCV, Flashlight, Relative Measurement, AC(750V)/DC(1000V) Voltage, 600A AC/DC Current, Resistance, Capacitance, Frequency, Temperature, Diode & Continuity. Square Wave Output, CAT-IV 600V.

                   </Typography>
                 </Grid>
                 <Grid item xs={12} md={5}>
                   <img
                     src="/DIGITAL.jpg"
                     alt="Placeholder"
                     style={{ width: "90%", height: "400px",borderRadius:'20px',padding:"20px" }}
                   />
                   <br />
                 </Grid>
             
                 {/* Third Grid - Text Heading and Texts */}
             
             
                 {/* Fourth Grid - Blank */}
                 <Grid item xs={12} md={5}/>
                 </Grid>
   

      
      <Footer/>
    </div>
  )
}

export default index