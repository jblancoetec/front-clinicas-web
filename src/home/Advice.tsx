import React from "react";
import Box from "@mui/material/Box";
import styles from "./Advice.module.css";
import Card from "./CardStepsSection";
import Image from "next/image";
import { Typography } from "@mui/material";

export const requisitosData = [
  {
    source: "/assets/imgmain/edad.png",
    text: "Tener entre 18 y 65 años de edad.",
  },
  {
    source: "/assets/imgmain/peso.png",
    text: "Pesar más de 50 kilos.",
  },
  {
    source: "/assets/imgmain/dni.png",
    text: "Presentar documento que acredite identidad (con foto).",
  },
  {
    source: "/assets/imgmain/tiempo.png",
    text: "Si te hiciste un piercing, un tatuaje o te sometiste a algún tipo de operación, vas a tener que esperar al menos 12 meses para poder donar sangre.",
  },
];

function Advices() {
  return (
    <Card
      reverseContent
      title={"Requisitos generales para donar sangre"}
      subtitle={
        "Antes de concurrir al hospital o efectuar una donación, te recomendamos tener en cuenta estas cuatro condiciones."
      }
    >
      <Box
        display={"grid"}
        gridTemplateColumns={{
          xs: "1fr",
          md: "1fr 1fr",
        }}
        gridTemplateRows="auto"
        gap={4}
        justifyContent="center"
        alignItems={"flex-start"}
      >
        {requisitosData.map((val, key) => {
          return (
            <Box key={key} className={styles.contenedorDetalles}>
              <Box className={styles.contenedorIcono}>
                <Image
                  src={val.source}
                  alt="Antes de donar, infórmate"
                  width={1920}
                  height={1080}
                />
              </Box>
              <Typography
                textAlign={"center"}
                variant="body1"
                className="subtitle"
              >
                {val.text}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Card>
  );
}

export default Advices;
