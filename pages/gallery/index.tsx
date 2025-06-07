import React, { useState } from "react";
import Header from "../../src/components/navbar/Navbar";
import Footer from "../../src/components/footer/Footer";
import ProductsTab from '../../src/components/productsTab'
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
        { id: 1, image: "/client1.png", text: "Garden Reach Shipbuilders & Engineers Limited" },
        { id: 2, image: "/client2.jpg", text: "Bhilai Engineering Corporation Limited" },
        { id: 3, image: "/client3.png", text: "Steel Authorities Limited" },
        { id: 4, image: "/Mazagon.png", text: "Mazagon Dock Shipbuilders Limited" },
        { id: 5, image: "/client5-new.png", text: "Indian Railway" },
        { id: 6, image: "/client6.png", text: "Simplex Infrastructure Limited " },
        { id: 7, image: "/client7.png", text: "National Aluminium Company Limited " },
        { id: 8, image: "/client8.png", text: "Larsen & Toubro" },
        { id: 9, image: "/client9.svg", text: "Titagarh Rail System Limited" },
        { id: 10, image: "/client10.png", text: "Primetals Technologies India Private Limited" },
      
        
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
              <span style={{ marginLeft: "10px" }}>Gallery</span> 
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
          <span style={{ borderBottom: "2px solid #F8B400" }}>O</span>ur Gallery
        </Typography>
      </div>

      <ProductsTab/>
          
          <br />

    <Footer/>
    </div>
  )
}

export default index