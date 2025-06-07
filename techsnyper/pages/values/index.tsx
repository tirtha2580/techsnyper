import React from "react";
import Header from "../../src/components/navbar/Navbar";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Grid, Box, Button, Card, CardContent, CardMedia } from "@mui/material";
import { MarginTwoTone } from "@mui/icons-material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from "../../src/components/footer/Footer";
import MobileMenu from 'src/components/mobileMenu/MobileMenu';
import { useMediaQuery } from '@mui/material';

const Index = () => {

  
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Header />
      <MobileMenu/>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{
          fontFamily: "Jost, sans-serif",
          backgroundColor: "#F2F1EE",
          padding: "10px",
        }}
      >
        <Link href="/" color="inherit">
          Home
        </Link>
        <Link href="/about" color="inherit">
          About Us
        </Link>
        <Typography
          color="text.primary"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          Values
        </Typography>
      </Breadcrumbs>

      {/* 1st section */}
      <Grid container spacing={2} style={{ backgroundColor: "#F2F1EE" }}>
        {/* 1st Section: Heading and Texts */}
        <Grid item xs={12} md={6}>
          <Box padding={6}>
            <Typography
              variant="h3"
              style={{
                margin: "0px",
                fontFamily: "Jost, sans-serif",
                color: "grey",
              }}
            >
              Our Values
            </Typography>
            <Typography
              variant="body1"
              style={{
                margin: "0px",
                fontFamily: "Jost, sans-serif",
                color: "grey",
              }}
            >
              Working together to build a culture of responsibility and
              excellence
            </Typography>
          </Box>
        </Grid>

        {/* 2nd Section: Image Full Width */}
        <Grid item xs={12} md={6}>
          <Box>
            <img
              src="https://media.istockphoto.com/id/1365436662/photo/successful-partnership.jpg?s=612x612&w=0&k=20&c=B1xspe9Q5WMsLc7Hc9clR8MWUL4bsK1MfUdDNVNR2Xg="
              alt="Descriptive Alt Text"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
      <br />

      {/* 2nd section */}
      <Grid container spacing={2} style={{}}>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              src="https://s7d1.scene7.com/is/image/kyndryl/Kyndry_Name_4_3_01-1:4x3_Large?qlt=85&ts=1729605909651&dpr=on,1"
              alt="Descriptive Alt Text"
              style={{ width:isMobile ?"100%":"90%", height: "auto" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box padding={2}>
            <Typography
              variant="h3"
              style={{ fontFamily: "Jost, sans-serif", color: "grey" }}
            >
              Infosyst
            </Typography>
            <Typography
              variant="body1"
              style={{
                margin: "0px",
                fontFamily: "Jost, sans-serif",
                color: "grey",
              }}
            >
              {" "}
              <br />
              At Infosyst, our cultural journey began with building brand values
              that truly <br /> encompass a shared and lived experience. The
              origin of Infosyst <br /> was our desire to offer
              customers, investors, partners and employees an <br /> experience
              of mutual benefit and success.
            </Typography>
            <br />
            <Typography
              variant="body1"
              style={{ fontFamily: "Jost, sans-serif", color: "grey" }}
            >
              Infosyst was developed through a culture exchange between{" "}
              <br /> Infosyst leaders and employees across the globe. This
              process required <br />
              immense trust in one another, deep empathy for diverse viewpoints,
              <br /> and full transparency.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <br />

      {/* 3rd Section */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box padding={6}>
            <Typography
              variant="h4"
              style={{ fontFamily: "Jost, sans-serif", color: "grey" }}
            >
              &quot;At the heart of Techsnyper turnaround story is our culture
              transformation: Infosyst. Our business is all about
              building a services culture and how we engage with each other, our
              customers and our communities.&quot;
            </Typography>
            <br />
            <Typography
              variant="body1"
              style={{ fontFamily: "Jost, sans-serif", color: "grey" }}
            >
             Arun Kumar Sharma
            </Typography>
            <Typography
              variant="body1"
              style={{ fontFamily: "Jost, sans-serif", color: "grey" }}
            >
              Chairman and Chief Executive Officer
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              src="https://www.cio.com/wp-content/uploads/2024/01/shutterstock_1095953582.jpg?quality=50&strip=all&w=1024"
              alt="Descriptive Alt Text"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>

      <br />

      <div style={{ padding: "20px", marginLeft: "30px" }}>
        <h2
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "45px",
            color: "gray",
          }}
        >
          {" "}
          Our core principles
        </h2>
        <br />
        <p
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "15px",
            color: "gray",
          }}
        >
         Infosyst underpins everything we do, from the way we engage
          with customers to <br /> the way we organize ourselves. We strive to
          build this culture every day by being:
        </p>
      </div>
      <br />
      {/* 4th section */}
      <Grid
        container
        spacing={3}
        style={{ fontFamily: "Jost, sans-serif", backgroundColor: "#F2F1EE" }}
      >
        {/* 1st Row */}
        <Grid
          item
          xs={12}
          md={4}
          style={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://www.kyndryl.com/content/dam/kyndrylprogram/images/global/icons/Kyndryl-Way-Icon-Restless.svg"
            alt=""
            style={{ width: "60px", height: "auto" }}
          />
          <Box padding={2} textAlign="center" style={{ flexGrow: 1 }}>
            <Typography
              variant="body1"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "40px",
                color: "gray",
              }}
            >
              <span
                style={{
                  fontFamily: "Jost, sans-serif",
                  borderBottom: "2px solid #805CEB",
                }}
              >
                R
              </span>
              estless
            </Typography>
            <br />
            <Typography
              variant="body2"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "17px",
                color: "gray",
              }}
            >
              To continuously anticipate, learn and innovate
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          style={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://www.kyndryl.com/content/dam/kyndrylprogram/images/global/icons/Kyndryl-Way-Icon-Empathetic.svg"
            alt=""
            style={{ width: "60px", height: "auto" }}
          />
          <Box padding={2} textAlign="center" style={{ flexGrow: 1 }}>
            <Typography
              variant="body1"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "40px",
                color: "gray",
              }}
            >
              <span
                style={{
                  fontFamily: "Jost, sans-serif",
                  borderBottom: "2px solid #805CEB",
                }}
              >
                E
              </span>
              mpathetic
            </Typography>
            <br />
            <Typography
              variant="body2"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "17px",
                color: "gray",
              }}
            >
              To serve with trust and transparency
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          style={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://www.kyndryl.com/content/dam/kyndrylprogram/images/global/icons/Kyndryl-Way-Icon-Devoted.svg"
            alt=""
            style={{ width: "60px", height: "auto" }}
          />
          <Box padding={2} textAlign="center" style={{ flexGrow: 1 }}>
            <Typography
              variant="body1"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "40px",
                color: "gray",
              }}
            >
              <span
                style={{
                  fontFamily: "Jost, sans-serif",
                  borderBottom: "2px solid #805CEB",
                }}
              >
                D
              </span>
              evoted
            </Typography>
            <br />
            <Typography
              variant="body2"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "17px",
                color: "gray",
              }}
            >
              To shared success
            </Typography>
          </Box>
        </Grid>

        {/* 2nd Row */}
        <Grid
          item
          xs={12}
          md={4}
          style={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://www.kyndryl.com/content/dam/kyndrylprogram/images/global/icons/Kyndryl-Way-Icon-Flat.svg"
            alt=""
            style={{ width: "60px", height: "auto" }}
          />
          <Box padding={2} textAlign="center" style={{ flexGrow: 1 }}>
            <Typography
              variant="body1"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "40px",
                color: "gray",
              }}
            >
              <span
                style={{
                  fontFamily: "Jost, sans-serif",
                  borderBottom: "2px solid #805CEB",
                }}
              >
                F
              </span>
              lat
            </Typography>
            <br />
            <Typography
              variant="body2"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "17px",
                color: "gray",
              }}
            >
              To empower accountable and inclusive teams
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://www.kyndryl.com/content/dam/kyndrylprogram/images/global/icons/Kyndryl-Way-Icon-Fast.svg"
            alt=""
            style={{ width: "60px", height: "auto" }}
          />
          <Box padding={2} textAlign="center" style={{ flexGrow: 1 }}>
            <Typography
              variant="body1"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "40px",
                color: "gray",
              }}
            >
              <span
                style={{
                  fontFamily: "Jost, sans-serif",
                  borderBottom: "2px solid #805CEB",
                }}
              >
                F
              </span>
              ast
            </Typography>
            <br />
            <Typography
              variant="body2"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "17px",
                color: "gray",
              }}
            >
              To cultivate simplicity everywhere
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://www.kyndryl.com/content/dam/kyndrylprogram/images/global/icons/Kyndryl-Way-Icon-Focused.svg"
            alt=""
            style={{ width: "60px", height: "auto" }}
          />
          <Box padding={2} textAlign="center" style={{ flexGrow: 1 }}>
            <Typography
              variant="body1"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "40px",
                color: "gray",
              }}
            >
              <span
                style={{
                  fontFamily: "Jost, sans-serif",
                  borderBottom: "2px solid #805CEB",
                }}
              >
                F
              </span>
              ocused
            </Typography>
            <br />
            <Typography
              variant="body2"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "17px",
                color: "gray",
              }}
            >
              To deliver best-in-class services
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <br />

      {/* 5th section */}
      <Grid
        container
        spacing={2}
        style={{ backgroundColor: "#FAFAFC", marginTop: "20px" }}
      >
        <Grid item xs={12} md={6}>
          <Box padding={6}>
            <Typography
              variant="h4"
              style={{ fontFamily: "Jost, sans-serif", color: "grey" }}
            >
              Our customer-focused culture
            </Typography>
            <br />
            <Typography
              variant="body1"
              style={{ fontFamily: "Jost, sans-serif", color: "grey" }}
            >
              We put Infosyst into practice to meet customers where they
              are and deliver transformative solutions to address their unique
              business challenges.
            </Typography>
            <br />
            <Typography
              variant="body1"
              style={{ fontFamily: "Jost, sans-serif", color: "grey" }}
            >
              Working with Techsnyper experts, Carrefour migrated from an
              end-of-life data <br /> center to a cloud environment, unifying
              customer experience across <br /> hundreds of stores in the
              process.
            </Typography>

            <Button variant="outlined" style={{ marginTop: "45px" }}>
              Explore Carrefour&apos;s transformation
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              src="https://s7d1.scene7.com/is/image/kyndryl/p-ind_customerinfoodstore_4x3:4x3_Large?qlt=85&ts=1729605909786&dpr=on,1"
              alt="Descriptive Alt Text"
              style={{ width:isMobile?"100%": "90%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
      <br />

      {/* 6th section */}
      <Grid
      container
      spacing={3}
      style={{
        fontFamily: "Jost, sans-serif",
        backgroundColor: "#F2F1EE",
        padding: "20px",
      }}
    >
      {/* Card Component */}
      {[1, 2, 3].map((index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box display="flex" flexDirection="column" alignItems="stretch" padding={2}>
              <img
                src={`https://s7d1.scene7.com/is/image/kyndryl/atwork_${index === 1 ? 'conversationofficewithplants' : index === 2 ? 'happyteamwithlaptop' : 'earnestlookingguy'}_4x3?qlt=85&wid=320&ts=1729605910${index}0017&dpr=off`}
                alt=""
                style={{ width: "100%", height: "auto", marginBottom: "20px" }}
              />
              <Typography
                variant="h6"
                style={{
                  color: "gray",
                  textAlign: "justify",
                  marginTop: "20px",
                }}
              >
                {index === 1 ? 'Corporate Citizenship' : index === 2 ? 'Inclusion, Diversity and Equity' : 'Trust'}
              </Typography>
              <Typography
                variant="body2"
                style={{ color: "gray", textAlign: "justify", marginBottom: "20px" }}
              >
                {index === 1
                  ? 'Our corporate citizenship and environmental, social, and governance (ESG) strategy is at the heart of our mission to become a purpose-driven company.'
                  : index === 2
                  ? 'We embed ID&E in every aspect of our business.Our corporate citizenship and environmental,'
                  : 'Our central guiding principle: Everything begins with trust.'}
              </Typography>

              {/* Justified Button */}
              <Box display="flex" justifyContent="flex-start">
                <Button
                  variant="outlined"
                  sx={{
                    color: 'gray',
                    borderColor: 'gray',
                    '&:hover': {
                      backgroundColor: '#6B5DDC',
                      color: 'white',
                      borderColor: 'white',
                    },
                  }}
                >
                  Explore <ArrowForwardIcon />
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
    <br />

    {/* 7th section */}
    <section style={{backgroundColor:'#fff',}}>
    <div style={{
      backgroundColor: '#113A34',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh', 
      textAlign: 'center', 
      padding: '20px' ,marginBottom:'50px'
    }}>
      <h2 style={{ color: '#fff',fontSize:'70px' }}>Connect with Infosyst</h2>
      <p style={{ color: '#fff',fontSize:'17px', fontFamily: "Jost, sans-serif",}}>Together we can make sure the world thrives.</p>
      <Button
        variant="outlined"
        sx={{
          color: '#fff',
          borderColor: '#fff',
          marginTop:'10px',
          fontFamily: "Jost, sans-serif",
          '&:hover': {
            backgroundColor: '#ffffff',
            color: 'black',
            borderColor: 'white',
          },
        }}
      >
        Explore <ArrowForwardIcon />
      </Button>
    </div>

    </section>

    <Footer/>
    </>
  );
};

export default Index;
