import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Contact = () => {
  const sm = useMediaQuery("(min-width: 600px)");
  const title =
    "¿Sabías que cada donación voluntaria permite salvar hasta cuatro vidas?";
  const subtitle =
    "El proceso solo dura 40 minutos, y con eso ayudas un montón. Aquí abajo te dejamos todos nuestros datos de contacto para que puedas consultar o acercarse directamente a Avenida Córdoba 2351 Piso 3 Sala 5 (CABA).";

  return (
    <Box
      display={"grid"}
      gridTemplateColumns={{
        xs: "1fr",
        md: "1fr 1fr",
      }}
      gridTemplateRows="auto"
      gridTemplateAreas={{
        xs: "'title' 'subtitle' 'img' 'icons'",
        md: "'. img' 'title img' 'subtitle img' 'icons img' '. img'",
      }}
      sx={{ minHeight: "92vh" }}
      py={{ xs: 2, md: 0 }}
    >
      <Box gridArea={"title"} alignSelf="end" justifySelf={"center"}>
        <Typography
          variant={sm ? "h3" : "h4"}
          textAlign={{
            xs: "center",
            md: "left",
          }}
          className="title"
          maxWidth={"sm"}
          px={{
            xs: 2,
            md: 0,
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box gridArea={"subtitle"} alignSelf="center" justifySelf={"center"}>
        <Typography
          variant="h6"
          className="subtitle"
          textAlign={{
            xs: "center",
            md: "left",
          }}
          sx={{ lineHeight: "1.75" }}
          maxWidth="sm"
          py={{
            xs: 2,
            md: 0,
          }}
          px={{
            xs: 2,
            md: 0,
          }}
        >
          {subtitle}
        </Typography>
      </Box>
      <Box gridArea={"img"} alignSelf="center" justifySelf={"center"}>
        <Image
          src="/assets/imgmain/imgmain.png"
          width={"1920px"}
          height={"1080px"}
          alt="Pareja con corazon en el centro"
          className="img-section-home"
        />
      </Box>
      <Box gridArea={"icons"} sx={{ color: "var(--color-primario)" }}>
        <Stack
          direction={"row"}
          justifyContent={{
            xs: "center",
            md: "start",
          }}
          fontSize={32}
        >
          <a href="https://es-la.facebook.com/hemoterapia.hospitaldeclinicas">
            <FacebookIcon fontSize="inherit" sx={{ mx: 2 }} />
          </a>
          <a href="https://twitter.com/Prensaclinicas?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
            <TwitterIcon fontSize="inherit" sx={{ mx: 2 }} />
          </a>
          <a href="https://www.instagram.com/hospitaldeclinicasok/?hl=es">
            <InstagramIcon fontSize="inherit" sx={{ mx: 2 }} />
          </a>
          <a href="tel:011 5950-8000">
            <LocalPhoneIcon fontSize="inherit" sx={{ mx: 2 }} />
          </a>
        </Stack>
      </Box>
    </Box>
  );
};

export default Contact;
