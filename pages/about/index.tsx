import React, { useState } from 'react';
import Header from "../../src/components/navbar/Navbar";
import Footer from "../../src/components/footer/Footer";
import { Grid, Typography,Box,CardContent,Card, Breadcrumbs, Link,Button,Container,IconButton} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MobileMenu from 'src/components/mobileMenu/MobileMenu';
import { useMediaQuery } from '@mui/material';
import Accordiabn from '../../src/components/accrodian';
import BodyText from  '../../src/components/bodytext';
import CircleIcon from '@mui/icons-material/Circle';
import { useRouter } from 'next/router';


const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const isMobile = useMediaQuery('(max-width:600px)');
  const router = useRouter();
  const redirectContact = ()=>{
    router.push('/contact')
  }

  const sections = [
    {
      image: "community.png", // Replace with your image URL
      heading: "Community",
      text: "The electrical industry thrives on collaboration, innovation, and shared expertise. At its core, the concept of community plays a pivotal role in driving progress and ensuring the safety and efficiency of electrical systems worldwide.",
    },
    {
      image: "technology.png", // Replace with your image URL
      heading: "Technology",
      text: "Technological advancements in automation, instruments, and measurements are revolutionizing the electrical industry. These innovations enhance precision, efficiency, and reliability, ensuring that systems operate seamlessly while reducing downtime and errors.",
    },
    {
      image: "/Collaboration.png", // Replace with your image URL
      heading: "Collaboration",
      text: "Collaboration lies at the heart of innovation and progress in the electrical industry. By working together, professionals, organizations, and stakeholders can overcome challenges, drive technological advancements, and deliver sustainable solutions.",
    },
    {
      image: "/innovation.png", // Replace with your image URL
      heading: "Innovation",
      text: "Innovation is the cornerstone of the electrical industry, enabling advancements that shape modern life. From enhancing energy efficiency to pioneering renewable technologies, the electrical sector thrives on groundbreaking ideas and transformative solutions.",
    },
    {
      image: "/installtion.png", // Replace with your image URL
      heading: "Installation",
      text: "Electrical installation is a critical aspect of the industry, serving as the foundation for reliable, efficient, and safe systems. From residential projects to large-scale industrial setups, proper installation ensures that electrical systems meet operational and safety standards.",
    },
  ];

  return (

    <div >
      <Header />
      <MobileMenu/>
      {/* <Breadcrumbs
        aria-label="breadcrumb"
        style={{
          fontFamily: "Jost, sans-serif",
          backgroundColor: "#F2F1EE",
          padding: "10px",
        }}
      >
        <Link href="/" color="inherit">Home</Link>
        <Typography color="text.primary" style={{ fontFamily: "Jost, sans-serif" }}>
          About Us
        </Typography>
      </Breadcrumbs> */}
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
              <span style={{ marginLeft: "10px" }}>About</span> 
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
         <Button variant="contained" disabled style={{fontFamily: "Jost, sans-serif",color:"#4B7BF3",background:'#fff',borderRadius:'20px',border:"1px solid #4B7BF3"}}>
          About Company
        </Button>
        <br />
        <Typography variant="h5" gutterBottom style={{fontFamily: "Jost, sans-serif",padding:'20px',textAlign:'center'}}>
        Techsnyper is serving various  industries for innovative</Typography>
    
       
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
        <Typography variant="body2" style={{fontFamily: "Jost, sans-serif",padding:'15px'}}>
        Techsnyper technology private limited we are passionate about transforming how individuals perceive and manage Reliable Process Solution. Techsnyper is a  spread across the  in industry for Process Automation, Building Automation and many more.We are supporting & delivering various products & solution for process automation solutions. We offer product-based solutions such as Industrial Field Instruments, Integrated Process Control Systems (DCS - PLC,Scada).
        </Typography>
      </Grid>
      <Grid item xs={12} md={1}></Grid>
    </Grid>
    <br />

<div style={{padding:'40px',background:"#F2F1EE"}}>
<Grid container spacing={2} justifyContent="center" >
      {sections.map((section, index) => (
        <Grid item xs={12} sm={4} md={2} key={index} display="flex" flexDirection="column" alignItems="center">
<div style={{height:'90px',width:'90px',background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50%',padding:'20px'}}>
<img src={section.image} alt={section.heading} style={{  marginBottom: '8px' }} />
</div>
          <Typography variant="h6" align="center" style={{fontFamily: "Jost, sans-serif",}}>{section.heading}</Typography>
          <Typography variant="body2" align="center" style={{fontFamily: "Jost, sans-serif",}}>{section.text}</Typography>
        </Grid>
      ))}
    </Grid>
</div>
  
  <Accordiabn/>
<br />
<BodyText/>

<Container sx={{ padding: '20px' }}>
      {/* Heading */}
      <Box sx={{ textAlign: 'justify', marginBottom: '20px', }}>
        <Typography variant="h4" gutterBottom style={{fontFamily: "Jost, sans-serif",}}>
        Why We Focus on Techsnyper technology private limited 
        </Typography>
      </Box>

      {/* Body Text */}
      <Box sx={{ textAlign: 'justify' }}>
        <Typography variant="body1" sx={{ color: '#666',fontFamily: "Jost, sans-serif", }}>
        Techsnyper manufacture, install and commission all type of Electrical, Electronics and Instrumentation panels of the Highest quality for a variety of indoor and outdoor industrial applications for all process & production industries (i.e. System Automation Control Panel , VFD Panel, Distribution Panel, APFC Panel, Control & Junction Box, Control Desk Panel, Motor & Power Control Centre Panel, Meter Panel etc.).
        </Typography>
      </Box>
    </Container>
<br />
<Container sx={{ padding: '20px',borderRadius:"20px  20px 0 0", display: 'flex', flexDirection: 'column', alignItems: 'center',background:'radial-gradient(circle at 10% 20%, rgb(59, 149, 237) 0%, rgb(7, 91, 173) 90%)',width:'100%' }}>
      {/* Heading */}
      <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
        <Typography variant="h3" gutterBottom style={{fontFamily: "Jost, sans-serif", color:'#fff' }}>
          Our Core Values
        </Typography>
      </Box>

      {/* Body Text */}
      <Box sx={{ textAlign: 'center', marginBottom: '20px', maxWidth: '600px' }}>
        <Typography variant="body1" sx={{ color: '#fff',fontFamily: "Jost, sans-serif" }}>
        To offer the quality offerings for the highest satisfaction to all our clients while maintaining business standards through the right management practices for serving the interest of its stakeholders.
        </Typography>
      </Box>
          <br />
      <Button variant="outlined"  style={{fontFamily: "Jost, sans-serif",background:'#fff',borderRadius:'20px'}} onClick={()=>redirectContact()}>Contact Us</Button>
        <br />
      {/* Circle Icons with Points */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '600px', }}>
        <Box sx={{ textAlign: 'center' }}>
          <IconButton>
            <CircleIcon sx={{ fontSize: 20, color: '#fff' }} />
          </IconButton>
          <Typography variant="body1" style={{fontFamily: "Jost, sans-serif", color: '#fff'}}>Production & Solution</Typography>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <IconButton>
            <CircleIcon sx={{ fontSize: 20, color: '#fff' }} />
          </IconButton>
          <Typography variant="body1" style={{fontFamily: "Jost, sans-serif", color: '#fff'}}>Installation & Manufacturing</Typography>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <IconButton>
            <CircleIcon sx={{ fontSize: 20, color: '#fff' }} />
          </IconButton>
          <Typography variant="body1" style={{fontFamily: "Jost, sans-serif", color: '#fff'}}>Transform Your Future</Typography>
        </Box>
      </Box>
    </Container>

    
      
      <Footer />
    </div>
  );
};

export default About;
