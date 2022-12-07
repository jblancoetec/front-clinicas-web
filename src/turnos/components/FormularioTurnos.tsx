import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import styles from "./FormularioTurnos.module.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Container, Link, Stack, Typography } from "@mui/material";
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
    setEstado("okey");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
        <Alert
          severity="success"
          sx={{
            justifyContent: "center",
          }}
        >
          <Typography textAlign={"center"}>
            ¡¡¡¡Todo listo!!!!👏 Te esperamos en el 3er Piso, sala 5 del
            Hospital de Clinicas,{" "}
            <Link href="https://goo.gl/maps/iF42BKGs5VpAmBuJ6">
              Av. Córdoba 2351.
            </Link>
          </Typography>
        </Alert>
      )}
      <Container maxWidth={"sm"}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          display="flex"
          flexDirection={"column"}
        >
          <Typography variant="h5" mt={2} className={"title"}>
            Trabajamos para darte el mejor de tratos.
          </Typography>
          <Typography variant="body1" my={2}>
            Si nos brindas algunos datos, esto nos permitirá conocerte mejor y
            facilitar tu proceso de donación.
          </Typography>

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

          <Typography my={2}>
            Los siguientes horarios son opcionales y fueron propuestos de
            acuerdo con la menor tasa de concurrencia de donadores. Esto lo
            hacemos para agilizar tiempos y no generar largas esperas.
          </Typography>

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
              <Box my={2}>
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
      </Container>
    </>
  );
}
