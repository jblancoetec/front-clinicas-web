import { Link, Stack, Typography, useMediaQuery } from "@mui/material";
import { Facebook, Twitter, Instagram, Phone } from "@mui/icons-material";

const Footer = () => {
  const sm = useMediaQuery("(min-width: 600px)");
  return (
    <Stack
      spacing={2}
      height={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography
        variant={sm ? "h4" : "h5"}
        className="subtitle bold"
        textAlign={"center"}
      >
        ¿Querés comunicarte con nosotros?
      </Typography>
      <Stack direction={"row"} spacing={5}>
        <Link href="https://es-la.facebook.com/amhclinicas/" color={"inherit"}>
          <Facebook fontSize="large" color="inherit" />
        </Link>
        <Link
          href="https://twitter.com/Prensaclinicas?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          color={"inherit"}
        >
          <Twitter fontSize="large" color="inherit" />
        </Link>
        <Link
          href="https://www.instagram.com/hospitaldeclinicasok/?hl=es"
          color={"inherit"}
        >
          <Instagram fontSize="large" color="inherit" />
        </Link>
        <Link href="tel:011 5950-8000" color={"inherit"}>
          <Phone fontSize="large" color="inherit" />
        </Link>
      </Stack>
    </Stack>
  );
};

export default Footer;
