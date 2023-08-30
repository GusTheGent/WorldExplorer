import * as React from "react";
import { NavbarProps } from "./types";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FunctionComponent<NavbarProps> = () => {
  const navigate = useNavigate();
  const handleOnClick = () => navigate('/');

  
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#333" }}>
          <Toolbar>
            <Typography variant="h4" component="div">
              <Link to="/" style={{ textDecoration: "none", color: "white" }} onClick={handleOnClick}>
                World Explorer
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
