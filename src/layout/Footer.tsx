import { Link, Stack, Typography, useMediaQuery, Box } from "@mui/material";
import { Facebook, Twitter, Instagram, Phone } from "@mui/icons-material";

const Footer = () => {
  return (
    <Stack
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      spacing={2}
      width={"100%"}
      alignItems={{
        xs: "center",
        md: "flex-start",
      }}
      justifyContent={"space-around"}
      py={"2rem"}
    >
      <Box sx={{ display: "row", alignItems: "center", justifyContent: "center", alignContent: "center" }}>
        <Typography variant={"h5"} className="subtitle bold" textAlign={"center"}>
          ¿Querés comunicarte con nosotros?
        </Typography>
        <Stack direction={"row"} spacing={5} justifyContent={"center"} alignItems={"center"} >
          <Link href="https://es-la.facebook.com/amhclinicas/" color={"inherit"}>
            <Facebook color="inherit" />
          </Link>
          <Link
            href="https://twitter.com/Prensaclinicas?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            color={"inherit"}
          >
            <Twitter color="inherit" />
          </Link>
          <Link
            href="https://www.instagram.com/hospitaldeclinicasok/?hl=es"
            color={"inherit"}
          >
            <Instagram color="inherit" />
          </Link>
          <Link href="tel:011 5950-8000" color={"inherit"}>
            <Phone color="inherit" />
          </Link>
        </Stack>
      </Box>
      <Stack display={"flex"}  >
        <Typography variant={"h5"} className="subtitle bold" textAlign={"center"}>
          Desarrollado por
        </Typography>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
          }}>
          <a href="mailto:gsarubbi28@gmail.com">Gino Sarubbi</a>
          <a href="mailto:nazareno.fiorentino22@gmail.com">Nazareno Fiorentino</a>
          <a href="mailto:erebarbozaperi2@gmail.com">Jeremias Barboza</a>
          <a href="mailto:silvanicol830@gmail.com">Nicole Silva</a>
          </Box>
        </Box>
      </Stack>
      <Stack>
        <Typography variant={"h5"} className="subtitle bold" textAlign={"center"}>
          Ilustrado por
        </Typography>
        <Box>
          <a href="mailto:sofiasanmartin@gmail.com">Sofia San Martin</a>
        </Box>
      </Stack>

    </Stack>
  );
};

export default Footer;
