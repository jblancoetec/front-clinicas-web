import { Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const MainSection = () => {
  const title = "Vos queres crecer.\n Nosotros te queremos ayudar";
  const subtitle =
    "Crea una web con plantillas impecables, fácil edición y sin codificación.";

  return (
    <Grid
      container
      columnSpacing={{ xs: 0, md: 8 }}
      sx={{ minHeight: "92vh" }}
      py={{ xs: 2, md: 0 }}
    >
      <Grid
        item
        container
        xs={12}
        sm={6}
        md={6}
        lg={4}
        direction="column"
        justifyContent="center"
        rowSpacing={{ xs: 2, md: 4 }}
        textAlign={{ xs: "center", sm: "left" }}
      >
        <Grid item>
          <Typography variant="h2" className="title d-tablet d-desktop">
            {title}
          </Typography>

          <Typography variant="h3" className="title d-mobile">
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" className="subtitle">
            {subtitle}
          </Typography>
        </Grid>
        <Grid item className="d-tablet d-desktop">
          <Button
            variant="contained"
            className="button contained "
            size="large"
          >
            Completar formulario
          </Button>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        sm={6}
        md={6}
        lg={8}
        direction={"column"}
        flexGrow={1}
        justifyContent="center"
      >
        <Image
          src="/assets/main.png"
          width={"676px"}
          height={"658px"}
          alt="Pareja con corazon en el centro"
        />

        <Stack direction={"row"} justifyContent="center">
          <Button
            variant="contained"
            className="button contained d-mobile"
            size="large"
          >
            Completar formulario
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MainSection;
