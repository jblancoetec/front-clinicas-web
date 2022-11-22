import { Box, Button, Container, Typography } from "@mui/material";
import { ReactChild } from "react";

const Card = ({
  children,
  title,
  subtitle,
  reverseContent = false,
}: {
  children: ReactChild;
  title: string;
  subtitle: string;
  reverseContent?: boolean;
}) => {
  const layout = reverseContent
    ? "'. children''title children' 'subtitle children' 'btn children' '. children'"
    : "'children .''children title' 'children subtitle ' 'children btn' 'children .'";
  return (
    <Container>
      <Box
        display={"grid"}
        gridTemplateColumns={{
          xs: "1fr",
          md: "1fr 1fr",
        }}
        gridTemplateRows="auto"
        gridTemplateAreas={{
          xs: "'title' 'subtitle' 'children' 'btn'",
          md: layout,
        }}
        rowGap={"1rem"}
        columnGap={"1rem"}
        alignItems="center"
        alignContent={"center"}
      >
        <Box gridArea={"title"} alignSelf="end">
          <Typography variant="h4" className="title" textAlign={"center"}>
            {title}
          </Typography>
        </Box>
        <Box gridArea={"subtitle"} alignSelf="center">
          <Typography
            variant="body1"
            className="subtitle"
            maxWidth="sm"
            mx="auto"
            textAlign={"center"}
            sx={{
              lineHeight: "1.75",
            }}
          >
            {subtitle}
          </Typography>
        </Box>
        <Box
          gridArea={"btn"}
          alignSelf="start"
          display="flex"
          justifyContent={"center"}
        >
          <Button
            href="/formulario"
            variant="contained"
            className="button contained"
            size="large"
          >
            Donar
          </Button>
        </Box>
        <Box gridArea={"children"}>{children}</Box>
      </Box>
    </Container>
  );
};

export default Card;
