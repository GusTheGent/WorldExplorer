import * as React from "react";
import { CountryNameProps } from "./types";
import {  Card, Typography } from "@mui/material";


const CountryName: React.FunctionComponent<CountryNameProps> = ({
  officialName,
  countryCommon,
  countryOfficial,
}) => {
  return (
    <React.Fragment>
      <Card raised={true}>
          <Typography variant="h6">
            Official Name: <span>{officialName}</span>
          </Typography>
          <Typography variant="h6">
            Common in Country's Language:
            <span> {countryCommon}</span>
          </Typography>
          <Typography variant="h6">
            Official in Country's Language:
            <span> {countryOfficial}</span>
          </Typography>
      </Card>
    </React.Fragment>
  );
};

export default CountryName;
