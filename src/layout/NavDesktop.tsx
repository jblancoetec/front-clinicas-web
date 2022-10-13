import { Breadcrumbs, Container, Link, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import HCHIcon from "../components/HCHIcon";

const Separador = ({ simbolo }: { simbolo: string }) => (
  <span
    style={{
      color: "inherit",
      fontWeight: "bold",
    }}
  >
    &nbsp;{simbolo}&nbsp;
  </span>
);

const NavDesktop = () => (
  <Container
    sx={{
      height: "100%",
      backgroundColor: "var(--color-primario)",
      color: "white",
    }}
    maxWidth={false}
  >
    <Container
      sx={{
        height: "100%",
      }}
    >
      <Stack
        height="100%"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
        direction="row"
      >
        <Breadcrumbs separator={<Separador simbolo=">" />}>
          <Stack alignItems="center" direction="row" spacing={1}>
            <HCHIcon withBorder />
            <Link href="/" underline="none" color="white" fontWeight="bold">
              <Typography variant="h6">
                Departamento de Hemoterapia - Hospital de Clinicas
              </Typography>
            </Link>
          </Stack>
        </Breadcrumbs>
      </Stack>
    </Container>
  </Container>
);

export default NavDesktop;
