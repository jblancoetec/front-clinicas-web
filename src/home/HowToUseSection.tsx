import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import Image from "next/image";
import { ExpandMore } from "@mui/icons-material";

enum IDInfoToDeploy {
  paraTratamientosGenerales = 0,
  paraPartos,
  paraOperaciones,
  paraTratamientosOncologicos,
}
// https://www.donarsangre.org/todo-sobre-la-sangre/para-que-se-utiliza-la-sangre/
const infoToDeploy: {
  id: IDInfoToDeploy;
  title: string;
  description: string;
  uriImage: string;
}[] = [
  {
    id: IDInfoToDeploy.paraTratamientosGenerales,
    title: "Tratamiento de enfermedades relacionadas con el hígado",
    description:
      "Para el tratamiento de enfermedades relacionadas con el hígado (aunque no se limita a estos) se usan alrededor de 6 a 8 bolsas de plasma que se obtiene de la sangre donada.",
    uriImage: "/assets/imghelps/1-enfermos.png",
  },
  {
    id: IDInfoToDeploy.paraPartos,
    title: "Asistencia en caso de partos complicados",
    description:
      "Durante un parto complicado es posible usar entre 4 a 6 bolsas de sangre.",
    uriImage: "/assets/imghelps/2-partos.png",
  },
  {
    id: IDInfoToDeploy.paraOperaciones,
    title: "Trasplantes en general y asistencia rápida en accidentes",
    description:
      "En trasplantes de hígado o corazón se pueden usar entre 20 a 30 bolsas de sangre. En caso de accidentes y de acuerdo con la gravedad del hecho, se pueden llegar a usar hasta 30 bolsas de sangre.",
    uriImage: "/assets/imghelps/3-operaciones.png",
  },
  {
    id: IDInfoToDeploy.paraTratamientosOncologicos,
    title: "Tratamientos oncológicos ",
    description:
      "En caso de tratamientos oncológicos como la leucemia, se pueden usar hasta 200 bolsas de plaquetas. Las plaquetas son elementos celulares presentes en la sangre que impiden la hemorragia en el caso de una lesión en los vasos sanguíneos, adhiriéndose entre sí para formar un tapón.",
    uriImage: "/assets/imghelps/4-leucemia.png",
  },
];

const ImageAccordion = ({ src }: { src: string }) => {
  return <Image src={src} height="1080px" width="1920px" alt={src} />;
};

const HowToUseSection = () => {
  const [idInfoToDeploy, setIDInfoToDepley] = useState<IDInfoToDeploy>(
    IDInfoToDeploy.paraTratamientosGenerales
  );

  const handleChange =
    (id: IDInfoToDeploy) => (_: SyntheticEvent, expanded: boolean) => {
      setIDInfoToDepley(
        expanded ? id : IDInfoToDeploy.paraTratamientosGenerales
      );
    };
  return (
    <Container>
      <Typography variant="h4" className="title" textAlign={"center"}>
        ¿Cómo ayudas con tu donación?
      </Typography>
      <Stack>
        <ImageAccordion src={infoToDeploy[idInfoToDeploy].uriImage} />
        <Box>
          {infoToDeploy.map((info) => {
            return (
              <Accordion
                key={info.id}
                expanded={idInfoToDeploy === info.id}
                onChange={handleChange(info.id)}
              >
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="h5" fontWeight={"bold"}>
                    {info.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">{info.description}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Stack>
    </Container>
  );
};

export default HowToUseSection;
