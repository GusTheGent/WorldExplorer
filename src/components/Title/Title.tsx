import * as React from "react";
import { TitleProps } from "./types";
import { Box } from "@mui/material";
import "./Title.scss";

const Title: React.FunctionComponent<TitleProps> = ({ title }) => {

  return (
    <React.Fragment>
      <Box>
        <h1>{title}</h1>
      </Box>
    </React.Fragment>
  );
};

export default Title;
