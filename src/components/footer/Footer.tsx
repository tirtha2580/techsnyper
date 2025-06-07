import React from 'react';
import { Grid, Paper, Typography, Button,Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const MyGridComponent = () => {


  const isMobile = useMediaQuery('(max-width:600px)');

  const router = useRouter();
  const handleImageClick = () => {
    router.push('/'); 
  };
  return (
    <Grid 
      container 
      spacing={2} 
      sx={{ zIndex: 1, position: 'relative' }} 
      style={{backgroundColor:'#3682AE'}}
    >
       <Grid item md={4} style={{paddingLeft:'30px',marginTop:'40px'}}>
      
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <img 
            src="/footerlogo.jpg"  
            alt="Sample"
            onClick={handleImageClick}
            style={{ height:'200px', marginBottom: '0',cursor:'pointer' }} 
          />
        </div>
        <br />
          <Typography variant="body1" style={{ marginBottom: '16px',color:'#fff',fontSize:'18px'}} sx={{ fontFamily: "'Jost', sans-serif"}}>
         Copyright © 2024  Techsnyper Pvt Ltd — All rights reserved -
    <span>  Electrical Equipments Development Company.</span>
          </Typography>

        {/* <div style={{marginTop:'40px'}}>
        <Link
      href="#"
      underline="hover"
      sx={{
        color:'#fff',
        '&:hover': {
          color: 'green', 
        },
      }}
    >
      Privacy Policy
    </Link>
        </div> */}
          
        
      </Grid>
      <Grid item md={4}>
      <Grid container spacing={2}>
            <Grid item xs={12} md={6} style={{marginTop:'20px',marginLeft: isMobile ? "0px":'0px'}}>
            <Typography variant="h6" gutterBottom  sx={{
        fontFamily: "'Jost', sans-serif",fontSize:'30px',marginTop:'20px',color:'#fff',textAlign: isMobile ? "center":""
      }}>
  Quick Links
          </Typography>
          <Link href="/" variant="body2" style={{ display: 'block',fontSize:'16px',fontFamily: "'Jost', sans-serif", marginBottom: '8px',color:'#fff', textAlign: isMobile ? "center":"left" }}>
             Home
           </Link>
           <Link href="/about" variant="body2" style={{ display: 'block',fontSize:'16px',fontFamily: "'Jost', sans-serif", marginBottom: '8px',color:'#fff',textAlign: isMobile ? "center":"left" }}>
            About
           </Link>
           <Link href="/products" variant="body2" style={{ display: 'block',fontSize:'16px',fontFamily: "'Jost', sans-serif", marginBottom: '8px',color:'#fff',textAlign: isMobile ? "center":"left" }}>
             Products
           </Link>
           <Link href="/contact" variant="body2" style={{ display: 'block',fontSize:'16px',fontFamily: "'Jost', sans-serif", marginBottom: '8px',color:'#fff',textAlign: isMobile ? "center":"left" }}>
             Conatct
           </Link>
           <Link href="/ourclients" variant="body2" style={{ display: 'block',fontSize:'16px',fontFamily: "'Jost', sans-serif", marginBottom: '8px',color:'#fff',textAlign: isMobile ? "center":"left" }}>             
             Our Clients
           </Link>
           <Link href="/gallery" variant="body2" style={{ display: 'block',fontSize:'16px',fontFamily: "'Jost', sans-serif", marginBottom: '8px',color:'#fff',textAlign: isMobile ? "center":"left" }}>
             Gallery
           </Link>
           


          

            </Grid>
            <Grid item xs={12} md={6}style={{marginTop:'20px',marginLeft: isMobile ? "0px":'-16px'}}>
            <Typography variant="h6" gutterBottom  sx={{
        fontFamily: "'Jost', sans-serif",fontSize:'30px',marginTop:'20px',color:'#fff',textAlign: isMobile ? "center":"left"
      }}>
Contacts
          </Typography>
          <Link 
  href="mailto:Info@techsnyper.in" 
  variant="body1" 
  style={{ 
    display: 'block', 
    fontSize: '16px', 
    fontFamily: "'Jost', sans-serif", 
    marginBottom: '8px', 
    color: '#fff', 
    textAlign: isMobile ? "center" : "left" 
  }}
>
  Info@techsnyper.in
</Link>

           <Link href="mailto:Techsnyper.sales@gmail.com" variant="body1" style={{ display: 'block',fontSize:'16px',fontFamily: "'Jost', sans-serif", marginBottom: '8px',color:'#fff',textAlign: isMobile ? "center":"left" }}>
           Techsnyper.sales@gmail.com
           </Link>
           <Typography variant="body1" style={{ marginBottom: '16px',fontSize:'16px',fontFamily: "'Jost', sans-serif",color:'#fff',textAlign: isMobile ? "center":"left" }}>
          +91 9007808896/ 8797326392
         </Typography>

           <Typography variant="body1" style={{ marginBottom: '16px',fontSize:'16px',fontFamily: "'Jost', sans-serif",color:'#fff',textAlign: isMobile ? "center":"left" }}>
           Akandakeshari Pump, Shapoorji, New Town, Action Area-III, Kolkata, PIN- 700135, West Bengal
         </Typography>
            </Grid>
          </Grid>
       
      </Grid>
      

      <Grid item xs={12} md={4}>
      <Typography variant="h6" gutterBottom  sx={{
        fontFamily: "'Jost', sans-serif",fontSize:'30px',marginTop:'30px',color:'#fff',textAlign: isMobile ? "center":"center"
      }}>
      We are on social media
          </Typography>
      {/* <Grid container spacing={2}>
            
      <Grid 
  item 
  xs={12}   
  style={{
    display: 'flex',
    marginTop: '0px',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0px', // Add gap between the buttons
  }}
>
  <Button
    fullWidth
    sx={{
      marginTop: '0px',
      borderRadius: '25px',
      fontSize: '16px',
      fontFamily: "'Jost', sans-serif",
      color: '#fff',
    }}
  >
    <LinkedInIcon style={{ fontSize: '50px' }} />
  </Button>

  <Button
    fullWidth
    sx={{
      borderRadius: '25px',
      color: '#fff',
      fontFamily: "'Jost', sans-serif",
    }}
  >
    <FacebookIcon style={{ fontSize: '50px' }} />
  </Button>
</Grid>

          </Grid> */}
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
          <Button 
  onClick={() => window.open("https://www.linkedin.com")} 
  style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
>
  <LinkedInIcon style={{ fontSize: '50px', color: '#fff' }} />
</Button>

  <Button 
  onClick={() => window.open("https://www.facebook.com",)} 
  style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
>
  <FacebookIcon style={{ fontSize: '50px', color: '#fff' }} />
</Button>

          </div>
          
        
      </Grid>
    </Grid>
  );
};

export default MyGridComponent;

