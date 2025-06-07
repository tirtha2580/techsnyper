import React, { useState } from 'react';
import Header from "../../src/components/navbar/Navbar";
import Footer from "../../src/components/footer/Footer";
import { useMediaQuery } from "@mui/material";
import { Grid, Typography,Box, TextField,Breadcrumbs, cardActionAreaClasses,Card,CardContent,Link,Button,Container,IconButton, Divider} from '@mui/material';

import MobileMenu from 'src/components/mobileMenu/MobileMenu';
const index = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const cardData = [
    {slnumber:1, heading: "General Inquiries", text: "Whether you’re looking for detailed information about our services, need technical guidance, or are ready to discuss your next project, our team is just a call or message away." },
    { slnumber:2,heading: "Projects", text: "Our passion lies in powering the world with innovative, efficient, and sustainable electrical solutions. Our projects embody our commitment to excellence, whether we’re working on large-scale industrial developments, commercial facilities, or residential upgrades." },
    {slnumber:3, heading: "Technical Assistance", text: "Whether you're dealing with an unexpected issue or need professional advice to optimize your operations, our Technical Assistance team is always here to help." },
    {slnumber:4, heading: "Installation", text: "We specialize in providing comprehensive electrical installation services that ensure the highest levels of safety, efficiency, and performance.our expert team is here to guide and execute the installation process with precision and care." },
    {slnumber:5, heading: "Expriences", text: "Our legacy of excellence is built on years of successfully delivering innovative electrical solutions across a wide range of industries. Our extensive experience has shaped us into a trusted partner for clients seeking reliability, innovation, and superior results." }
  ];

  return (
    <div>
      <Header/>
      <MobileMenu/>
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
              <span style={{ marginLeft: "10px" }}>Contact</span> 
            </Typography>
          </Grid>

          <Grid item xs={12} md={1}></Grid>

          {/* 2nd Section - 5 parts */}
          <Grid item xs={12} md={4} style={{}}></Grid>
        </Grid>
      </div>

<Grid
      container
      sx={{
        mt:4,
        height: "100%",   
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
         <Button variant="contained" disabled style={{fontFamily: "Jost, sans-serif",color:"#5079F5",background:'#fff',borderRadius:'20px',border:"1px solid #5079F5"}}>
          Contact
        </Button>
        <br />
        <Typography variant="h5" gutterBottom style={{fontFamily: "Jost, sans-serif"}}>
        Here to Help You Succeed
        </Typography>
    
       
      </Grid>

      {/* 3rd Section: Blank */}
      

      {/* 4th Section: Text */}
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "justify",
        }}
      >
        <Typography variant="body2" style={{fontFamily: "Jost, sans-serif"}}>
        At Techsnyper, we believe that success is built on collaboration, innovation, and a commitment to excellence. As a leading name in the electrical industry, we pride ourselves on being more than just a service provider—we’re your partner in achieving your goals.
        </Typography>
      </Grid>
      <Grid item xs={12} md={1}></Grid>
    </Grid>
    <br />
    <div style={{padding:'40px',background:"radial-gradient(circle at 10% 20%, rgb(59, 149, 237) 0%, rgb(7, 91, 173) 90%) "}}>
      <h2 style={{fontFamily: "Jost, sans-serif",textAlign:'center',fontSize:'30px',color:'white'}}>How Can We Help?</h2> 
      <br />
<Grid container spacing={2} justifyContent="center" >
{cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <Card elevation={4} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',borderRadius:"40% 0  40% 0" }}>
              <CardContent>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" gutterBottom style={{fontFamily: "Jost, sans-serif"}}>
                    {card.heading}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }} style={{fontFamily: "Jost, sans-serif"}}>
                    {card.text}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
