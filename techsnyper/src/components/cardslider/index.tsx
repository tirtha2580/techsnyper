import React, { useState, useEffect } from 'react';
import { Grid, Button, Card, CardContent, Typography } from '@mui/material';

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample card data
  const cards = [
    { id: 1, content: 'Card 1' },
    { id: 2, content: 'Card 2' },
    { id: 3, content: 'Card 3' },
    { id: 4, content: 'Card 4' },
    { id: 5, content: 'Card 5' },
    { id: 6, content: 'Card 6' },
  ];

  const slideLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= cards.length - 3 ? 0 : prevIndex + 1
    );
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      slideRight();
    }, 5000); // Change cards every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]); // Dependency on currentIndex ensures the interval works correctly

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ height: 'auto' }}
    >
        <Grid item xs={1}>
          <Button
            variant="contained"
            onClick={slideLeft}
            disabled={currentIndex === 0}
            fullWidth
          >
            Prev
          </Button>
        </Grid>

        <Grid item xs={10}>
        <Grid container spacing={2}>
    {/* Left Section */}
    <Grid item xs={6}>
      <Card>
        <CardContent>
          <Typography variant="h6" textAlign="center">
            Left Section Content
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={6}>
      <Card>
        <CardContent>
          <Typography variant="h6" textAlign="center">
            Left Section Content
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={6}>
      <Card>
        <CardContent>
          <Typography variant="h6" textAlign="center">
            Right Section Content
          </Typography>
        </CardContent>
      </Card>
    </Grid>
      </Grid>
       </Grid>

        <Grid item xs={1}>
          <Button
            variant="contained"
            onClick={slideRight}
            disabled={currentIndex >= cards.length - 3}
            fullWidth
          >
            Next
          </Button>
        </Grid>

        
    
    </Grid>
  );
};

export default CardSlider;
