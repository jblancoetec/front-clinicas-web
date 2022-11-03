import React from 'react'
import Box from '@mui/material/Box';
import styles from "../Advices/advice.module.css"
import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined';
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import AccessibleForwardOutlinedIcon from '@mui/icons-material/AccessibleForwardOutlined';
import Card from '../../home/CardStepsSection';
export const requisitosData = [
  {


    icon: <AccessibleForwardOutlinedIcon fontSize='large' />,
    text: "Tener entre 18 y 65 años de edad.",
  },
  {

    icon: < MonitorWeightOutlinedIcon fontSize='large' />,
    text: "Pesar más de 50 kilos.",
  },
  {

    icon: < AccessibilityNewOutlinedIcon fontSize='large' />,
    text: "Presentar documento que acredite identidad (con foto).",
  },
  {

    icon: <FreeBreakfastOutlinedIcon fontSize='large' />,
    text: "Desayunar antes de concurrir",
  },
];






function requisitos() {
  return (
    <Card reverseContent title={'Condiciones'} subtitle={'Estas son las condiciones para poder ser donador'} >

      <Box className={styles.contenedorCard}>
        {requisitosData.map((val, key) => {
          return (
            <Box key={key}
              className={styles.contenedorDetalles} >
              <div className={styles.icon}>{val.icon}</div>
              <div className={styles.text}>{val.text}</div>
            </Box>
          );
        })}
      </Box>
    </Card>
  )
}

export default requisitos
