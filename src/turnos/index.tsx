import React from "react";
import Formulario from "./components/FormularioTurnos";

const turnos = [new Date(), new Date(), new Date(), new Date()];
turnos.forEach((turno, index) => {
  turno.setHours(index * 2 + 8);
  turno.setMinutes(0);
  turno.setSeconds(0);
});

const Index = () => {
  return (
    <>
      <Formulario turnos={turnos} />
    </>
  );
};

export default Index;
