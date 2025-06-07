import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import CountUp from "react-countup";

const CustomGrid = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        mt:-2,
        zIndex: 10,
        background: "linear-gradient(to top, #00c6fb 0%, #005bea 100%)", // Background color
        padding: isMobile ? "16px" : "24px", // Padding adjusts for mobile
      }}
    >
      <Grid container spacing={isMobile ? 2 : 4} alignItems="center">
        {/* Empty Grid item for spacing */}
        <Grid item xs={12} md={1}></Grid>

        {/* Quote Section */}
        <Grid item xs={12} md={2}>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: isMobile ? "20px" : "25px",
              color: "#fff",
              textAlign: "center", // Always center text
            }}
          >
            &quot;Techsnyper Technology <br /> Pvt Ltd&quot;
          </Typography>
        </Grid>

        {/* Empty Grid item for spacing */}
        <Grid item xs={12} md={1}></Grid>

        {/* 350+ Professionals Helped */}
        <Grid item xs={12} md={2}>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: isMobile ? "20px" : "25px",
              color: "#fff",
              textAlign:isMobile ?"center": "justify",
            }}
          >
            <CountUp start={0} end={1000} duration={2} />+
          </Typography>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              color: "#fff",
              fontSize: isMobile ? "14px" : "16px",
              textAlign:isMobile ?"center": "justify",
            }}
          >
            Professionals helped
          </Typography>
        </Grid>

        {/* 50+ Organizations Helped */}
        <Grid item xs={12} md={2}>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: isMobile ? "20px" : "25px",
              color: "#fff",
              textAlign:isMobile ?"center": "justify",
            }}
          >
            <CountUp start={0} end={100} duration={2} />+
          </Typography>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              color: "#fff",
              fontSize: isMobile ? "14px" : "16px",
              textAlign:isMobile ?"center": "justify",
            }}
          >
            Organizations Helped
          </Typography>
        </Grid>

        {/* 18+ Cities in India */}
        <Grid item xs={12} md={2}>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: isMobile ? "20px" : "25px",
              color: "#fff",
              textAlign:isMobile ?"center": "justify",
            }}
          >
            <CountUp start={0} end={10} duration={4} />+
          </Typography>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              color: "#fff",
              fontSize: isMobile ? "14px" : "16px",
              textAlign:isMobile ?"center": "justify",
            }}
          >
            Products
          </Typography>
        </Grid>

        {/* 20+ Years Experience */}
        <Grid item xs={12} md={2}>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: isMobile ? "20px" : "25px",
              color: "#fff",
              textAlign:isMobile ?"center": "justify",
            }}
          >
            <CountUp start={0} end={5} duration={2} />+
          </Typography>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              color: "#fff",
              fontSize: isMobile ? "14px" : "16px",
              textAlign:isMobile ?"center": "justify",
            }}
          >
            Years Experience
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomGrid;
