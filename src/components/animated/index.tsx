import { Button } from "@mui/material";
import React, { useState, useEffect, CSSProperties, useRef } from "react";
import { useRouter } from "next/router";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FullSizeVideo = () => {
  const router = useRouter();
  const [currentText, setCurrentText] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    router.push('/contact'); 
  };


  // Text array to rotate
  const textArray = [
    "Welcome to Techsnyper",
    "Experience the Best",
    "Join Us Today",
    "Discover More Makes Life Easier",
  ];

  // Change text every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [textArray.length]);

  // Observe when the text comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible(true);
        } else {
          setTextVisible(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const containerStyle: CSSProperties = {
    position: "relative",
    width: "100%", // Full viewport width
    height: "90vh", // Full viewport height
    overflow: "hidden", // Prevent content overflow
  };

  const videoStyle: CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // Center the video
    width: "100%", // Make the video fill the container
    height: "100%", // Maintain aspect ratio
    objectFit: "cover", // Crop video to fill without distortion
  };

  const textStyle: CSSProperties = {
    position: "absolute",
    top: textVisible ? "50%" : "70%", // Start below and move to center
    left: "50%",
    transform: "translate(-50%, -50%)", // Center the text
    color: "white",
    fontSize: "2rem", // Adjust the font size as needed
    fontWeight: "500",
    textAlign: "justify", // Justified text alignment
    zIndex: 2, // Ensure the text is above the video
    fontFamily: "Jost, sans-serif", // Add the font family
    maxWidth: "80%", // Limit the width of text for better readability
    lineHeight: "1.5", // Improve readability with line height
    transition: "top 1s ease-out, opacity 1s ease-out", // Smooth transition
    opacity: textVisible ? 1 : 0, // Fade in as it moves up
  };

  return (
    <div style={containerStyle}>
      <video
        style={videoStyle}
        src="/bg_video.mp4"
        autoPlay
        loop
        muted
      >
        Your browser does not support the video tag.
      </video>
      <div ref={textRef} style={textStyle}>
        {textArray[currentText]}
        <br />
       
       <div style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'10px'}}>
       <Button variant="outlined"  onClick={handleClick} style={{borderColor:'#fff',fontSize:'20px',color:'#fff',borderRadius:'25px',fontFamily: "Jost, sans-serif", textTransform: "capitalize",}}>Contact Us &nbsp; <ArrowForwardIcon/></Button>
       </div>
      </div>
      
    </div>
  );
};

export default FullSizeVideo;
