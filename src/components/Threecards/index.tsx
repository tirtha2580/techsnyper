import React from "react";
import { Box, Typography, Grid, Card, CardContent,Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SchoolIcon from "@mui/icons-material/School";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LensIcon from "@mui/icons-material/Lens";
import CheckIcon from '@mui/icons-material/Check';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import GroupIcon from '@mui/icons-material/Group';
import { useRouter } from 'next/router';

const CenteredSection = () => {
    const router = useRouter();
    const cards = [
        {
          title: "Quality Gurantee",
          description:
            "Perfection in every detail. Quality, assured and delivered. Guaranteed quality, every time.",
          icon: <CheckIcon sx={{ fontSize: "36px", color: "#fff" }} />,
        },
        {
          title: "24/7 Service",
          description:
            "Round-the-clock care assured. Support anytime, every day. Always here, always ready.",
          icon: <WatchLaterIcon sx={{ fontSize: "36px", color: "#fff" }} />,
        },
        {
          title: "Reliability,Commitment",
          description:
            "Trust us for unwavering integrity. Count on us for reliability.Your confidence, our commitment",
          icon: <GroupIcon sx={{ fontSize: "36px", color: "#fff" }} />,
        },
      ];
    

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "500",
          marginBottom: "10px",
          fontFamily: "Jost, sans-serif",
          color:'#5894E5'
        }}
      >
       We Are Experts in The Industry
      </Typography>

      {/* Description */}
      <Typography
        variant="h4"
        sx={{
            fontWeight:"700",
          color: "#002F49",
          marginBottom: "20px",
          fontFamily: "Jost, sans-serif",
        }}
      >
       We Take Pride in Our Work
      </Typography>
      <Typography
        variant="body1"
        sx={{
            
          color: "#002F49",
          marginBottom: "20px",
          fontFamily: "Jost, sans-serif",
        }}
      >
      We adhere to strict safety standards and regulations, and we are committed to providing our customers with the highest level of service and professionalism.
      </Typography>


      {/* Cards Section */}
      <Grid container spacing={4} justifyContent="center">
  {cards.map((card, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Card
        sx={{
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          backgroundColor: "#fff",
          textAlign: "center",
          width: "300px",
          margin: "0 auto", // Center the card
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <CardContent>
          {/* Icon */}
          <Box
            sx={{
              width: "60px",
              height: "60px",
              margin: "0 auto 15px",
              borderRadius: "50%",
              backgroundColor: "#4D78F2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.3s, background-color 0.3s",
              "&:hover": {
                transform: "translateY(-10px)",
                backgroundColor: "#4D9DF2",
              },
            }}
          >
            {card.icon}
          </Box>

          {/* Card Title */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: "10px",
              fontFamily: "Jost, sans-serif",
            }}
          >
            {card.title}
          </Typography>

          {/* Card Description */}
          <Typography
            variant="body2"
            sx={{
              color: "#666",
              marginBottom: "20px",
              fontFamily: "Jost, sans-serif",
            }}
          >
            {card.description}
          </Typography>

          {/* Button */}
          <Button
            variant="outlined"
            sx={{
              color: "#4D78F2",
              borderColor: "#4D78F2",
              fontWeight: "bold",
              fontFamily: "Jost, sans-serif",
              "&:hover": {
                backgroundColor: "#4D78F2",
                color: "#fff",
              },
            }}
            onClick={() => router.push("/contact")}
            endIcon={<ArrowForwardIcon />}
          >
            Contact Us
          </Button>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

    </Box>
  );
};

export default CenteredSection;
