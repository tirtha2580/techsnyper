import React, { useState } from 'react';
import { Grid, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Correct import
import { isMobile } from 'react-device-detect';

const CoreContent = () => {
  // State to control the expanded state of the accordion
  const [expanded, setExpanded] = useState('panel1'); // panel1 is the first accordion (default open)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false); // Toggle the state
  };

  return (
    <Grid spacing={4} container sx={{ height: 'auto', padding: '20px' }}>
      {/* First section (Blank, 1/12 of the width) */}

      {/* Second section (Heading and Text, 5/12 of the width) */}
      <Grid item xs={12} md={6}>
        <Box sx={{ textAlign: 'justify', marginTop: '20px' }} >
          <Typography  gutterBottom style={{ fontFamily: "Jost, sans-serif", color:'black',fontSize:isMobile?"22px":"34px",fontWeight:isMobile?'600':'0',textAlign:isMobile?'center':'justify' }} >
            What We Offer in Electrical Innovation
          </Typography>
          <br />
          <Typography variant="body1" sx={{ color: '#666', fontFamily: "Jost, sans-serif",padding:'0px' }} >
            Our programs are designed for those interested in mastering electrical systems and technologies. Whether you’re learning the basics of electrical Automation,Measurement,Installation,Programming and Circuit design, or looking to specialize in power distribution and advanced electrical engineering, we have a program suited for your goals.
          </Typography>
        </Box>
      </Grid>

      {/* Third section (Accordion, 6/12 of the width) */}
      <Grid item xs={12} md={6} mb='20px'>
        <Box sx={{ marginTop: '20px' }}>
          {/* First Accordion (By default expanded) */}
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <Typography variant="h6" style={{ fontFamily: "Jost, sans-serif",fontWeight:'600' }}>Commercial Electrical Systems</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography style={{ fontFamily: "Jost, sans-serif" }}>
      Explore the fundamentals of electrical systems in commercial buildings and Power Plants and Setup  PLC Installation , including power distribution, Circut design, and energy-efficient solutions for businesses.
    </Typography>
  </AccordionDetails>
</Accordion>


          {/* Second Accordion */}
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" style={{ fontFamily: "Jost, sans-serif",fontWeight:'600'}}>Industrial Electrical Systems</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' style={{ fontFamily: "Jost, sans-serif" }}>
                Gain knowledge on designing and maintaining electrical systems in industrial settings, including power distribution, motor control, and automation.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" style={{ fontFamily: "Jost, sans-serif",fontWeight:'600'}}>Renewable Energy Systems</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' style={{ fontFamily: "Jost, sans-serif" }}>
                Understand how solar, wind, and other renewable energy systems work, and learn how to design, install, and maintain these systems.
              </Typography>
            </AccordionDetails>
          </Accordion>
          
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" style={{ fontFamily: "Jost, sans-serif",fontWeight:'600'}}>Electrical Troubleshooting and Repair</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' style={{ fontFamily: "Jost, sans-serif" }}>
                Master the skills needed to diagnose and repair electrical problems, from residential to commercial electrical systems.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CoreContent;
