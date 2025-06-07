import React from 'react';
import { Grid, Card, CardContent, Typography, List, ListItem } from '@mui/material';
import WebhookIcon from '@mui/icons-material/Webhook';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SpeedIcon from '@mui/icons-material/Speed';
import ScaleIcon from '@mui/icons-material/Scale';

interface MyCardProps {
  title: string;
  points?: string[];
  icon?: React.ReactNode;
}

const MyCard: React.FC<MyCardProps> = ({ title, points = [], icon }) => (
  <Card sx={{ height: '100%', backgroundColor: '#F4F4F4', position: 'relative' }}>
    <CardContent>
      <List sx={{ padding: 0 }} style={{ marginBottom: '85px' }}>
        {points.length > 0 ? (
          points.map((point, index) => (
            <ListItem key={index} sx={{ padding: '4px 0' }}>
              <Typography variant="body2" sx={{ fontFamily: 'Jost, sans-serif',color:'grey' }}>
                {point}
              </Typography>
            </ListItem>
          ))
        ) : (
          <Typography variant="body2" sx={{ fontFamily: 'Jost, sans-serif' }}>
            No points available.
          </Typography>
        )}
      </List>
      <Typography 
        variant="h5" 
        component="div" 
        sx={{ 
          fontFamily: 'Jost, sans-serif', 
          position: 'absolute', 
          bottom: 40, 
          left: 16, 
          fontWeight: '500' 
        }}
      >
        {title}
      </Typography>
      {icon && (
        <div style={{ position: 'absolute', top: 8, right: 8 }}>
          {icon}
        </div>
      )}
    </CardContent>
  </Card>
);

const App: React.FC = () => {
  const cardTitles = [
    {
      title: "Visualize & Strategy",
      points: [
        "Digital Transformation",
        "Research & Development",
        "Product Strategy",
        "Legacy App Modernisation"
      ],
      icon: <WebhookIcon sx={{ fontSize: 40, color: 'grey' }} />
    },
    { 
      title: "Design",  
      points: [
        "UI Design",
        "UX Design",
        "UX Audits",
        "Product Workshop",
      ],
      icon: <DesignServicesIcon sx={{ fontSize: 40, color: 'grey' }} /> 
    },
    { 
      title: "Development",
      points: [
        "Web App Development",
        "Website Development",
        "Mobile App Development",
        "Product Development",
        "SaaS Development",
        "DevOps",
        "MVP Development"
      ],
      icon: <DeveloperModeIcon sx={{ fontSize: 40, color: 'grey' }} />  
    },
    { 
      title: "Scale & IT Consulting",
      points: [
        "Cloud Services",
        "Legacy App Modernization",
      ],
      icon: <SpeedIcon sx={{ fontSize: 40, color: 'grey' }} />  
    },
    { 
      title: "Testing & QA, Maintain",
      points: [
        " ",
      ],
      icon: <ScaleIcon sx={{ fontSize: 40, color: 'grey' }} />  
    }
  ];

  return (
    <div style={{ padding:'30px' }}>
      <Typography variant="h3" component="h1" sx={{ marginTop: 4, fontFamily: 'Jost, sans-serif',color:'#000'}}>
        Our <span style={{color:'red'}}> Services</span>
      </Typography>
      <Grid 
        container 
        justifyContent="center"
        spacing={2}
        sx={{ marginTop: 4 }}
      >
        {cardTitles.map((card, index) => (
          <Grid item xs={12} md={2} key={index}>
            <MyCard title={card.title} points={card.points} icon={card.icon} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default App;
