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
                       fontSize: isMobile ? "20px" : "40px",
                       fontFamily: "Jost, sans-serif",
                       borderLeft: "9px solid #F8B400",
                       textAlign: isMobile ? "justify" : "justify",
                       marginTop:isMobile? "90px":'0px'

                     }}
                   >
                     <span style={{ marginLeft: "10px" }}>AIR VELOCITY MEASUREMENT</span> 
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
                 <span style={{ borderBottom: "2px solid #F8B400" }}>A</span>ir Velocity Measurement
               </Typography>
             </div>
             <br />

{/* box--replace */}
             <Grid container style={{padding:'20px'}}>
      <Grid item xs={12} md={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
      <img 
          src="airvel.png" 
          alt="Placeholder" 
          style={{  width:isMobile?"350px": 'auto',
            height:isMobile? '250px':'400px',
            borderRadius:'10px' }} 
        />
      </Grid>
    
      
      <Grid container spacing={2} style={{marginTop:'20px'}}>
        <Grid item xs={12}md={2}></Grid>
      <Grid item xs={12} md={8} style={{display:'flex',alignItems:'center',justifyContent:'center',}}>
            <Typography style={{fontSize:'16px,',color:'#000',textAlign:'center',fontFamily: "Jost, sans-serif",}}>Measurement of air flow, flow and direct display. Telescope vane probe/Thermal probe/ large area vane probe, Max/Min/ Hold function.Air velocity (distance traveled per unit of time) is most often expressed in feet per minute (FPM). Multiplying air velocity by the area of a duct allows you to determine the air volume flowing past a point in the duct per unit of time.</Typography>
      
      </Grid>
      <Grid item xs={12}md={2}></Grid>
      </Grid>
   
    </Grid>

            




          <Footer/>
        </div>
      )
    }

    export default index

  
