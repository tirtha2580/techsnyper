import React, { useState } from "react";
import styles from "./clint.module.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";

interface ClientsCardProps {
  title: string;
  button1: string;
  button2: string;
  src: string;
  description: string;
  lastCard: string;
  bgColor1: string;
  bgColor2: string;
  imgPosition: boolean;
}
const ClientsCard: React.FC<ClientsCardProps> = ({
  title,
  button1,
  button2,
  src,
  description,
  bgColor1,
  bgColor2,
  lastCard,
  imgPosition,
}) => {
  const [isHover1, setIsHover1] = useState(false);
  const router = useRouter();

  return (
    <div
      className="w-[90%] p-4  h-[400px]"
      style={{
        background: `linear-gradient(140deg, ${bgColor1}, ${bgColor2})`,
      }}
    >
      {!lastCard && (
        <div className="flex items-center justify-between gap-1">
          <div className="flex flex-col justify-between items-start h-[350px]">
            <div className="flex flex-col gap-1">
              <button className="bg-none border-2 text-sm px-2 rounded-full">
                {button1}
              </button>
              <button className="bg-none border-2 text-sm px-2 rounded-full">
                {button2}
              </button>
            </div>
            {imgPosition === false && (
              <div>
                <img src={src} alt="" className="h-[250px]" />
              </div>
            )}
            <div>
              <h3 className="text-xs font-bold">{title}</h3>
            </div>
          </div>
          {imgPosition === true && (
            <div>
              <img src={src} alt="" className="h-[350px]" />
            </div>
          )}
        </div>
      )}
      {!lastCard && <p className="text-center text-xs py-2">{description}</p>}
      {lastCard && <h1 className={styles.lastCard}>{lastCard}</h1>}
      {lastCard && (
        <div className="mt-20" style={{alignItems: "center", display: "flex",gap:"10px"}}>
          <Typography style={{fontFamily: "Jost, sans-serif",}}>
            Let&apos;s talk
          </Typography>
          <img src="/arrowsquarerightwhite.png" alt="let's talk" width='40px' onClick={() => router.push("/contact")} style={{cursor:'pointer'}} />
        </div>
      )}
    </div>
  );
};

export default ClientsCard;
