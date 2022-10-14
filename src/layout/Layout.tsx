import Head from "next/head";
import { Fragment, ReactNode } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import Footer from "./Footer";
import { Box } from "@mui/material";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#7e57c2" />
        <meta name="theme-color" content="#da532c" />
        <title>Departamento de Hemoterapia - Hospital de Clinicas</title>
        <meta
          name="description"
          content="Macko - Servicios web especializados en la indumentaria"
        />
      </Head>

      <header>
        <Box height="8vh" width={"100%"} className="d-desktop">
          <NavDesktop />
        </Box>

        <Box height={"64px"} className="d-tablet d-mobile">
          <NavMobile />
        </Box>
      </header>

      <main className="background-light">
        <Box minHeight={"84vh"}>{children}</Box>
      </main>
      <footer>
        <Box
          width={"100%"}
          sx={{
            backgroundColor: "var(--color-gris-claro)",
            color: "var(--color-gris-oscuro)",
          }}
        >
          <Footer />
        </Box>
      </footer>
    </Fragment>
  );
};

export default Layout;
