import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ReactChild } from "react";

const SectionDesktop = ({
  children,
  title,
  subtitle,
  withButtonCreate,
  justContent,
  reverseContent,
}: {
  children: ReactChild;
  title: string;
  subtitle?: string;
  withButtonCreate?: boolean;
  justContent?: boolean;
  reverseContent?: boolean;
}) => (
  <Container>
    <Grid
      container
      spacing={4}
      justifyContent="center"
      direction={{
        md: reverseContent ? "row-reverse" : "row",
      }}
    >
      <Grid
        item
        spacing={2}
        container
        xs={12}
        md={justContent ? 12 : 6}
        textAlign="center"
        direction="column"
        justifyContent="center"
      >
        <Grid item>
          <Typography variant="h4" className="title">
            {title}
          </Typography>
        </Grid>
        {subtitle && (
          <Grid item>
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
          </Grid>
        )}
        {withButtonCreate && (
          <Grid item className="d-desktop">
            <Button
              variant="contained"
              className="button contained"
              size="large"
            >
              Donar
            </Button>
          </Grid>
        )}
      </Grid>
      <Grid item xs={12} md={justContent ? 12 : 6}>
        {children}
      </Grid>
    </Grid>
  </Container>
);
const SectionMobile = ({
  children,
  title,
  subtitle,
  withButtonCreate,
}: {
  children: ReactChild;
  title: string;
  subtitle?: string;
  withButtonCreate?: boolean;
}) => (
  <Container>
    <Stack spacing={4} justifyContent="center" alignItems={"center"}>
      <Box>
        <Typography variant="h4" className="title" textAlign={"center"}>
          {title}
        </Typography>
      </Box>
      {subtitle && (
        <Box>
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
      )}
      <Box>{children}</Box>
      {withButtonCreate && (
        <Box>
          <Button variant="contained" className="button contained" size="large">
            Donar
          </Button>
        </Box>
      )}
    </Stack>
  </Container>
);

const Section = (params: {
  children: ReactChild;
  title: string;
  subtitle?: string;
  withButtonCreate?: boolean;
  justContent?: boolean;
  reverseContent?: boolean;
}) => {
  const sm = useMediaQuery("min-width(600px)");
  return (
    <>
      {sm && <SectionDesktop {...params}>{params.children}</SectionDesktop>}
      {!sm && <SectionMobile {...params}>{params.children}</SectionMobile>}
    </>
  );
};

export default Section;
