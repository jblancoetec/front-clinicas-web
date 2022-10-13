import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "@mui/material";
import MackoIcon from "../components/HCHIcon";

const NavMobile = () => {
  return (
    <Box height="100%" width="100%">
      <AppBar position="fixed">
        <Toolbar sx={{ backgroundColor: "var(--color-primario)" }}>
          <Link href="/" flexGrow={1} underline="none" color="inherit">
            <MackoIcon withBorder versionSimple={false} />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavMobile;
