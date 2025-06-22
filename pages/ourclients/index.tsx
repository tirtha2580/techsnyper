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
    const sections = [
        { id: 1, image: "/singhalgroup_logo.jpeg", text: "Singhal enterprises pvt ltd &  Singhal energy pvt ltd,Raigarh" },
        { id: 2, image: "/shree.jpeg", text: "Shree shyam ispat and power ltd" },
        { id: 3, image: "/mangal_logo.png", text: "Mangal sponge and power pvt ltd,Bilaspur" },
        { id: 4, image: "/ninl.png", text: "Neelachal ispat and power ltd,Jamshedpur" },
        { id: 5, image: "/satyam.jpg", text: "Satyam Iron and Power Ltd,Mangalpur" },
        { id: 6, image: "/shyamSteel_logo.jpg", text: "Shyam Steel " },
        { id: 7, image: "/suvidhi.png", text: "Suvidhi ispat and power ltd, Durg " },
        { id: 8, image: "/mahendra.png", text: " Mahindra steel and power ltd,Raipur" },
        { id: 9, image: "/beekay.png", text: " Beekay Steel and Power Ltd,Cuttuck" },
        { id: 10, image: "/mb.jpg", text: "MB Sponge and Power Ltd,Jamuria" },
        { id: 11, image: "/ocl.png", text: " OCL Iron & Steel ltd,Rajgangpur,Odisha" },
        { id: 12, image: "/sun.png", text: "Sun Steel and Power Ltd,Raigarh" },
        { id: 13, image: "/NR.jpg", text: "N.R. ISPAT AND POWER PVT.LTD" },
        { id: 14, image: "/sail1.jpg", text: "SAIL" },
        { id: 15, image: "/Crest.jpeg", text: "Crest steel and power Ltd" },
        { id: 16, image: "/animesh.jpg", text: "Animesh ispat and power Ltd" },   
         { id: 17, image: "/inland.jpg", text: "Inland Power Limited" },
             { id: 18, image: "/shaurya.webp", text: "Shaurya Ispat Udyog Pvt. Ltd" },
                 { id: 19, image: "/swadesh.jpg", text: "Swadesh Metallics Pvt. Ltd "},
      
        
      ];
  return (
    <div>
         <Header />
      <MobileMenu />
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
              <span style={{ marginLeft: "10px"}}>Our Clients</span> 
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
            marginTop: "40px",
          }}
        >
          <span style={{ borderBottom: "2px solid #F8B400" }}>O</span>ur Clients
        </Typography>
      </div>

      <Grid container spacing={6} justifyContent="center" style={{ padding: "30px",background:'' }}>
      {sections.map((section) => (
        <Grid
          item
          xs={12}
          md={2.4}
          key={section.id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={section.image}
            alt={section.text}
            sx={{
              width: "100%",
              height: "130px",
              objectFit: "contain",
             
            }}
          />
          {/* Text */}
          <Typography
            variant="body1"
            style={{
              fontFamily: "Jost, sans-serif",
              marginTop: "16px",
              color: "#383A3B",
              textAlign: "center",
            }}
          >
            {section.text}
          </Typography>
        </Grid>
      ))}
    </Grid>

    <Footer/>
    </div>
  )
}

export default index