import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Divider,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { ReactNode, useState } from "react";
import { MouseEvent } from "react";
import MackoIcon from "../components/HCHIcon";

const NavMobile = ({
  linksLeft,
  linksRight,
}: {
  linksLeft: { label: string; href: string; icon: ReactNode }[];
  linksRight: { label: string; href: string; icon: ReactNode }[];
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
