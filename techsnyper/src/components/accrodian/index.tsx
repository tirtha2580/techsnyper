import React, { useState } from 'react';
import { Grid, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Correct import

const CoreContent = () => {
  // State to control the expanded state of the accordion
  const [expanded, setExpanded] = useState('panel1'); // panel1 is the first accordion (default open)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false); // Toggle the state
  };

  return (
    <Grid spacing={4} container sx={{ height: 'auto', padding: '20px' }}>
      {/* First section (Blank, 1/12 of the width) */}
      <Grid item xs={12} md={1}>
        {/* Blank section */}
      </Grid>

      {/* Second section (Heading and Text, 5/12 of the width) */}
      <Grid item xs={12} md={5}>
        <Box sx={{ textAlign: 'justify', marginTop: '20px' }} >
          <Typography variant="h4" gutterBottom style={{ fontFamily: "Jost, sans-serif" }} >
            What We Do
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', fontFamily: "Jost, sans-serif" }}>
          To evolve as a leading Process Solution Company, by giving impeccable product quality, end-to-end solutions, Turn-Key solution and services in all fields of Process Automation with a view to achieving the highest level of customer expectation.
          </Typography>
        </Box>
      </Grid>

      {/* Third section (Accordion, 6/12 of the width) */}
      <Grid item  xs={12} md={6}>
        <Box sx={{ marginTop: '20px' }}>
          {/* First Accordion (By default expanded) */}
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" style={{ fontFamily: "Jost, sans-serif" }}>Technological Innovation </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontFamily: "Jost, sans-serif" }}>
              Techsnyper brings Innovation in technology to provide our clients with the best technical solutions providing turnkey solutions for Process Automation.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Second Accordion */}
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" style={{ fontFamily: "Jost, sans-serif"}}>Timely Delivery </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' style={{ fontFamily: "Jost, sans-serif" }}>
              Techsnyper has a proven track record of delivering our projects before time to help our clients kick start their projects with excellent service support.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" style={{ fontFamily: "Jost, sans-serif"}}>Infrastructure  </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' style={{ fontFamily: "Jost, sans-serif" }}>
              Techsnyper has the latest and most sophisticated infrastructure of the industry to make sure we deliver the best because our clients deserve it.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" style={{ fontFamily: "Jost, sans-serif"}}>Community Events  </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' style={{ fontFamily: "Jost, sans-serif" }}>
              Engage in group learning, discussions, and workshops with like-minded individuals.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CoreContent;
