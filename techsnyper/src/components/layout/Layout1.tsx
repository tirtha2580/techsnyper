import React, { FC, Fragment, ReactNode, useState } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar';
import styles from './layout.module.css'
import MobileMenu from '../mobileMenu/MobileMenu';


type Layout1Props = {
  children: ReactNode;
  showNavbar?: boolean;
  showNavMobil?: boolean;
};
const Layout1: FC<Layout1Props> = ({
 children,
  showNavbar = true,
  showNavMobil = true
}) => {
  return (
    <Fragment>
        <div className={styles.chiled_scroll}>
          {showNavMobil && <MobileMenu/>}
            {showNavbar && <Navbar/>}
            <div className={styles.childs_in}>
                {children}
            </div>
        </div>
      <Footer/>
    </Fragment>
  )
}

export default Layout1
