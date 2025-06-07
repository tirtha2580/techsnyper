import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Icon } from "@mui/material";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import CheckIcon from "@mui/icons-material/Check";
import TerminalIcon from "@mui/icons-material/Terminal";
import CodeIcon from "@mui/icons-material/Code";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import SpeedIcon from "@mui/icons-material/Speed";
import Marquee from "react-fast-marquee";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import { styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const MyGridContainer = () => {

  const isMobile = useMediaQuery('(max-width:600px)');
  
  return (
    <div style={{ backgroundColor: "#F2F1EE", marginTop: "60px" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} style={{background:"#ffffff"}}>
          <Typography
            style={{
              fontSize: isMobile ? "25px" : "230px",
              color: "#F2F1EE",
              marginTop: isMobile?"0px":"-110px",
              marginBottom:"-114px",
              textAlign: "center",
              fontFamily: "Jost, sans-serif",
              fontWeight: isMobile ? "600" : "",
            }}
          >
            who we are
          </Typography>
        </Grid>      
      </Grid>

      {/* <div
        style={{
          backgroundColor: "#F2F1EE",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Grid container spacing={2} style={{ maxWidth: "1200px" }}>
          {" "}
          <Grid item xs={12} md={4}>
            <Card variant="outlined" style={{ borderRadius: "15px" }}>
              <CardContent style={{ textAlign: "justify" }}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <PeopleAltOutlinedIcon
                    style={{ color: "grey", fontSize: "40px" }}
                  />
                </div>

                <Typography
                  variant="h5"
                  component="h5"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    color: "#092165",
                  }}
                >
                  <span style={{ color: "red" }}>Client-oriented </span>{" "}
                  solutions
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: "grey", fontFamily: "Jost, sans-serif" }}
                >
                  Fintech & healthcare software development with a <br /> human
                  touch. We develop feature-packed <br /> solutions that are
                  easy to use.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card variant="outlined" style={{ borderRadius: "15px" }}>
              <CardContent style={{ textAlign: "justify" }}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <CodeOutlinedIcon
                    style={{
                      color: "grey",
                      fontSize: "40px",
                      alignItems: "end",
                    }}
                  />
                </div>

                <Typography
                  variant="h5"
                  component="h5"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    color: "#092165",
                  }}
                >
                  <span style={{ color: "red" }}> Custom software </span>{" "}
                  development
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: "grey", fontFamily: "Jost, sans-serif" }}
                >
                  We work within a learn-build-iterate loop. With <br />
                  flexibility built in, we can make adjustments on the <br />
                  go to achieve the perfect fit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card variant="outlined" style={{ borderRadius: "15px" }}>
              <CardContent style={{ textAlign: "justify" }}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <EngineeringOutlinedIcon
                    style={{ color: "grey", fontSize: "40px" }}
                  />
                </div>

                <Typography
                  variant="h5"
                  component="h5"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    color: "#092165",
                  }}
                >
                  <span style={{ color: "red" }}> Dedicated software </span>{" "}
                  engineers
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: "grey", fontFamily: "Jost, sans-serif" }}
                >
                  Work with software developers with excellent skills, <br />
                  seniority levels, and previous experience creating <br />
                  complex apps.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
         
          <Grid item xs={12} md={4}>
            <Card variant="outlined" style={{ borderRadius: "15px" }}>
              <CardContent style={{ textAlign: "justify" }}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <SecurityOutlinedIcon
                    style={{ color: "grey", fontSize: "40px" }}
                  />
                </div>

                <Typography
                  variant="h5"
                  component="h5"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    color: "#092165",
                  }}
                >
                  <span style={{ color: "red" }}> Security-first </span>{" "}
                  development
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: "grey", fontFamily: "Jost, sans-serif" }}
                >
                  As software engineers, we adhere to the highest global
                  security standards, recognizing the critical significance of
                  safeguarding data.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card variant="outlined" style={{ borderRadius: "15px" }}>
              <CardContent style={{ textAlign: "justify" }}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <PsychologyOutlinedIcon
                    style={{ color: "grey", fontSize: "40px" }}
                  />
                </div>

                <Typography
                  variant="h5"
                  component="h5"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    color: "#092165",
                  }}
                >
                  <span style={{ color: "red" }}> Industry </span> knowledge
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: "grey", fontFamily: "Jost, sans-serif" }}
                >
                  We are razor-focused on compliance and industry standards.
                  From an idea and MVP to a complex scalable project, your app
                  is in good hands.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card variant="outlined" style={{ borderRadius: "15px" }}>
              <CardContent style={{ textAlign: "justify" }}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <ScienceOutlinedIcon
                    style={{ color: "grey", fontSize: "40px" }}
                  />
                </div>

                <Typography
                  variant="h5"
                  component="h5"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    color: "#092165",
                  }}
                >
                  <span style={{ color: "red" }}>Years of hands</span> on
                  experience
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: "grey", fontFamily: "Jost, sans-serif" }}
                >
                  We'll assist you in creating mobile and web apps that enable
                  growth during your upcoming stages of development.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div> */}

      <div
        style={{
          maxHeight: "100px",
          backgroundColor: "red",
          color: "#fff",
          width: "100%",
          overflow: "hidden",
          marginTop: "50px",
          padding: "0px",
        }}
      >
        {/* <Marquee
          style={{
            height: "80px",
            width: "100%",
            fontSize: "20px",
            fontFamily: "Jost, sans-serif",
          }}
        >
          15+ years in the game | 200+ finished projects | 10+ experts | 9/10
          referrals projects
        </Marquee> */}
      </div>
    </div>
  );
};

export default MyGridContainer;
