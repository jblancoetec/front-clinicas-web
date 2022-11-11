import { Container, Stack } from "@mui/material";
import Card from "./CardStepsSection";
import Image from "next/image";

const StepsSection = () => (
  <>
    <Card
      title="Antes de donar, infórmate"
      subtitle="Estar descansada/o, habiendo dormido por lo menos 6 horas. Sentirse en buenas condiciones (no tener síntomas de malestar general, fiebre, resfrío o tos). Debes desayunar o almorzar de forma habitual y tomar líquidos en abundancia (no alcohólicos). Chequear requisitos para saber si cumplís con las condiciones generales para ser donador."
      reverseContent
    >
      <Image
        src="/assets/imgsteps/1-completar.png"
        alt="Antes de donar, infórmate"
        height="375px"
        width="666px"
        className="img-section-home"
      />
    </Card>

    <Card
      title="¡Bien, eres un posible donante!"
      subtitle="Si cumplís con los requisitos mínimos para ser donador, te vamos a pedir algunos datos, además de fecha y hora en la que podés concurrir al hospital. Esto lo hacemos con el propósito de no generar largas esperas ni incomodidades."
    >
      <Image
        src="/assets/imgsteps/2-aprobar.png"
        alt="¡Bien, eres un posible donante!"
        height="375px"
        width="666px"
        className="img-section-home"
      />
    </Card>

    <Card
      title="Concurrí al Centro de Donación con tu DNI"
      subtitle="Tené tu DNI a mano porque deberás presentarlo. En caso de tener dudas o estar en desacuerdo, tenés derecho de auto excluirte y no donar. Para facilitarte el proceso, evitar imprevistos y despejar dudas, te sugerimos ver las condiciones generales necesarias para ser donador."
      reverseContent
    >
      <Image
        src="/assets/imgsteps/3-concurrir.png"
        alt="Antes de donar, infórmate"
        height="375px"
        width="666px"
        className="img-section-home"
      />
    </Card>

    <Card
      title="Presentarse en 3er piso, sala 5 de Hemoterapia"
      subtitle="El personal de salud te entrevistará para ver si estás en condiciones de donar. Toda la información que brindes es confidencial. Se verifica tu peso, temperatura, pulso y presión arterial, y se toman muestras de tu sangre para controlar que tus glóbulos rojos estén bien."
    >
      <Image
        src="/assets/imgsteps/4-registrarse.png"
        alt="Antes de donar, infórmate"
        height="375px"
        width="666px"
        className="img-section-home"
      />
    </Card>

    <Card
      title="Llegó el momento de donar"
      subtitle="La extracción dura unos 40 minutos. Se realiza en un ambiente seguro y con material descartable. Se extrae sólo una unidad de sangre (alrededor de 450 ml) y pequeñas muestras para posteriores análisis."
      reverseContent
    >
      <Image
        src="/assets/imgmain/tiempo.png"
        alt="Antes de donar, infórmate"
        height="375px"
        width="666px"
        className="img-section-home"
      />
    </Card>
  </>
);

export default StepsSection;
