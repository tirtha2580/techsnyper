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
  <Header />
  <MobileMenu />
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
                     <span style={{ marginLeft: "10px" }}>Pressure Measurement</span> 
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
                 <span style={{ borderBottom: "2px solid #F8B400" }}>P</span>ressure Measurement
               </Typography>
             </div>
             <br />

{/* box--replace */}
             <Grid container>
      <Grid item xs={12} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
      <img 
          src="/Pressure mng/heading.jpeg" 
          alt="Placeholder" 
          style={{  width:isMobile?"350px": 'auto',
            height:isMobile? '250px':'400px',
            borderRadius:'10px' }} 
        />
      </Grid>
    
      
      <Grid container spacing={2} style={{marginTop:'20px'}}>
        <Grid item xs={12}md={2}></Grid>
      <Grid item xs={12} md={8} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Typography style={{fontSize:'16px,',color:'#000',textAlign:'center',fontFamily: "Jost, sans-serif",}}>  SmartLine Pressure Transmitters include absolute pressure, gauge pressure, flange mount and remote seal transmitters that meet industry requirements in performance, stability, reliability and rangeability. Highly accurate and suitable for HART, PROFIBUS AND FOUNDATION FIELDBUS interface.</Typography>
      </Grid>
      <Grid item xs={12}md={2}></Grid>
      </Grid>
     
    </Grid>

             <Grid container spacing={4} style={{marginTop:'30px',background:'#F1F1EE'}}>
              
          {/* First Grid - Blank */}
          <Grid item xs={12} md={1}/>

          {/* Second Grid - Image */}
          <Grid item xs={12} md={5}>
            <img
              src="/Pressure mng/transmeter.jpg"
              alt="pressuretransmitter"
               style={{ width: "60%", height: "450px",borderRadius:'20px', marginLeft:'150px' }}
            />
            <br />
          </Grid>

          {/* Third Grid - Text Heading and Texts */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" gutterBottom style={{fontFamily: "Jost, sans-serif",fontWeight:'600'}}>
            Pressure Transmitter

            </Typography>
            <Typography variant="body1" style={{fontFamily: "Jost, sans-serif",}}>
            A pressure transmitter is a mechanical device that measures the expansive force of a liquid or gaseous sample. Also known as a pressure transducer, this type of sensor is typically composed of a pressure sensitive surface area made of steel, silicon, or other materials depending upon the analyte&apos;s composition.
            </Typography>
          </Grid>

          {/* Fourth Grid - Blank */}
          <Grid item xs={12} md={1}/>
        </Grid>
        
        <Grid container spacing={4} style={{marginTop:'0px',}}>

    {/* First Grid - Blank */}
    <Grid item xs={1} />

    <Grid item xs={12} md={5} style={{marginTop:'50px'}}>
      <Typography  gutterBottom style={{fontFamily: "Jost,sans-serif",fontSize:'24px',fontWeight:'600'}}>
      Differential Pressure Transmitter

      </Typography>
      <Typography style={{fontFamily: "Jost, sans-serif",fontSize:'16px'}}>
      Differential pressure transmitters are comprised of a robust electronic module and two sensory diaphragms that provide the electronic reading of applied forces in a containment vessel. These arrangements are physically connected in set configurations depending upon the application requirements.
      </Typography>
    </Grid>
    <Grid item xs={12} md={5}>
      <img
        src="/Pressure mng/dp.jpg"
        alt="Differential pressure transmitters "
         style={{ width: "60%", height: "450px",borderRadius:'20px', marginLeft:'150px' }}
      />
      <br />
    </Grid>

    {/* Third Grid - Text Heading and Texts */}


    {/* Fourth Grid - Blank */}
    <Grid item xs={12} md={5}/>
    </Grid>
    <Grid container spacing={4} style={{marginTop:'30px',background:'#F1F1EE'}}>

    {/* First Grid - Blank */}
    <Grid item xs={12} md={1}/>

    {/* Second Grid - Image */}
    <Grid item xs={12} md={5}>
      <img
        src="/Pressure mng/guaje.jpg"
        alt="Placeholder"
        style={{ width: "60%", height: "450px",borderRadius:'20px', marginLeft:'150px' }}
      />
      <br />
      <br />
    </Grid>

    {/* Third Grid - Text Heading and Texts */}
    <Grid item xs={12}md={5}>
      <Typography variant="h4" gutterBottom style={{fontFamily: "Jost, sans-serif",fontWeight:'600'}}>
      Pressure Gauges 
      </Typography>
      <Typography variant="body1" style={{fontFamily: "Jost, sans-serif",}}>
      A pressure gauge is a mechanical instrument that is used to measure and monitor the pressure of air, gases or fluids in process, commercial and industrial systems. These devices operate using the system&apos;s process, meaning they will give you a reading even when you have no power source.
      </Typography>
      <Typography variant="h5" style={{fontFamily: "Jost, sans-serif",}}>
            Manufactured Compnay Names: 
      </Typography>
      <span style={{fontSize:'16px',fontFamily: "Jost, sans-serif",}}>Gauges bourdon, Thermal instrument, Baumer</span>
    </Grid>

    {/* Fourth Grid - Blank */}
    <Grid item xs={12} md={1}/>
    </Grid>

       <Grid container spacing={4} style={{marginTop:'0px',}}>

    {/* First Grid - Blank */}
    <Grid item xs={1} />

    <Grid item xs={12} md={5} style={{marginTop:'50px'}}>
      <Typography  gutterBottom style={{fontFamily: "Jost,sans-serif",fontSize:'24px',fontWeight:'600'}}>
       Pressure Switch

      </Typography>
      <Typography style={{fontFamily: "Jost, sans-serif",fontSize:'16px'}}>
      A pressure switch is an electrical device that opens or closes a circuit based on a preset fluid pressure level. It acts as a control mechanism, automatically activating or deactivating electrical circuits when a specific pressure point is reached. These switches are crucial for maintaining system safety and efficiency in various applications, from industrial processes to residential systems.   </Typography>
    </Grid>
    <Grid item xs={12} md={5}>
      <img
        src="/Pressure mng/switch1.jpg"
        alt=" pressure switch "
         style={{ width: "60%", height: "450px",borderRadius:'20px', marginLeft:'150px' }}
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

  
