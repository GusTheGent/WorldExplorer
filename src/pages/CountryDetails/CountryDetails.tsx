import React from "react";
import { CountryDetailsProps } from "./types";
import Title from "components/Title/Title";
import { useParams } from "react-router-dom";
import { useGetCountryByNameQuery } from "services/api";
import Loader from "components/Loader/Loader";
import { Alert, Box, Card, Grid, Typography } from "@mui/material";
import "./CountryDetails.scss";

const CountryDetails: React.FunctionComponent<CountryDetailsProps> = () => {
  const { countryName } = useParams();
  const { data = [], error, isLoading } = useGetCountryByNameQuery(countryName);
  const country = data[0];
  const nativeName = country?.name?.nativeName;
  let langKey: string = "";

  if (nativeName) {
    const keys = Object.keys(nativeName);
    keys.forEach((key) => {
      langKey = key;
    });
  }

  if (error) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);

      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>An error has occurred:</div>
          <Alert severity="error">{errMsg}</Alert>
        </div>
      );
    } else {
      return <div>{error.message}</div>;
    }
  }

  return (
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <Box sx={{ padding: "2rem" }}>
          <Title title={country.name.common} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card className="card" raised={true}>
                <Typography variant="h6">
                  Official Name: <span>{country?.name?.official}</span>
                </Typography>
                <Typography variant="h6">
                  Common in Country's Language:
                  <span> {country.name.nativeName[langKey].common}</span>
                </Typography>
                <Typography variant="h6">
                  Official in Country's Language:
                  <span> {country.name.nativeName[langKey].official}</span>
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}
    </React.Fragment>
  );
};

export default CountryDetails;
