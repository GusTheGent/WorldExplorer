import React from "react";
import { GeneralCountryInfoProps } from "./types";
import { Box, Typography } from "@mui/material";
import Title from "components/Title/Title";

const GeneralCountryInfo: React.FunctionComponent<GeneralCountryInfoProps> = ({
  borders,
  capital,
  coatOfArms,
  independent,
  mapDetails,
  population,
  startOfTheWeek,
  status,
  unitedNationsMember,
}) => {
  return (
    <React.Fragment>
        <Title title="General Country Info"></Title>
      <Box
        sx={{
          padding: "2rem",
          display: "flex",
          justifyContent: "space-between",
          flexDirection:"row-reverse",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" , justifyContent:"center"  , alignItems:"center"}}>
          <Typography>Coat of Arms</Typography> 
          <img style={{ maxWidth: "150px", maxHeight: "150px" }} src={coatOfArms?.png} alt="Not Available"/>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" , justifyContent:"center"  , alignItems:"flex-start"}}>
          <Typography variant="h6">Capital: <span>{capital ? capital[0] : null}</span></Typography>
          <Typography variant="h6">Population: <span>{population ? population.toLocaleString().replace(",", ".") : null}</span></Typography>
          <Typography variant="h6">
            Start of the Week: <span>{startOfTheWeek ? startOfTheWeek.charAt(0).toUpperCase() + startOfTheWeek.slice(1) : null}</span>
          </Typography>
          <Typography variant="h6">Status: <span>{status ? status.charAt(0).toUpperCase() + status.slice(1) : null}</span></Typography>
          {borders ?
          <Typography variant="h6">
            Border Countries: {borders.map((border, index) => <span key={index}>{border}{index !== borders.length - 1 ? ", " : ""}</span>)}
          </Typography>
          : null}
          <Typography variant="h6">
            United Nations Member: <span>{unitedNationsMember ? "Yes" : "No"}</span>
          </Typography>
          <Typography variant="h6">
            Independent: <span>{ independent ? "Yes" : "No"}</span>
          </Typography>
          <Typography variant="h6">
           <a href={mapDetails && mapDetails.googleMaps} target="_blank" rel="noreferrer">Go to Google Maps</a>
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default GeneralCountryInfo;
