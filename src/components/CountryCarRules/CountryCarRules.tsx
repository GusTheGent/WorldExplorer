import React from "react";
import "./CountryCarRules.scss";
import { CountryCarRulesProps } from "./types";
import { Box,  Typography } from "@mui/material";

const CountryCarRules: React.FunctionComponent<CountryCarRulesProps> = ({
  carRules,
}) => {
  return (
    <React.Fragment>
      <Box
        sx={{
          padding: "2rem",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h6">
          Car Plates: {" "}
          {carRules?.signs ? carRules?.signs.map((sign, index) => (
            <span key={index}>{sign}</span>
          )) : "Not Available"}
        </Typography>
        <Typography variant="h6">
          Road Driving Side: <span>{carRules?.side ? carRules?.side : "Not Available"}</span>
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default CountryCarRules;
