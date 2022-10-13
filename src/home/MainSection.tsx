import { Button, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

const ButtonDonar = () => (
  <Grid item>
    <Button variant="contained" className="button contained" size="large">
      donar
    </Button>
  </Grid>
);

const MainSection = () => {
  const sm = useMediaQuery("(min-width: 600px)");
  const title =
    "¿Sabias que cada donación voluntaria permite salvar hasta cuatro vidas?";
  const subtitle =
    " El proceso solo dura entre 7 a 10 minutos, y con eso ayudas un montón. Podes empezar haciendo click en el botón DONAR de aquí abajo. ";

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
        lg={6}
        direction="column"
        justifyContent="center"
        rowSpacing={{ xs: 2, md: 4 }}
        textAlign={{ xs: "center", sm: "left" }}
      >
        <Grid item>
          <Typography variant={sm ? "h3" : "h4"} className="title">
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            className="subtitle"
            sx={{ lineHeight: "1.75" }}
          >
            {subtitle}
          </Typography>
        </Grid>
        {sm && <ButtonDonar />}
      </Grid>
      <Grid
        item
        container
        xs={12}
        sm={6}
        md={6}
        lg={6}
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
          {!sm && <ButtonDonar />}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MainSection;
