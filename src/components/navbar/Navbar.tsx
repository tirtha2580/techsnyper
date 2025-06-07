import React, { useEffect, Fragment, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Popover,
  List,
  ListItem,
  ListItemText,
  Container,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { navbarNavigations } from "../data/navbarNavigations";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import StraightenIcon from '@mui/icons-material/Straighten';
import TireRepairIcon from '@mui/icons-material/TireRepair';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import AirIcon from '@mui/icons-material/Air';
import styles from "./navbar.module.css";
import Link from "next/link";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HomeIcon from "@mui/icons-material/Home";
import CastIcon from "@mui/icons-material/Cast";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import SpeedIcon from "@mui/icons-material/Speed";
import ScaleIcon from "@mui/icons-material/Scale";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import SchoolIcon from "@mui/icons-material/School";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import WebIcon from "@mui/icons-material/Web";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import { useRouter } from "next/router";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();
  const [myUrl, setMyUrl] = useState("");
  const handleImageClick = () => {
    router.push("/");
  };
  React.useEffect(() => {
    console.log("Current URL:", router.asPath); // or router.pathname
    setMyUrl(router.asPath);
  });

  useEffect(() => {
    const handleScroll = () => {
      // Change background when scroll position > 50px (You can adjust this value)
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [hoverContact, setHoverContact] = useState(false);

  // const navClass = myUrl === "/" ? styles.navDev1 : styles.navDev1;
  const buttonClass = myUrl === "/" ? styles.nav_button : styles.nav_button1;
  return (
    <div className="sticky top-0 z-50">
      <div
        style={{
          background: isScrolled ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 1.4)", // Black when scrolled, transparent otherwise
          transition: "background-color 0.3s ease", // Smooth transition for background change
        }}
      >
        <Grid container className={styles.grids}>
          <Grid item xs={12} md={3} className={styles.navImages} style={{ marginLeft: '-170px' }}>
           
           <div style={{gap:'10px',textAlign:'justify',display:'flex',}}>
           <img
              src="/logoTechsnyper.png"
              alt="logo"
              style={{ cursor: "pointer", width: "60px",height:'100%' }}
              onClick={() => router.push("/")}
            /><Typography style={{fontSize:'24px',color:'#fff',textAlign:'justify',position:'relative',fontWeight:'600',display:'flex',flexDirection:'column',marginTop:"-20px",justifyContent:'center',fontFamily: "Jost, sans-serif",}}>Techsnyper <br /> <span style={{fontSize:"12px",marginTop:'54px',position:'absolute',fontFamily: "Jost, sans-serif",fontWeight:'200'}}>Technology Pvt. Ltd.</span></Typography>
            </div> 
          </Grid>
          <Grid item display={"flex"} style={{ marginLeft: '300px' }}>
            {navbarNavigations.map((ele, index) => (
              <Grid item key={index}>
                <Button
                  variant="text"
                  className={buttonClass}
                  onClick={() => router.push(ele.path)}
                  style={{
                    color:
                      myUrl === ele.path
                        ? "#4B7BF4"
                        : hoverIndex === index
                        ? "#4B7BF4"
                        : myUrl === "/"
                        ? "#ffffff"
                        : "#ffffff",
                    textTransform: "none",
                    fontSize: "20px",
                  }}

                  onMouseEnter={() => setHoverIndex(index)}
                  // onMouseLeave={() => setHoverIndex(null)}
                >
                  {ele.title}
                  {ele.dropdown && (
                    <div
                      className={`${styles.down_rotate} ${hoverIndex === index ? styles.rotated : " #4D78F2;"
                        }`}
                    >
                      <KeyboardArrowDownIcon />
                    </div> 
                  )}
                </Button>
                {ele.dropdown && hoverIndex === index && (
                  <Grid
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    container
                    className={styles.chiled_menu}
                  >
                    {ele.child?.map((child, childIndex) => (
                      <Link
                        href={child.path != undefined ? child.path : "/"}
                        key={childIndex}
                        className={styles.link_button}
                      >
                        <div className="flex flex-row justify-center gap-3 items-center"
                        style={{
                          color: myUrl === child.path ? "#4B7BF4" : "#fff", // Active vs default color
                        }}
              >
                          {child.icons === "1" && (
                            <AccountBalanceWalletIcon
                              style={{ width: "20px", color: "#fff" }}
                            />
                          )}
                          {child.icons === "2" && (
                            <BusinessCenterIcon
                              style={{ width: "20px", color: "#4D78F2" }}
                            />
                          )}
                          {child.icons === "3" && (
                            <EqualizerIcon
                              style={{ marginRight: "px", color: "#4D78F2" }}
                            />
                          )}
                          {child.icons === "4" && (
                            <PeopleAltIcon
                              style={{ width: "20px", color: "#4D78F2" }}
                            />
                          )}
                          {child.icons === "5" && (
                            <HomeIcon
                              style={{ marginRight: "0px", color: "#4D78F2" }}
                            />
                          )}
                          {child.icons === "6" && (
                            <SpeedIcon
                              style={{ marginRight: "8px", color: "#4D78F2" }}
                            />
                          )}
                          {child.icons === "7" && (
                            <DeviceThermostatIcon
                              style={{ marginRight: "8px", color: "#4D78F2" }}
                            />
                          )}
                          {child.icons === "8" && (
                            <StraightenIcon
                              style={{ marginRight: "8px", color: "#4D78F2" }}
                            />
                          )}
                          {child.icons === "9" && (
                            <TireRepairIcon
                              style={{ marginRight: "8px", color: "#4D78F2" }}
                            />
                          )}
                          {child.icons === "10" && (
                            <ThermostatAutoIcon
                              style={{ marginRight: "8px", color: "#4D78F2" }}
                            />
                          )}
                          {child.icons === "11" && (
                            <SettingsSuggestIcon
                              style={{ width: "20px", color: "#4D78F2" }}
                            />
                          )}
                          {child.icons === "12" && (
                            <SquareFootIcon
                              style={{ width: "20px", color: "#4D78F2" }}
                            />
                          )}
                          {child.icons === "13" && (
                            <AirIcon
                              style={{ width: "20px", color: "#4D78F2" }}
                            />
                          )}
                          {child.icons === "14" && (
                            <ContentPasteIcon
                              style={{ width: "20px", color: "#ff0000" }}
                            />
                          )}
                          {child.icons === "15" && (
                            <SchoolIcon
                              style={{ width: "20px", color: "#ff0000" }}
                            />
                          )}
                          {child.icons === "16" && (
                            <StackedBarChartIcon
                              style={{ width: "20px", color: "#ff0000" }}
                            />
                          )}
                          {child.icons === "17" && (
                            <LocalHospitalIcon
                              style={{ width: "20px", color: "#ff0000" }}
                            />
                          )}
                          {child.icons === "18" && (
                            <LightbulbIcon
                              style={{ width: "20px", color: "#ff0000" }}
                            />
                          )}
                          {child.icons === "19" && (
                            <AddBusinessIcon
                              style={{ width: "20px", color: "#ff0000" }}
                            />
                          )}
                          {child.icons === "20" && (
                            <WebIcon
                              style={{ width: "20px", color: "#ff0000" }}
                            />
                          )}
                          {child.icons === "21" && (
                            <OtherHousesIcon
                              style={{ width: "20px", color: "#ff0000" }}
                            />
                          )}
                          {/* Other icons */}
                          <span>{child.title}</span>
                        </div>
                      </Link>
                    ))}
                  </Grid>
                )}
              </Grid>
            ))}
          </Grid>
          {/* <Grid item>
            <Button
              size="large"
              onMouseEnter={() => setHoverContact(true)}
              onMouseLeave={() => setHoverContact(false)}
              onClick={() => router.push("/consulting")}
              className={styles.contact_button}
              sx={{}}
              style={{ fontSize: "15px" }}
            >
              Consulting
            </Button>
          </Grid> */}
        </Grid>
      </div>


    </div>
  );
};

export default Navbar;