</div>
<br />
<div style={{height:"40vh",marginTop:'10px'}}>
<Grid container spacing={4}>
<Grid item xs={12} sm={6} md={1}></Grid>
      {/* Section 1 */}
      <Grid item xs={12} sm={6} md={2.5}>
     
        <Box sx={{ textAlign: 'justify' }}>
          <Typography variant="h5" gutterBottom style={{fontFamily: "Jost, sans-serif" }}>
          Email
          </Typography>
          <Divider sx={{ 
  fontWeight: '600', 
  color: '#91BF38',  // Sets the color of the divider line
  borderColor: '#2F85DC', // Ensures the line is green
  borderWidth: '1px' // Optionally, you can adjust the thickness of the divider line
}} />
          <Button    sx={{
    color: '#666',
    fontFamily: "Jost, sans-serif",
    mt: 2,
    textTransform:'capitalize',
    fontSize: '16px',
    '&:hover': {
      color: '#4B7BF4', // Change color on hover
    },
  }}>
          Techsnyper.sales@gmail.com
        
          </Button>
          <Button    sx={{
    color: '#666',
    fontFamily: "Jost, sans-serif",
    mt: 0,
    textTransform:'capitalize',
    fontSize: '16px',
    '&:hover': {
      color: '#4B7BF4', // Change color on hover
    },
  }}>
          Info@techsnyper.in
        
          </Button>
        </Box>
      </Grid>

      {/* Section 2 */}
      <Grid item xs={12}  md={2.5}>
        <Box sx={{ textAlign: 'justify' }}>
          <Typography variant="h5" gutterBottom style={{fontFamily: "Jost, sans-serif" }}>
            Phone
          </Typography>
          <Divider sx={{ 
  fontWeight: '600', 
  color: '#91BF38',  // Sets the color of the divider line
  borderColor: '#2F85DC', // Ensures the line is green
  borderWidth: '1px' // Optionally, you can adjust the thickness of the divider line
}} />
          <Button    sx={{
    color: '#666',
    fontFamily: "Jost, sans-serif",
    mt: 2,
    fontSize: '16px',
    '&:hover': {
      color: '#4B7BF4', // Change color on hover
    },
  }}>
          +91 9007808896 
         
          </Button>
         
          <Button    sx={{
    color: '#666',
    fontFamily: "Jost, sans-serif",
    
    fontSize: '16px',
    '&:hover': {
      color: '#4B7BF4', // Change color on hover
    },
  }}>
          +91 8797326392
          </Button>
        </Box>
      </Grid>

      {/* Section 3 */}
      <Grid item xs={12}  md={2.5}>
        <Box sx={{ textAlign: 'justify' }} style={{fontFamily: "Jost, sans-serif" }}>
          <Typography variant="h5" gutterBottom>
          	Office Hours
          </Typography>
          <Divider sx={{ 
  fontWeight: '600', 
  color: '#91BF38',  // Sets the color of the divider line
  borderColor: '#2F85DC', // Ensures the line is green
  borderWidth: '1px' // Optionally, you can adjust the thickness of the divider line
}} />
          <Typography variant="body1" sx={{ color: '#666',fontFamily: "Jost, sans-serif",mt:2  }}>
          Monday to Friday, 9:00 AM – 6:00 PM
          </Typography>
        </Box>
      </Grid>

      {/* Section 4 */}
      <Grid item xs={12}  md={2.5} style={{fontFamily: "Jost, sans-serif" }}>
        <Box sx={{ textAlign: 'justify' }}>
          <Typography variant="h5" gutterBottom>
          	Address
          </Typography>
          <Divider sx={{ 
  fontWeight: '600', 
  color: '#91BF38',  // Sets the color of the divider line
  borderColor: '#2F85DC', // Ensures the line is green
  borderWidth: '1px' // Optionally, you can adjust the thickness of the divider line
}} />
          <Typography variant="body2" sx={{ color: '#666',fontFamily: "Jost, sans-serif",mt:2 }}>
          Akandakeshari Pump, Shapoorji, New Town, Action Area-III, Kolkata, PIN- 700135, West Bengal
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={1}></Grid>
    </Grid>
</div>

<div>
<Grid container  sx={{ justifyContent: 'center', padding: '20px' }}>
      {/* First Section: Form */}
     

      {/* Second Section: Location Map */}
      <Grid item xs={12} sm={12} sx={{ padding: '20px', marginTop:'-80px' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom style={{  fontFamily: 'Jost, sans-serif',}}>Our Location</Typography>

          {/* Embedded Map */}
          <Box sx={{ width: '100%', height: '300px', marginBottom: '20px' }}>
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.3972778768116!2d88.51043157499114!3d22.56424003327726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020afe019870d5%3A0xa11f296b1e8bec2d!2sIndianOil!5e0!3m2!1sen!2sin!4v1734974782869!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: "1px solid black",borderRadius:"20px" }}
  allowFullScreen={true} // Corrected: Set to boolean true
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

          </Box>

          {/* Address */}
          <Typography variant="body1" sx={{ color: '#666', fontFamily: 'Jost, sans-serif' }}>
          Akandakeshari Pump, Shapoorji, New Town, Action Area-III, Kolkata, PIN- 700135, West Bengal
          </Typography>
        </Box>
      </Grid>
    </Grid>
</div>

<div>
<Grid
  container
  sx={{
    background: 'radial-gradient(circle at 10% 20%, rgb(59, 149, 237) 0%, rgb(7, 91, 173) 90%)',
    color: '#ffffff',
    padding: '20px',
    
  }}
>
  <Grid item xs={12}>
    {/* Heading */}
    <Typography
      variant="h4"
      gutterBottom
      sx={{ fontFamily: 'Jost, sans-serif', textAlign: 'justify', marginBottom: '20px' }}
    >
      Dedicated to Your Success
    </Typography>

    {/* Text */}
    <Typography
      variant="body1"
      sx={{ textAlign: 'justify', fontFamily: 'Jost, sans-serif', lineHeight: 1.8 }}
    >
      Your journey to Engineering mastery is our top priority. Whether you need immediate assistance, ongoing guidance, or simply wish to provide feedback,<br />Techsnyper is here to support you every step of the way.
    </Typography>
  </Grid>
</Grid>

</div>

<Grid container spacing={2} sx={{ padding: '10px',background:'#F2F1EE', }}>
      {/* First section (Heading, 6/12 width) */}
      <Grid item xs={12} md={4}>
        <Box sx={{ textAlign: 'center',marginTop:'20px',}}>
          <Typography variant="h1" gutterBottom style={{fontFamily: "Jost, sans-serif",fontSize:'80px'}}>
          FAQs
          </Typography>
        </Box>
      </Grid>

      {/* Second section (Body text in card, 6/12 width) */}
      <Grid item xs={12} sm={7}>
        <Card sx={{marginTop:'20px',borderRadius:'40px 0 40px 0'  }}>
          <CardContent style={{padding:'20px'}}>
            <Typography variant="body1" sx={{ color: '#666',fontFamily: "Jost, sans-serif" }}>
            Check out our Frequently Asked Questions (FAQs) section for quick answers to common queries about our services, programs, and more.
            </Typography>
            <br />
            <Typography variant='body1' style={{fontFamily: "Jost, sans-serif",color:'#666'}}>
            We specialize in training programs that bridge the gap between knowledge and action. By nurturing both the skillset and mindset necessary for financial mastery, we equip our learners with practical, real-world solutions and the confidence to make sound decisions.
            </Typography>
          </CardContent>
        </Card>
        <br /><br />
      </Grid>
      <Grid item xs={12} md={1}></Grid>
     
    </Grid>

      <Footer/>
    </div>
  )
}

export default index