import React from "react";
import { CountryDetailsProps } from "./types";
import Title from "components/Title/Title";
import { useParams } from "react-router-dom";
import { useGetCountryByNameQuery } from "services/api";
import Loader from "components/Loader/Loader";
import { Alert, Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import "./CountryDetails.scss";
import CountryName from "components/CountryName/CountryName";
import Region from "components/Region/Region";
import Currency from "components/Currency/Currency";
import LanguagesSpoken from "components/LanguagesSpoken/LanguagesSpoken";
import Translations from "components/Translations/Translations";

const CountryDetails: React.FunctionComponent<CountryDetailsProps> = () => {
  const { countryName } = useParams();
  const { data = [], error, isLoading } = useGetCountryByNameQuery(countryName);
  const country = countryName === "India" ? data[1] : data[0];
  const nativeName = country?.name?.nativeName;
  const currencies = country?.currencies;
  const languagesSpoken = country?.languages;
  const translationObject = country?.translations
  let langKey: string = "";
  let currencyKey: string = "";
  let languages: string[] = [];

  if (nativeName) {
    const keys = Object.keys(nativeName);
    keys.forEach(key => {
      langKey = key;
    });
  }

  if (currencies) {
    const keys = Object.keys(currencies);
    keys.forEach(key => {
      currencyKey = key;
    });
  }

  if (languagesSpoken) {
    const values = Object.values(languagesSpoken);
    languages = values;
    console.log(values)

  }
  let translations: Record<string, { common: string; official: string }> = {};
  if (translationObject) {
    for (const [languageCode, translation] of Object.entries(translationObject)) {
      if ("common" in translation && "official" in translation) {
        translations[languageCode] = translation;
      }
    }
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
          <Box className="title-container" sx={{ backgroundColor: "#333" }}>
            <Title isDetails={true} title={country.name.common} />
            <Avatar src={country.flags.png} />
          </Box>
          <Grid container spacing={2}  sx={{ paddingY: "2rem", display: "flex", justifyContent: "center" , alignItems:"center" }}>
            <Grid item xs={8}>
            <Card sx={{ marginBottom: "1rem" , borderRadius:"5px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <CardContent>
              <CountryName
                 officialName={country?.name?.official}
                 countryCommon={country.name.nativeName[langKey].common}
                 countryOfficial={country.name.nativeName[langKey].official}
              />
            </CardContent>
          </Card>
          <Card sx={{ marginBottom: "1rem" , borderRadius:"5px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <CardContent>
              <Region
                region={country.region}
                subregion={country.subregion}
              />
            </CardContent>
          </Card>
          <Card sx={{ marginBottom: "1rem" , borderRadius:"5px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <CardContent>
            <Currency currency={country?.currencies[currencyKey].name}></Currency>               </CardContent>
          </Card>
          <Card sx={{ marginBottom: "1rem" , borderRadius:"5px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <CardContent>
              <LanguagesSpoken languages={["English", "Spanish"]} />
            </CardContent>
          </Card>
            <Card sx={{ marginBottom: "1rem" , borderRadius:"5px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <CardContent>
              <Translations translations={translations} />
            </CardContent>
          </Card>
            </Grid>
          </Grid>
          </Box>
      )}
    </React.Fragment>
  );
};

export default CountryDetails;
