import React from 'react';
import { Box, Grid, Button,Typography, Card, CardContent ,CardMedia} from '@mui/material';
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// Sample data for the cards
const cardData = [
    { id: 1, title: 'Automation', description: 'Automation refers to the process of using technology, systems, or machines to perform tasks or processes with minimal human intervention. It is widely applied across various industries to improve efficiency, accuracy, and productivity while reducing costs and repetitive manual efforts.', image: 'automation.jpg' },
    { id: 2, title: 'Pressure Measurement', description: 'Pressure Measurement refers to the process of determining the force exerted by a fluid (liquid or gas) on a surface per unit area. It is an essential parameter in various fields, including engineering, healthcare, meteorology, and industrial applications.', image: '/pressure manag.jpg' },
    { id: 3, title: 'Temperature Measurement', description: 'Temperature Measurement refers to the process of determining the temperature of an object or environment, which is a critical parameter in a wide range of applications, from industrial processes to healthcare. Temperature is a measure of the average kinetic energy of particles in a substance, and its accurate measurement is vital for maintaining optimal conditions in many systems.', image: '/temperature.jpg' },
    { id: 4, title: 'Air Velocity Measurement', description: 'Air Velocity Measurement refers to determining the speed at which air or any other gas moves through a particular space. It is a crucial parameter in various applications such as HVAC (Heating, Ventilation, and Air Conditioning) systems, environmental monitoring, industrial processes, and aerodynamics. Accurately measuring air velocity helps optimize airflow, improve energy efficiency, and ensure safety in many systems.', image: '/air velocity.jpg' },
  ];  
  

const App = () => {
  const router = useRouter();

  const handleClickGallery = () => {
    router.push('/gallery'); 
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',  
        background:'#F5F5F5'
      }}
    >
      {/* Heading */}
<br />

      <Typography variant="h6"  color='#5894E5' style={{  fontFamily: "Jost, sans-serif",fontSize:'20px',}}>
      We Are Experts in The Industry
      </Typography>
      <br />
      <Typography variant="h3"  color='#002F49' style={{  fontFamily: "Jost, sans-serif",fontSize:'34px',fontWeight:'700'}}>
      We Take Pride in Our Work
      </Typography>

      {/* Text */}
      <Typography  color='grey' style={{  fontFamily: "Jost, sans-serif",fontSize:'16px'}}>
      We adhere to strict safety standards and regulations, and we are committed to providing our customers with the highest level of service and professionalism.
      </Typography>

      {/* Grid Container for Cards */}
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 4,
        minHeight: '65vh', 
        padding:4
      }}
    >
      {/* Grid Container for Cards */}
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {cardData.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.id}>
            <Card
              sx={{
                
                position: 'relative',
                overflow: 'hidden',
                height: 300, // Set a fixed height for all cards
                display: 'flex',
                flexDirection: 'column', // Ensure content stretches vertically
                '&:hover .hoverContent': {
                  opacity: 1,
                  transform: 'translateY(0%)',
                },
              }}
            >
              {/* Card Image */}
              <CardMedia
                component="img"
                height="150"
                image={card.image}
                alt={card.title}
              />

              {/* Card Name */}
              <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                <Typography variant="h6" style={{ fontWeight: '600', fontFamily: "Jost, sans-serif", color: "#4A7BEF" }}>
                  {card.title}
                </Typography>
              </CardContent>

              {/* Hover Content */}
              <Box
                className="hoverContent"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  transform: 'translateY(100%)',
                  opacity: 0,
                  transition: 'transform 0.5s ease, opacity 0.5s ease',
                }}
              >
                <Typography style={{ fontSize: '15px', textAlign: 'center', fontFamily: "Jost, sans-serif" }}>
                  {card.description}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
     <div style={{margin:'auto'}}>
     <Button variant="outlined" onClick={() => handleClickGallery()} style={{fontFamily: "Jost, sans-serif",    textTransform: "capitalize",fontWeight:'600',borderRadius:'20px'}}>View more &nbsp;<ArrowForwardIcon/></Button>
     </div>
    </Box>
    </Box>
  );
};

export default App;
