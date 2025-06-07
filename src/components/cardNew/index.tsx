import React, { useState, useEffect } from "react";
import { Grid, Box, Fade, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useMediaQuery } from '@mui/material';

const images = [
  "meeting.jpg", // Replace with your image paths
  "meeting2.png",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Change image
        setFade(true); // Start fade-in
      }, 500); // Duration of fade-out
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
    <Grid container spacing={4} justifyContent="center"  style={{ height: "740px",color:'#000',background:'#F2F1EE', }}>
        
        <Grid item xs={12} md={5} sm={5} style={{padding:'60px'}}>
            <Typography variant="h6" style={{fontWeight:'500',fontFamily: "Jost, sans-serif",}}><span style={{borderBottom:'2px solid red'}}>Wh</span>o we are</Typography> <br />
            <h2 style={{fontWeight:'600',fontSize:"20px",fontFamily: "Jost, sans-serif",}}>Visualize, Design, and Develop powerful web and mobile application.</h2> <br />
            <Typography variant="body1" style={{fontWeight:'300',fontFamily: "Jost, sans-serif",}}> Where Passion Meets Innovation !</Typography> <br />
            <Typography variant="body1" style={{fontWeight:'300',fontFamily: "Jost, sans-serif",}}>At Infosyst, we bring your business goals to life through cutting-edge tech solutions. We’re a young, daring, and ambitious team on a mission to change the world by connecting top talent with forward-thinking clients. Our customer-first approach ensures every project is a success.</Typography> <br />
            <Typography variant="body1" style={{fontWeight:'300',fontFamily: "Jost, sans-serif",}}>Curious to see the magic behind our customer-oriented software? Meet our team and let’s create something extraordinary together!</Typography>
            <div className="mt-10" style={{alignItems: "center", display: "flex",gap:"10px",fontFamily: "Jost, sans-serif"}}>
          <Typography style={{fontFamily: "Jost, sans-serif"}}>
            Let&apos;s Talk
          </Typography>
          <img src="/arrowsquarerightred.png" alt="let's talk" width='40px' onClick={() => router.push("/contact")} style={{cursor:'pointer',zIndex:'1'}}/>
        </div>
        </Grid>

      <Grid item xs={12} md={7} sm={7}>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "500px", 
            marginTop:"80px",
          }}
        >
          <Fade in={fade} timeout={500}>
            <Box
              component="img"
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              sx={{
                
                width: "100%",
                height: "350px",
                objectFit: "cover",
              }}
            />
          </Fade>
        </Box>

      
      </Grid>
    </Grid>
    <Grid container spacing={1}>
        <Grid item xs={12} md={12} style={{background:"#ffffff"}}>
          <Typography
            style={{
              fontSize: isMobile ? "25px" : "230px",
              color: "#fff  ",
              marginBottom: isMobile?"0px":"-100px",
              marginTop:"-240px",
              textAlign: "center",
              fontFamily: "Jost, sans-serif",
              fontWeight: isMobile ? "600" : "",
            }}
          >
            How we help
          </Typography>
        </Grid>      
      </Grid>

        <div style={{background:'#fff',height:'auto'}}>
             
        </div>
    </>
  );
};

export default ImageSlider;
