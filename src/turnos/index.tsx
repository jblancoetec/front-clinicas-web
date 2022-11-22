import { Alert, LinearProgress } from "@mui/material";
import React from "react";
import Formulario from "./components/FormularioTurnos";
import { useTurnosDisponibles } from "./hooks";

const Index = () => {
  const stateTurnos = useTurnosDisponibles();

  return (
    <>
      {stateTurnos.status === "loading" && <LinearProgress />}
      {stateTurnos.status === "error" && (
        <Alert severity="error">Algo no fue como se esperaba</Alert>
      )}
      {stateTurnos.status === "okey" && (
        <Formulario turnos={stateTurnos.turnos} />
      )}
    </>
  );
};

export default Index;
