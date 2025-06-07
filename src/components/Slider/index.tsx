import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { isMobile } from "react-device-detect";

const Index = () => {
  const router = useRouter();
  const slides = [
    {
      image: "/slider-1.jpg",
      heading: "Pressure measurement",
      subheading:
        "Electrical pressure measurement uses a sensor to detect pressure or changes in pressure and convert it into an electrical signal.",
      subheading_1:
        "Gauge pressure is zero-referenced against ambient air pressure, so it is equal to absolute pressure minus atmospheric pressure.",
      subheading_2:
        "Pressure gauges, vacuum gauges, or compound gauges (vacuum & pressure).",
      buttonText: "Highlights",
      buttonText_1: "Learn More",
      link: "/pressureMeasurement", // Add the link property
    },
    {
      "image": "/slider-2.jpeg",
      "heading": "Temperature Measurement",
      "subheading": "Accurate temperature measurement is essential in various industries.",
      "subheading_1": "From healthcare to manufacturing, ensuring precise temperature control",
      "subheading_2": "enhances safety, efficiency, and quality assurance.",
      "buttonText": "Highlights",
      "buttonText_1": "Learn More",
      "link": "/temperatureMeasurement"
    },
    
    {
      "image": "/slider-4.jpg",
      "heading": "Electrical Automation",
      "subheading": "Revolutionizing industrial processes through advanced electrical automation.",
      "subheading_1": "Leverage technologies like PLC, SCADA, and DCS to enhance operational efficiency",
      "subheading_2": "with real-time monitoring, control, and data-driven decision-making.",
      "buttonText": "Highlights",
      "buttonText_1": "Learn More",
      "link": "/automation"
    },
    
    {
      "image": "/slider-5.jpeg",
      "heading": "Electrical Measuring Instruments",
      "subheading": "High-precision tools for electrical measurements and diagnostics.",
      "subheading_1": "Essential devices like digital multimeters and AC/DC clamp meters",
      "subheading_2": "empower professionals to ensure accuracy and efficiency in electrical systems.",
      "buttonText": "Highlights",
      "buttonText_1": "Learn More",
      "link": "/measuringInstruments"
    }
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  return (
    <>
      <Box
        sx={{
          background: "#fff",
          marginTop: "5px",
          display: "flex",
          alignItems: "justify",
          justifyContent: "justify",
          padding: 3,
        }}
      >
        <Grid container spacing={2} sx={{ textAlign: "justify" }}>
          <Grid item xs={12} md={12}>
            <Typography

              sx={{
                fontWeight: "300",
                color: "#000",
                fontFamily: "Jost, sans-serif",
                fontSize: isMobile ? '20px' : '24px'
              }}
            >
              Techsnyper brings Innovation in technology to provide our clients with the best technical solutions <br /> providing turnkey solutions for Process Automation.
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography
              variant="body1"
              sx={{
                color: "#555",
                fontFamily: "Jost, sans-serif",
                fontWeight: "100",
              }}
            >
              we are dedicated to delivering exceptional engineering solutions that <br />drive innovation and propel our clients’ success.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "550px",
          overflow: "hidden",
        }}
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `linear-gradient(to bottom, rgba(128, 128, 128, 0.73), rgba(0, 0, 0, 0.73)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: currentSlide === index ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              boxShadow: "rgba(0, 0, 0, 0.9) 0px 15px 50px",
            }}
          >
            <Typography variant="h6" padding="30px" fontFamily="Jost, sans-serif">
              <span style={{ borderBottom: "2px solid red" }}>Technology</span>{" "}
              Moderization
            </Typography>
            <Box sx={{ marginTop: "50px", padding: "20px" }}>
              <Typography
                
                sx={{ marginTop:isMobile? '-45px':"-15px",fontSize:isMobile?'23px':'34px', fontWeight: "700", fontFamily: "Jost, sans-serif", marginLeft: "50px" }}
              >
                {slide.heading}
              </Typography>
              <br />
              <Typography
                
                sx={{ marginTop: "-15px", fontFamily: "Jost, sans-serif",fontSize:isMobile?'16px':'20px', marginLeft: "50px" }}
              >
                {slide.subheading}
              </Typography>
              <br />
              <Typography
                variant="h6"
                sx={{ marginTop: "-15px", fontFamily: "Jost, sans-serif", fontSize:isMobile?'16px':'20px',marginLeft: "50px" }}
              >
                {slide.subheading_1}
              </Typography>
              <br />
              <Typography
                variant="h6"
                sx={{ marginTop: "-15px", fontFamily: "Jost, sans-serif", fontSize:isMobile?'16px':'20px',marginLeft: "50px" }}
              >
                {slide.subheading_2}
              </Typography>
              <br />
              <Button
                onClick={prevSlide}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  minWidth: "40px",
                  minHeight: "40px",
                  borderRadius: "50%",
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
                }}
              >
                <ArrowBackIosIcon style={{fontSize:isMobile?'15px':'15px'}}/>
              </Button>

              <Button
                onClick={nextSlide}
                sx={{
                  position: "absolute",
                  top: "50%",
                 
                  right: "10px",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  minWidth: "40px",
                  minHeight: "40px",
                  borderRadius: "50%",
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
                }}
              >
                < ArrowForwardIosIcon style={{fontSize:'15px'}}/>
              </Button>


              <Button
  variant="outlined"
  style={{
    gap: '10px',
    color: 'white',
    border: '1px solid white',
    marginLeft: '50px',
    fontFamily: 'Jost, sans-serif',
  }}
  onClick={() => {
    console.log('Navigating to:', slides[currentSlide]?.link); // Debugging
    router.push(slides[currentSlide]?.link); // Navigate to the current slide's link
  }}
>
  Know More <ArrowForwardIcon />
</Button>


            </Box>
          </Box>
        ))}

        {/* Dots Navigation */}
        <Box
          sx={{
            position: "absolute",
            zIndex: "5",
            bottom: "15px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
          }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width:isMobile? '80px':"180px",
                height: "2px",
                borderRadius: "5%",
                backgroundColor: "#fff",
                overflow: "hidden",
                cursor: "pointer",
                "::before": {
                  content: "''",
                  position: "absolute",
                  left: "0",
                  top: "0",
                  width: currentSlide === index ? "160%" : 0,
                  height: "100%",
                  backgroundColor: "#4E7AF5",
                  animation: currentSlide === index ? "progress 5s linear" : "none",
                },
              }}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </Box>
      </Box>

      <style jsx global>{`
        @keyframes progress {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Index;
