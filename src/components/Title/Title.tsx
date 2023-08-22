import * as React from "react";
import { TitleProps } from "./types";
import { Box, Typography } from "@mui/material";
import "./Title.scss";

const Title: React.FunctionComponent<TitleProps> = ({ title, isDetails }) => {
  const worldImage = process.env.PUBLIC_URL + "/world.svg";

  return (
    <React.Fragment>
      <Box className="title_container">
        <h1>{title}</h1>
        {!isDetails && (
          <Box className="world-img">
            <img id="earth" src={worldImage} alt="World" />
          </Box>
        )}
      </Box>
    </React.Fragment>
  );
};

export default Title;
