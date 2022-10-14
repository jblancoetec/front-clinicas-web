import { Box, Grid, Typography, useMediaQuery } from "@mui/material";

const HelpSection = () => {
  const sm = useMediaQuery("min-width(600px)");
  return (
    <>
      <Typography
        textAlign={"center"}
        variant={sm ? "h3" : "h4"}
        className="title"
      >
        ¿A quién ayudas cuando donas?
      </Typography>
    </>
  );
};

export default HelpSection;
