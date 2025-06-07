import React, { useState } from 'react';
import styles from "./service.module.css";
import { Button, Grid } from '@mui/material';

interface ServiceProps {
    title: string;
        description1: string;
        description2: string;
        description3: string;
        description4: string;
        description5: string;
        description6: string;
        description7: string;
        numbers: number,
        bgColor: string,
}
const ServiceCard: React.FC<ServiceProps> = ({
    title, description1, description2, description3, description4, description5, description6, description7,numbers,bgColor
}) => {
    const [isHover1, setIsHover1] = useState(true);
  return (
    <Grid bgcolor={isHover1 ? "#fff" : bgColor}
    container className={`${styles.contailer_service} ${!isHover1 ? styles.show1 : ''}`}
    onMouseEnter={() => setIsHover1(false)}
    onMouseLeave={() => setIsHover1(true)}
     >
      <Grid item className={styles.service_grid1}>0{numbers}</Grid>
      <Grid item className={styles.service_grid2}>
        <h1 className={styles.heading_services}>{title}</h1>
        <div className={styles.description}><span>{description1}</span>
        {description2 && <><div className={styles.dote}/><span>{description2}</span></>}
        {description3 && <><div className={styles.dote}/><span>{description3}</span></>}
        {description4 && <><div className={styles.dote}/><span>{description4}</span></>}
        </div>
        {description5 && <div className={styles.description}><span>{description5}</span>
        {description6 && <><div className={styles.dote}/><span>{description6}</span></>}
        {description7 && <><div className={styles.dote}/><span>{description7}</span></>}
        </div>}
        <Button className={`${styles.button_in} ${!isHover1 ? styles.show : ''}`}>Discuss the Project</Button>
      </Grid>
    </Grid>
  )
}

export default ServiceCard;
