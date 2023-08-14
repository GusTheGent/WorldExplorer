import * as React from "react";
import { LoaderProps } from "./types";
import { Box, CircularProgress } from "@mui/material";
import "./Loader.scss";

const Loader: React.FunctionComponent<LoaderProps> = () => {
  return (
    <React.Fragment>
      <Box className="container">
        <CircularProgress size={"5rem"} />
      </Box>
    </React.Fragment>
  );
};

export default Loader;
