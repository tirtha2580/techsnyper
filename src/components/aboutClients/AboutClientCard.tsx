import React from 'react';
import styles from "./aboutClient.module.css";

interface ClientsAboutProps {
  clientName: string;
  works: string;
  profImg: string;
  descriptions: string;
  bgColor: string;
}

const AboutClientCard: React.FC<ClientsAboutProps> = ({clientName, works, profImg, descriptions, bgColor}) => {
  return (
  <>

  </>
  )
}

export default AboutClientCard
