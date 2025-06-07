import React from 'react';
import { Grid, Typography, Box, Card, CardContent } from '@mui/material';

const CoreContent = () => {
  return (
    <Grid container spacing={2} sx={{ padding: '10px',background:'radial-gradient(circle at 10% 20%, rgb(59, 149, 237) 0%, rgb(7, 91, 173) 90%)'}}>
      {/* First section (Heading, 6/12 width) */}
      <Grid item xs={12} md={4}>
        <Box sx={{ textAlign: 'center',marginTop:'20px',}}>
          <Typography variant="h2" gutterBottom style={{fontFamily: "Jost, sans-serif",fontSize:'80px',color:'#fff'}}>
          Who <br /> We <br /> Are
          </Typography>
        </Box>
      </Grid>

      {/* Second section (Body text in card, 6/12 width) */}
      <Grid item xs={12} sm={7}>
        <Card sx={{marginTop:'20px',borderRadius:'40px 0 40px 0'  }}>
          <CardContent style={{padding:'40px'}}>
            <Typography variant="body1" sx={{ color: '#666',fontFamily: "Jost, sans-serif" }}>
            We are authorized Channel Partners and System Integrators of Honeywell for Process Control Instrumentation. All the products supplied by us are backed up by Honeywell commitment of quality & performance guarantee.
Techsnyper offers the industry&apos;s broadest product portfolio, ranging from Distributed Control Systems (DCS) and advanced controllers, to best-in-class transmitters, actuators, recorders, sensors Gas Detection and Thermal products for the process environment.
            </Typography>
            <br />
            <Typography variant='body1' style={{fontFamily: "Jost, sans-serif",color:'#666'}}>
            Techsnyper manufacture, install and commission all type of Electrical, Electronics and Instrumentation panels of the Highest quality for a variety of indoor and outdoor industrial applications for all process & production industries.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={1}></Grid>
    </Grid>
  );
};

export default CoreContent;
