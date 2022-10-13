import {
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  Box,
  Avatar,
} from "@mui/material";

import Section from "./Section";
import Image from "next/image";
import MainSection from "./MainSection";

const Home = () => {
  return (
    <>
      <Container className="background-light">
        <MainSection />
      </Container>

      <Container maxWidth={false} className="background-light">
        <Container>
          <Stack spacing={8} py={8}>
            <Section
              title="Antes de donar, infórmate"
              subtitle="Estar descansada/o, habiendo dormido por lo menos 6 horas. Sentirse en buenas condiciones (no tener síntomas de malestar general, fiebre, resfrío o tos). Debes desayunar o almorzar de forma habitual y tomar líquidos en abundancia (no alcohólicos). Ingresa a nuestro formulario para saber si eres un posible donante, haciendo CLIC en el botón de DONAR aquí abajo."
              withButtonCreate
              reverseContent
            >
              <Image
                src="/assets/img-step-1.png"
                alt="Antes de donar, infórmate"
                height="375px"
                width="666px"
                className="img-section-home"
              />
            </Section>

            <Section
              title="¡Bien, eres un posible donante!"
              subtitle="Una vez hecho nuestro formulario y ver que salió todo bien, te vamos a pedir algunos datos, además de fecha y hora en la que podés concurrir al hospital."
            >
              <Image
                src="/assets/img-step-2.png"
                alt="¡Bien, eres un posible donante!"
                height="375px"
                width="666px"
                className="img-section-home"
              />
            </Section>

            <Section
              title="Concurrí al Centro de Donación con tu DNI"
              subtitle="Tené tu DNI a mano porque deberás presentarlo. En caso de tener dudas o estar en desacuerdo tenés derecho de auto excluirte y no donar."
              reverseContent
            >
              <Image
                src="/assets/img-step-3.png"
                alt="Antes de donar, infórmate"
                height="375px"
                width="666px"
                className="img-section-home"
              />
            </Section>

            <Section
              title="Preséntate en la mesa de entrada"
              subtitle="El personal de salud te entrevistará para ver si estás en condiciones de donar. Toda la información que brindes es confidencial. Se verifica tu peso, temperatura, pulso y presión arterial, y se toman muestras de tu sangre para controlar que tus glóbulos rojos estén bien."
            >
              <Image
                src="/assets/img-step-4.png"
                alt="Antes de donar, infórmate"
                height="375px"
                width="666px"
                className="img-section-home"
              />
            </Section>

            <Section
              title="Llegó el momento de donar"
              subtitle="La extracción dura entre 7 y 10 minutos. Se realiza en un ambiente seguro y con material descartable. Se extrae sólo una unidad de sangre (alrededor de 450 ml) y pequeñas muestras para posteriores análisis."
              reverseContent
            >
              <Image
                src="/assets/img-step-5.png"
                alt="Antes de donar, infórmate"
                height="375px"
                width="666px"
                className="img-section-home"
              />
            </Section>
          </Stack>
        </Container>
      </Container>
    </>
  );
};

export default Home;
