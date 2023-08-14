import * as React from "react";
import { NavbarProps } from "./types";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar: React.FunctionComponent<NavbarProps> = () => {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" component="div">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Countries
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
