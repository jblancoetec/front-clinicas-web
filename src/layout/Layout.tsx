import { Fragment, ReactNode } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import Footer from "./Footer";
import { Box } from "@mui/material";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
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
