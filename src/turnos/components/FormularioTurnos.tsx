import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import styles from "./FormularioTurnos.module.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Typography } from "@mui/material";
import { postTurno } from "../service";
import Alert from "@mui/material/Alert";

export default function LayoutTextFields({ turnos }: { turnos: Date[] }) {
  const [indexTurnoSeleccionado, setIndexTurnoSeleccionado] = useState(1);
  const [datosTurno, setDatosTurno] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
    telefono: "",
    fecha: new Date(),
  });
  const [estado, setEstado] = useState<"loading" | "okey" | "error">("loading");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await postTurno(datosTurno);
      setEstado(res.status);
    } catch (error) {
      setEstado("error");
      console.log(error);
    }
  };

  const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setDatosTurno({
      ...datosTurno,
      [e.target.name]: e.target.value,
    });
  };

  const createHandleChangeTurno = (indexTurno: number) => {
    return () => {
      setIndexTurnoSeleccionado(indexTurno);
      setDatosTurno({ ...datosTurno, fecha: turnos[indexTurnoSeleccionado] });
    };
  };

  return (
    <>
      {estado === "error" && (
        <Alert severity="error"> El turno no pudo ser enviado </Alert>
      )}
      {estado === "okey" && (
        <Alert severity="success">El turno pudo ser reservado</Alert>
      )}
      <Box
        component="form"
        onSubmit={handleSubmit}
        className={styles.contenedor}
      >
        <Typography>Completá con tus datos el siguiente formulario </Typography>

        <TextField
          name="nombre"
          onChange={handleChangeForm}
          label={"Nombre"}
          id="Nombre"
          required={true}
          type="text"
        />
        <TextField
          name="apellido"
          onChange={handleChangeForm}
          label={"Apellido"}
          id="Apellido"
          margin="normal"
          required={true}
          type="text"
        />
        <TextField
          name="dni"
          onChange={handleChangeForm}
          required={true}
          type="text"
          label={"Documento De Identidad"}
          id="DocumentoDeIdentidad"
          margin="normal"
        />
        <TextField
          name="email"
          onChange={handleChangeForm}
          required={true}
          type="Email"
          label={"Correo Electronico"}
          id="CorreoElectronico"
          margin="normal"
        />
        <TextField
          name="telefono"
          onChange={handleChangeForm}
          required={true}
          type="number"
          label={"Numero De Telefono"}
          id="NumeroDeTelefono"
          margin="normal"
        />

        <Typography> Elegí unos de los siguientes turnos </Typography>

        <Box>
          <FormGroup className={styles.contenedorCheck}>
            {turnos.map((turno, index) => (
              <FormControlLabel
                checked={index === indexTurnoSeleccionado}
                onChange={createHandleChangeTurno(index)}
                key={index}
                control={<Checkbox />}
                label={new Date(turno).toLocaleString()}
              />
            ))}
            <Box>
              <Button
                type="submit"
                variant="contained"
                className="button contained"
                size="large"
              >
                Enviar
              </Button>
            </Box>
          </FormGroup>
        </Box>
      </Box>
    </>
  );
}
