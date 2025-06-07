import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Layout1 from "src/components/layout/Layout1";
import ClientsCard from "src/components/clients/ClientsCard";
import clientsOur from "src/components/data/clientsOur";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ServiceCard from "src/components/service/ServiceCard";
import serviceData from "src/components/data/serviceData";
import AboutClientCard from "src/components/aboutClients/AboutClientCard";
import aboutClientsData from "src/components/data/aboutClients";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import NewComponent from "../src/components/new_component";
import CardInfo from "../src/components/cardInfo";
import { styled } from "@mui/system";
import { Card, CardContent, Typography } from "@mui/material";
import Carousel from "../src/components/Slider";
import { useMediaQuery } from "@mui/material";
import ImageSlider from '../src/components/cardNew';
import Animated from '../src/components/animated';
import WhyChoose from '../src/components/WhyChoose';
import Threecard from '../src/components/Threecards';
import CardBg from '../src/components/cardbg';
import TextSlider from '../src/components/textslider';
import CountsNumber from '../src/components/CountsNo';
import Accordion from "../src/components/Accordian";
const rotatingTexts = [
  "Software",
  "Web Apps",
  "Mobile Apps",
  "SaaS",
  "DevOps",
  "UI/UX",
];

const index = () => {
  const [isHover1, setIsHover1] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [hoverContact, setHoverContact] = useState(false);

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
  
    return (
      <div
        className={className}
        style={{
          ...style,
          height: "40px",
          width: "40px",
          marginLeft: "-35px",
          zIndex: 10,
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <img src="/arrowsquareleftred.png" alt="Prev Arrow" />
      </div>
    );
  };
  
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
  
    return (
      <div
        className={className}
        style={{
          ...style,
          height: "40px",
          width: "40px",
          zIndex: 10,
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <img src="/arrowsquarerightred.png" alt="Next Arrow" />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          speed: 300,
        },
      },
    ],
  };

  const LineDev = styled("div")({
    width: "100px",
    height: "2px",
  });

  const [currentText, setCurrentText] = useState(rotatingTexts[0]);
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
        setIsVisible(true);
      }, 1000); // Delay for fade out (1 second)
    }, 6000); // Change text every 6 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentText(rotatingTexts[index]);
  }, [index]);

  useEffect(() => {
    setCurrentText(rotatingTexts[index]);
  }, [index]);

  return (
    <>
      <div className={styles.home_pages_body}>
        <Layout1>
          <Animated/>

         
          <Carousel />
           
      
      
          

          {/*  */}
          <Grid
            className={styles.grids_first_home}
            style={{
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "center" : "flex-start",
              textAlign: isMobile ? "center" : "left",
            }}
          >
          
          </Grid>
 
     <Threecard/>

     <WhyChoose/>

     <CardBg/>

     <TextSlider/>

     <CountsNumber/>

     <Accordion/>
    

         

          {/* <NewComponent /> */}
          

          {/* <CardInfo /> */}
          {/* <ImageSlider/> */}

          {/* <Grid
            container
            color={"#111"}
            padding={"5% 5%"}
            style={{
              background:
                "radial-gradient(circle at 0% 0.5%, rgb(241, 241, 242) 0.1%, rgb(224, 226, 228) 100.2%)",
            }}
          >
            
            <Grid item xs={12} md={4} style={{ marginLeft: "0px" }}>
              <Typography
                align="justify"
                style={{
                  color: "#000000",
                  fontSize: "48px",
                  fontFamily: "Jost, sans-serif",
                }}
              >
                <span
                  style={{
                    color: "red",
                    fontSize: "48px",
                    fontFamily: "Jost, sans-serif",
                  }}
                >
                  Tangible Results,
                  <br />
                </span>{" "}
                Right on results
              </Typography>
            </Grid>

            <Grid item xs={12} md={2} sx={{ padding: "0 8px" }}>
              <Card variant="outlined" style={{ height: "100%" }}>
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    style={{
                      color: "#000000",
                      textAlign: "center",
                      fontFamily: "Jost, sans-serif",
                    }}
                  >
                    15+ <br />{" "}
                    <span
                      style={{
                        fontSize: "18px",
                        fontFamily: "Jost, sans-serif",
                      }}
                    >
                      years in the game
                    </span>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

           
            <Grid item xs={12} md={2} sx={{ padding: "0 8px" }}>
              <Card
                variant="outlined"
                style={{ height: "100%", backgroundColor: "#fff" }}
              >
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    style={{
                      color: "#000000",
                      textAlign: "center",
                      fontFamily: "Jost, sans-serif",
                    }}
                  >
                    200+ <br />{" "}
                    <span
                      style={{
                        fontSize: "18px",
                        fontFamily: "Jost, sans-serif",
                      }}
                    >
                      successful projects
                    </span>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

           
            <Grid item xs={12} md={2} sx={{ padding: "0 8px" }}>
              <Card variant="outlined" style={{ height: "100%" }}>
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    style={{
                      color: "#000000",
                      textAlign: "center",
                      fontFamily: "Jost, sans-serif",
                    }}
                  >
                    10+ <br />{" "}
                    <span
                      style={{
                        fontSize: "18px",
                        fontFamily: "Jost, sans-serif",
                      }}
                    >
                      experts
                    </span>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

           
            <Grid item xs={12} md={2} sx={{ padding: "0 8px" }}>
              <Card variant="outlined" style={{ height: "100%" }}>
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    style={{
                      color: "#000000",
                      textAlign: "center",
                      fontFamily: "Jost, sans-serif",
                    }}
                  >
                    9/10 <br />{" "}
                    <span
                      style={{
                        fontSize: "18px",
                        fontFamily: "Jost, sans-serif",
                      }}
                    >
                      referrals projects
                    </span>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid> */}

          {/* <div className={styles.info_123}>
            <div className={styles.info_11}>
              <FiberManualRecordIcon />
            </div>
            <p>Available for projects</p>
            <h1>
              Let&apos;s Build your <br />
              product together,
            </h1>
            <p>
              Partner with us for a digital journey that transforms your
              business ideas into <br /> successful, cutting-edge solutions.
            </p>
          </div> */}
        </Layout1>
      </div>
    </>
  );
};

export default index;
