import React from 'react'
import Box from '@mui/material/Box';
import styles from "../Advices/advice.module.css"
import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined';
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import AccessibleForwardOutlinedIcon from '@mui/icons-material/AccessibleForwardOutlined';
import Card from '../../home/CardStepsSection';
import Image from 'next/image'

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
    text: "Desayunar antes de concurrir",
  },
];






function requisitos() {
  return (
    <Card reverseContent title={'Condiciones'} subtitle={'Antes de concurrir al hospital o efectuar una donación, te recomendamos tener en cuenta estas cuatro condiciones.'} >

      <Box className={styles.contenedorCard}>
        {requisitosData.map((val, key) => {
          return (
            <Box key={key}
              className={styles.contenedorDetalles} >
              <Box className={styles.contenedorIcono}>
                <Image
                  src={val.source}
                  alt="Antes de donar, infórmate"
                  width={1920}
                  height={1080}

                />
              </Box>
              <div className={styles.text}>{val.text}</div>
            </Box>

          );
        })}

      </Box>
    </Card>
  )
}

export default requisitos
