import React, { useState } from "react";
import styles from "./mobile.module.css";
import { Box, Typography,Button, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navbarNavigations } from "../data/navbarNavigations";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from 'next/router';

const MobileMenu = () => {
  const [isChiled, setIsChiled] = useState<number | null>(null);
  const [hoverContact, setHoverContact] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className={styles.navMobil}>
      <Box>
      <div style={{gap:'10px',display:'flex',marginTop:'8px'}}>
           <img
              src="/logoTechsnyper.png"
              alt="logo"
              style={{ cursor: "pointer", width: "45px",height:'100%' }}
              onClick={() => router.push("/")}
            /><Typography style={{fontSize:'20px',color:'#fff',textAlign:'justify',position:'relative',fontWeight:'600',display:'flex',flexDirection:'column',marginTop:"-20px",justifyContent:'center',fontFamily: "Jost, sans-serif"}}>Techsnyper <br /> <span style={{fontSize:"10px",marginTop:'45px',position:'absolute',fontFamily: "Jost, sans-serif",fontWeight:'200'}}>Technology Pvt. Ltd.</span></Typography>
            </div> 
      </Box>
      <Button style={{ color: "#fff" }} onClick={toggleMenu}>
        <MenuIcon />
      </Button>
      <Grid
        className={`${styles.menuShow} ${
          isMenu ? styles.menuVisible : styles.menuHidden
        }`}
      >
        <Grid className={styles.menuButton}>
       {navbarNavigations?.map((ele, index) => (
  ele && ( // Ensure ele is defined
    <div key={index} className={styles.button_mobile_menu}>
      <Button
        style={{
          color: isChiled === index ? "#4D78F2" : "#fff",
          fontFamily: "Jost, sans-serif"
        }}
        onClick={() => {
          // Navigate to the specified path
          router.push(ele.path);
          
          // Toggle the child menu visibility
          setIsChiled(isChiled === index ? null : index);
        }}
      >
        {ele.title}
        {ele.dropdown && (
          <div
            className={`${styles.down_rotate} ${
              isChiled === index ? styles.rotated : ""
            }`}
          >
            <KeyboardArrowDownOutlined />
          </div>
        )}
      </Button>
      {isChiled === index && ele.dropdown && (
        <Grid
          className={`${styles.childMenu} ${
            isChiled === index
              ? styles.childMenuVisible
              : styles.childMenuHidden
          }`}
        >
          {ele.child?.map((child, childIndex) => (
            <Link
              href={child.path as string}
              key={childIndex}
              className={styles.link_button}
            >
              {child.title}
            </Link>
          ))}
        </Grid>
      )}
    </div>
  )
))}
        </Grid>
    
      </Grid>
    </div>
  );
};

export default MobileMenu;
