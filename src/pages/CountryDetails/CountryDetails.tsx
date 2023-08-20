import React from "react";
import { CountryDetailsProps } from "./types";
import Title from "components/Title/Title";
import { useParams } from "react-router-dom";
import { useGetCountryByNameQuery } from "services/api";
import Loader from "components/Loader/Loader";
import { Alert, Avatar, Box, Card, Grid, Typography } from "@mui/material";
import "./CountryDetails.scss";

const CountryDetails: React.FunctionComponent<CountryDetailsProps> = () => {
  const { countryName } = useParams();
  const { data = [], error, isLoading } = useGetCountryByNameQuery(countryName);
  const country = countryName === "India" ? data[1] : data[0];
  const nativeName = country?.name?.nativeName;
  const currencies = country?.currencies;
  const languagesSpoken = country?.languages;
  // const translationObject = country?.translations
  let langKey: string = "";
  let currencyKey: string= "";
  let languages: string[] = [];

  if (nativeName) {
    const keys = Object.keys(nativeName);
    keys.forEach((key) => {
      langKey = key;
    });
  }

  if(currencies) {
    const keys = Object.keys(currencies)
    keys.forEach((key) => {
      currencyKey = key
    })
  }

  if(languagesSpoken) {
    const values = Object.values(languagesSpoken)
    languages = values;
  }

  // const translations = Object.entries(translationObject)
  // translations.map((trans) => console.log(trans))

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
          <Box className="title-container">
            <Title title={country.name.common} />
            <Avatar src={country.flags.png} />
          </Box>
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
              <Card className="card" raised={true}>
                <Typography variant="h6">
                  Region:
                  <span> {country.region}</span>
                </Typography>
                <Typography variant="h6">
                  Subregion:
                  <span> {country.subregion}</span>
                </Typography>
              </Card>
              <Card className="card" raised={true}>
                <Typography variant="h6">
                  Currency: <span>{country?.currencies[currencyKey].name}</span>
                </Typography>
              </Card>
              <Card className="card" raised={true}>
                <Typography variant="h6">
                  Languages Spoken: {languages.map((language, index) => <span key={index}>{language}{index !== languages.length - 1 ? ', ' : ''}</span>)}
                </Typography>
              </Card>
              <Card className="card" raised={true}>
                <Typography variant="h6">
                 Translations: {}
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
