// import React, { useState } from "react";
// import Header from "../../src/components/navbar/Navbar";
// import Footer from "../../src/components/footer/Footer";
// import { Grid, Typography, Breadcrumbs, Link } from "@mui/material";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import ButtonGroup from "@mui/material/ButtonGroup";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import MobileMenu from 'src/components/mobileMenu/MobileMenu';
// import { useMediaQuery } from '@mui/material';


// const index = () => {
//     const [hoveredBtn, setHoveredBtn] = useState(false);
//     const [hoveredBtn1, setHoveredBtn1] = useState(false);
//     const isMobile = useMediaQuery('(max-width:600px)');
//   return (
//     <div>
//       <Header />
//       <MobileMenu/>
//       <Breadcrumbs
//         aria-label="breadcrumb"
//         style={{
//           fontFamily: "Jost, sans-serif",
//           backgroundColor: "#F2F1EE",
//           padding: "10px",
//         }}
//       >
//         <Link href="/" color="inherit">
//           Home
//         </Link>
//         <Typography
//           color="text.primary"
//           style={{ fontFamily: "Jost, sans-serif" }}
//         >
//           Consulting
//         </Typography>
//       </Breadcrumbs>

// {/* 1st section*/}
//       <Box
//         sx={{
//           height: "500px",
//           width: "100%",
//           backgroundImage:
//             "url(https://cdn.prod.website-files.com/63b042656c21e611f6f8be44/644a7bce59efe42a4f13681a_6395f90578c5b96b82e91b1b_group-diverse-people-having-business-meeting_1_40.jpeg)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           color: "#fff",
//           textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
//         }}
//       >
//         <Typography
//           variant="h1"
//           sx={{
//             fontSize: "50px",
//             padding: "40px",
//             fontFamily: "Jost, sans-serif",
//           }}
//         >
//           Infosyst
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{
//             fontSize: "25px",
//             padding: "40px",
//             marginTop: "-65px",
//             fontFamily: "Jost, sans-serif",
//           }}
//         >
//           Introducing outcome-driven <br />
//           technology consulting
//         </Typography>
//       </Box>
//     {/* 2nd section */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-start",
//           backgroundColor: "#052315",
//           "& > *": {
//             m: 1,
//           },
//         }}
//       >
//         <ButtonGroup variant="text" aria-label="Basic button group">
//           <Button
//             sx={{
//               color: "#fff",
//               fontFamily: "Jost, sans-serif",
//               fontSize: "1rem",
//               "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)",textDecoration: "underline", },
//             }}
//           >
//             What is Infosyst?
//           </Button>
//           <Button
//             sx={{
//               color: "#fff",
//               fontSize: "1rem",
//               fontFamily: "Jost, sans-serif",
//               "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)",textDecoration: "underline", },
//             }}
//           >
//             Value
//           </Button>
//           <Button
//             sx={{
//               color: "#fff",
//               fontSize: "1rem",
//               fontFamily: "Jost, sans-serif",
//               "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)",textDecoration: "underline", },
//             }}
//           >
//             How it works
//           </Button>
//           <Button
//             sx={{
//               color: "#fff",
//               fontSize: "1rem",
//               fontFamily: "Jost, sans-serif",
//               "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)",textDecoration: "underline", },
//             }}
//           >
//             Our advantages
//           </Button>
//           <Button
//             sx={{
//               color: "#fff",
//               fontSize: "1rem",
//               fontFamily: "Jost, sans-serif",
//               "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)",textDecoration: "underline", },
//             }}
//           >
//             Results
//           </Button>
//           <Button
//             sx={{
//               color: "#fff",
//               fontSize: "1rem",
//               textDecoration: "none",
//               fontFamily: "Jost, sans-serif",
//               "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)",textDecoration: "underline", },
//             }}
//           >
//             Connect with us
//           </Button>
//         </ButtonGroup>
//       </Box>
//       {/* 3rd section */}
//       <Grid container spacing={2} style={{backgroundColor:'#F9F9F9'}}>
//             {/* First Section */}
//             <Grid item xs={12} md={6}> {/* Change to xs={12} for full width */}
//                 <Box sx={{ padding: 4, }}>
//                     <Typography variant="h3" component="h3" gutterBottom style={{ fontFamily: "Jost, sans-serif",}}>
//                     What is Infosyst Consult?
//                     </Typography> <br />
//                     <Typography variant="body1" style={{ fontFamily: "Jost, sans-serif",}}>
//                     Infosyst Consult accelerates digital transformation by aligning business outcomes with the technology that drives them – technology underpinned by decades of mission-critical experiences and a shared culture of continuous modernization.
//                     </Typography><br />
//                     <Typography variant="body1" style={{ fontFamily: "Jost, sans-serif",}}>
//                     We drive innovation by combining the best technical capabilities with data-driven insights from the Infosyst Bridge platform and the hands-on, designer led collaborative problem-solving of Kyndryl Vital.
//                     </Typography><br />
//                     <Typography variant="body1" style={{ fontFamily: "Jost, sans-serif",}}>
//                     Infosyst is your ideal transformation partner from high-level digital transformation strategy, enterprise architecture, and organizational change management to deep solutioning and implementation.
//                     </Typography><br />
//                     <Typography variant="body1" style={{ fontFamily: "Jost, sans-serif",}}>
//                     Our global network of technology strategy and implementation consultants, architects and engineers have deep domain knowledge based on decades of experience with some of the world’s most complex technology environments.
//                     </Typography>
//                 </Box>
//             </Grid>

//             {/* Second Section */}
//             <Grid item xs={6}> {/* Change to xs={2} for 12/2 layout */}
//                 <Box sx={{ padding: 2,  }}>
//                     <img
//                         src="https://media.istockphoto.com/id/1363104923/photo/diverse-modern-office-businessman-leads-business-meeting-with-managers-talks-uses.jpg?s=612x612&w=0&k=20&c=R6-SufHacJ6bCnviq37kik2Jl6RMdECybcUpEoRuMLs=" // Replace with your image URL
//                         alt="Description"
//                         style={{ width: '100%', height: 'auto', marginRight: '16px' }} 
//                     />
//                     <br />
//                     <Typography variant="body1" style={{ fontFamily: "Jost, sans-serif",}}>
//                     Infosyst Consult works with your vendor ecosystem through flexible and scaled solutions so your business can quickly reach time to value.
//                     </Typography>
//                 </Box>
//             </Grid>
//         </Grid>
//         <br />
//          {/* 4th section */}
//          <Grid container spacing={1} style={{backgroundColor:'#F9F9F9'}}>
//             {/* First Section */}
//             <Grid item xs={4}> {/* Change to xs={12} for full width */}
//                 <Box sx={{ padding: 4, }}>
//                 <img
//                         src="https://s7d1.scene7.com/is/image/kyndryl/mainframe-modernization-it-services-16x9"
//                         alt="Description"
//                         style={{ width: '90%', height: 'auto', marginRight: '16px' }} 
//                     />
//                 </Box>
//             </Grid>

//             {/* Second Section */}
//             <Grid item xs={6}> {/* Change to xs={2} for 12/2 layout */}
//                 <Box sx={{ padding: 2,  }}>
                    
//                     <br />
//                     <Typography variant="body1" style={{ fontFamily: "Jost, sans-serif",fontSize:'34px',color:'gray'}}>
//                     Infosyst releases its second annual global mainframe modernization survey report
//                     </Typography> <br />
//                     <Typography variant="body1" style={{ fontFamily: "Jost, sans-serif",fontSize:'18px',color:'gray'}}>
//                     A consultative approach can help mainframe users with modernization strategies to transform their organizations. This survey of 500 senior leaders helps understand what is top-of-mind for respondents: generative AI, hybrid IT, security, skills and observability.
//                     </Typography>
//                 </Box>
//                 <div style={{ display: 'flex' }}>
//             <Button
//                 variant="outlined"
//                 style={{
//                     marginRight: '22px',
//                     backgroundColor: hoveredBtn ? '#7C5BE8' : 'transparent',
//                     color: hoveredBtn ? 'white' : 'inherit',
//                 }}
//                 onMouseEnter={() => setHoveredBtn(true)}
//                 onMouseLeave={() => setHoveredBtn(false)}
//             >
//                 Download the report <ArrowDownwardIcon style={{fontSize:'16px'}}/>
//             </Button>
//             <Button
//                 variant="outlined"
//                 style={{
//                     backgroundColor: hoveredBtn1 ? '#7C5BE8' : 'transparent',
//                     color: hoveredBtn1 ? 'white' : 'inherit',
//                 }}
//                 onMouseEnter={() => setHoveredBtn1(true)}
//                 onMouseLeave={() => setHoveredBtn1(false)}
//             >
//                 Read more <ArrowForwardIcon style={{fontSize:'16px'}}/>
//             </Button>
//         </div>
//             </Grid>
//             <Grid item xs={2}> 
                
//             </Grid>
//         </Grid>
//         <br />

//         <div style={{margin:'40px'}}>
//             <h3 style={{fontSize:'35px',color:'gray',fontFamily: "Jost, sans-serif"   }}>How Infosyst Consult delivers value</h3>
//         </div>

//     </div>
//   );
// };

// export default index;

import React from 'react'
 import Header from "../../src/components/navbar/Navbar";
 import Footer from "../../src/components/footer/Footer";
 import MobileMenu from 'src/components/mobileMenu/MobileMenu';

const index = () => {
  return (
    <div>
      <Header />
      <MobileMenu />
    </div>
  );
}

export default index
