import React from "react";
import { Grid, Button, Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TireRepairIcon from '@mui/icons-material/TireRepair';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
const theme = createTheme({
  typography: {
    fontFamily: "Jost, sans-serif",
    allVariants: {
      color: "black", // Default color for all text
    },
  },
});

const App = () => {
  const handleIconClick = (iconName) => {
    alert(`${iconName} icon clicked!`);
  };
   const router = useRouter();
   const handleClick = () => {
     router.push('/about'); 
   };

  return (
    <ThemeProvider theme={theme}>
     
        <Grid container spacing={2} style={{padding:'20px'}}>
          {/* Section 1: Heading, Text, and Button */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems:isMobile? "center":"flex-start",
                height: "100%",
              }}
            >
              <Typography  gutterBottom style={{fontSize:isMobile?"27px":"34px"}}>
              Why Choose Techsnyper?
              </Typography>
              <br />
              <Typography variant="body1" gutterBottom color='grey' style={{textAlign:isMobile?"center":"justify"}}>
              When it comes to automation, measurement systems, and precision instruments, Techsnyper is your trusted partner, alongside industry leader Honeywell. We provide expert solutions with cutting-edge technology and unmatched precision, tailored to your needs. With a focus on safety, innovation, and reliable support, we deliver efficient, compliant, and future-ready systems at competitive prices.
              </Typography>
              <br />
              <Button
              size="large"
              onClick={handleClick}
  variant="contained"
  sx={{
    gap:"10px",
    fontFamily: "Jost, sans-serif",
    color: "white",
    background: "linear-gradient(111.4deg, rgb(122, 192, 233) 18.8%, rgb(4, 161, 255) 100.2%)",
    textTransform: "capitalize", // Ensures only the first letter is capitalized
    "&:hover": {
      backgroundColor: "grey",
    },
  }}
>
  About Techsnyper <ArrowForwardIcon/>
</Button>

            </Box>
          </Grid>

          {/* Section 2: Blank */}
          

          {/* Section 3: Full Size On-Click Icon */}
          <Grid item xs={12} md={3}  style={{display:isMobile?'flex':'',gap:isMobile?'10px':'0',alignItems:isMobile?'center':'',justifyContent:isMobile?'center':''}}>
          <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    marginLeft:isMobile?'0':'65px',
    alignItems: "center",
    height: "200px", // Increased height
    width: "200px", // Width of the card
    cursor: "pointer",
    transition: "all 0.3s ease-in-out", // Smooth transition for both box-shadow and background
    borderRadius: "16px", // Optional: rounded corners
    padding: "16px",
    backgroundColor: "white", // Default background color
    "&:hover": {
        color:'#ffffff',
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", // Shadow on hover
      background:' linear-gradient(to top, #accbee 0%, #e7f0fd 100%)'
    },
  }}
  // onClick={() => handleIconClick("Star")}
>
<img src="/settings.png" alt="" />
</Box>
<br />
<Box
  sx={{
    display: "flex",
    justifyContent: "center",
    marginLeft:isMobile?'0':'65px',
    alignItems: "center",
    height: "200px", // Increased height
    width: "200px", // Width of the card
    cursor: "pointer",
    transition: "all 0.3s ease-in-out", // Smooth transition for both box-shadow and background
    borderRadius: "16px", // Optional: rounded corners
    padding: "16px",
    backgroundColor: "white", // Default background color
    "&:hover": {
        color:'#ffffff',
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", // Shadow on hover
      background:' linear-gradient(to top, #accbee 0%, #e7f0fd 100%)'
    },
  }}
  // onClick={() => handleIconClick("Star")}
>
 <img src="/electric-panel (1).png" alt="" />
</Box>

</Grid>

<Grid item xs={12} md={3}  style={{display:isMobile?'flex':'',gap:isMobile?'10px':'0',alignItems:isMobile?'center':'',justifyContent:isMobile?'center':''}}>
          <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    marginLeft:isMobile?'0':'65px',
    alignItems: "center",
    height: "200px", // Increased height
    width: "200px", // Width of the card
    cursor: "pointer",
    transition: "all 0.3s ease-in-out", // Smooth transition for both box-shadow and background
    borderRadius: "16px", // Optional: rounded corners
    padding: "16px",
    backgroundColor: "white", // Default background color
    "&:hover": {
        color:'#ffffff',
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", // Shadow on hover
      background:' linear-gradient(to top, #accbee 0%, #e7f0fd 100%)'
    },
  }}
  // onClick={() => handleIconClick("Star")}
>
<img src="/antenna.png" alt="" />
</Box>
<br />
<Box
  sx={{
    display: "flex",
    justifyContent: "center",
    marginLeft:isMobile?'0':'65px',
    alignItems: "center",
    height: "200px", // Increased height
    width: "200px", // Width of the card
    cursor: "pointer",
    transition: "all 0.3s ease-in-out", // Smooth transition for both box-shadow and background
    borderRadius: "16px", // Optional: rounded corners
    padding: "16px",
    backgroundColor: "white", // Default background color
    "&:hover": {
        color:'#ffffff',
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", // Shadow on hover
      background:' linear-gradient(to top, #accbee 0%, #e7f0fd 100%)'
    },
  }}
  // onClick={() => handleIconClick("Star")}
>
 <img src="/smart-meter.png" alt="" />
</Box>

</Grid>



          {/* Section 4: Full Size On-Click Icon */}
        

          {/* Section 5: Blank */}
         
        </Grid>
      
    </ThemeProvider>
  );
};

export default App;
