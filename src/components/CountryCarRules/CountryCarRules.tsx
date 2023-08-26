import React from "react";
import "./CountryCarRules.scss";
import { CountryCarRulesProps } from "./types";
import { Box,  Typography } from "@mui/material";
import Title from "components/Title/Title";

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
        <Title title="Traffic Rules"></Title>
        <Typography variant="h6">
          Car Plates: {" "}
          {carRules?.signs.map((sign, index) => (
            <span key={index}>{sign}</span>
          ))}
        </Typography>
        <Typography variant="h6">
          Road Driving Side: <span>{carRules?.side}</span>
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default CountryCarRules;
