import * as React from "react";
import { CountryNameProps } from "./types";
import {  Box, Typography } from "@mui/material";


const CountryName: React.FunctionComponent<CountryNameProps> = ({
  officialName,
  countryCommon,
  countryOfficial,
}) => {
  return (
    <React.Fragment>
      <Box sx={{ padding: "2rem"  ,display:"flex" , justifyContent:"flex-start" , flexDirection:"column" , alignItems:"flex-start"}}>
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
      </Box>
    </React.Fragment>
  );
};

export default CountryName;
