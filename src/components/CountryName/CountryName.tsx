import * as React from "react";
import { CountryNameProps } from "./types";
import { useGetCountryByNameQuery } from "services/api";
import { useParams } from "react-router-dom";
import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import Title from "components/Title/Title";

const CountryName: React.FunctionComponent<CountryNameProps> = ({
  officialName,
  countryCommon,
  countryOfficial,
}) => {
  return (
    <React.Fragment>
      <Box sx={{ padding: "2rem"  ,display:"flex" , justifyContent:"flex-start" , flexDirection:"column" , alignItems:"flex-start"}}>
        <Box>
          {" "}
          <Typography variant="h6">
            Official Name: <span>{officialName}</span>
          </Typography>
        </Box>
        <Box>
          {" "}
          <Typography variant="h6">
            Common in Country's Language:
            <span> {countryCommon}</span>
          </Typography>
        </Box>
        <Box>
          {" "}
          <Typography variant="h6">
            Official in Country's Language:
            <span> {countryOfficial}</span>
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default CountryName;
