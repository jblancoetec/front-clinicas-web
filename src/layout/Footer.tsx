import {
  Link,
  Stack,
  Typography,
  useMediaQuery,
  Box,
  Container,
} from "@mui/material";
import { Facebook, Twitter, Instagram, Phone } from "@mui/icons-material";

const Footer = () => {
  return (
    <Container>
      <Stack
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        width={"100%"}
        alignItems={{
          xs: "center",
          md: "flex-start",
        }}
        alignContent={{
          xs: "center",
          md: "flex-start",
        }}
        justifyContent={"space-around"}
        py={"2rem"}
      >
        <Stack>
          <Typography
            variant={"h5"}
            className="subtitle bold"
            textAlign={"center"}
          >
            ¿Querés comunicarte con nosotros?
          </Typography>
          <Stack
            direction={"column"}
            justifyContent={"flex-start"}
            alignItems={"start"}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
                gap: "1rem",
              }}
            >
              <Link
                href="https://es-la.facebook.com/amhclinicas/"
                color={"inherit"}
              >
                <Facebook color="inherit" />
              </Link>
              <a href="#">Facebook</a>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
                gap: "1rem",
              }}
            >
              <Link
                href="https://twitter.com/Prensaclinicas?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                color={"inherit"}
              >
                <Twitter color="inherit" />
              </Link>
              <a href="#">Twitter</a>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
                gap: "1rem",
              }}
            >
              <Link
                href="https://www.instagram.com/hospitaldeclinicasok/?hl=es"
                color={"inherit"}
              >
                <Instagram color="inherit" />
              </Link>
              <a href="#">Instagram</a>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
                gap: "1rem",
              }}
            >
              <Link href="tel:011 5950-8000" color={"inherit"}>
                <Phone color="inherit" />
              </Link>
              <a href="#">WhatsApp</a>
            </Box>
          </Stack>
        </Stack>
        <Stack>
          <Typography
            variant={"h5"}
            className="subtitle bold"
            textAlign={"center"}
          >
            Desarrollado por
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <a href="mailto:gsarubbi28@gmail.com">Gino Sarubbi</a>
              <a href="mailto:nazareno.fiorentino22@gmail.com">
                Nazareno Fiorentino
              </a>
              <a href="mailto:jerebarbozaperi2@gmail.com">Jeremias Barboza</a>
              <a href="mailto:silvanicol830@gmail.com">Nicole Silva</a>
            </Box>
          </Box>
        </Stack>
        <Stack>
          <Typography
            variant={"h5"}
            className="subtitle bold"
            textAlign={"center"}
          >
            Ilustrado por
          </Typography>
          <Box>
            <a href="mailto:pepoyiyo@gmail.com">Sofia San Martin</a>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Footer;
