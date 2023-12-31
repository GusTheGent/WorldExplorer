import React from "react";
import { CountryDetailsProps } from "./types";
import Title from "components/Title/Title";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCountryByNameQuery } from "services/api";
import Loader from "components/Loader/Loader";
import { Alert, Box, Card, CardContent, Grid } from "@mui/material";
import "./CountryDetails.scss";
import CountryName from "components/CountryName/CountryName";
import Region from "components/Region/Region";
import Currency from "components/Currency/Currency";
import LanguagesSpoken from "components/LanguagesSpoken/LanguagesSpoken";
import Translations from "components/Translations/Translations";
import CountryCarRules from "components/CountryCarRules/CountryCarRules";
import GeneralCountryInfo from "components/GeneralCountryInfo/GeneralCountryInfo";

const CountryDetails: React.FunctionComponent<CountryDetailsProps> = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const { data = [], error, isLoading } = useGetCountryByNameQuery(countryName);
  const country = data.find((item) => item.name.common === countryName);
  const nativeName = country?.name?.nativeName;
  const currencies = country?.currencies;
  const languagesSpoken = country?.languages;
  const translationObject = country?.translations;
  let langKey: string = "";
  let currencyKey: string = "";
  let languages: string[] = [];
  const arrowImage = process.env.PUBLIC_URL + "/arrow.svg";

  if (nativeName) {
    const keys = Object.keys(nativeName);
    keys.forEach((key) => {
      langKey = key;
    });
  }

  if (currencies) {
    const keys = Object.keys(currencies);
    keys.forEach((key) => {
      currencyKey = key;
    });
  }

  if (languagesSpoken) {
    const values = Object.values(languagesSpoken);
    languages = values;
  }

  let translations: Record<string, { common: string; official: string }> = {};
  if (translationObject) {
    for (const [languageCode, translation] of Object.entries(
      translationObject
    )) {
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
        <Box sx={{ padding: "2rem", position: "relative" }}>
          <img
            onClick={() => navigate(-1)}
            className="back_btn"
            src={arrowImage}
            alt="back-arrow"
          />
          <Box className="title-container">
            <Title title={country?.name.common} />
            <img
              src={country?.flags.png}
              style={{
                maxWidth: "120px",
                maxHeight: "80px",
                borderRadius: "5px",
              }}
              alt="Not Available"
            />
          </Box>
          <Grid
            container
            spacing={2}
            sx={{
              paddingY: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={8}>
              <Card
                sx={{
                  marginBottom: "1rem",
                  borderRadius: "5px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent>
                  <CountryName
                    officialName={country?.name?.official}
                    countryCommon={country?.name.nativeName[langKey].common}
                    countryOfficial={country?.name.nativeName[langKey].official}
                  />
                </CardContent>
              </Card>

              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  gap: "20px",
                }}
              >
                <Card
                  sx={{
                    marginBottom: "1rem",
                    borderRadius: "5px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    width: "50%",
                  }}
                >
                  <CardContent>
                    <Region
                      region={country?.region}
                      subregion={country?.subregion}
                    />
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    marginBottom: "1rem",
                    borderRadius: "5px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    width: "50%",
                  }}
                >
                  <CardContent>
                    <Currency
                      currency={country?.currencies}
                      currencyKey={currencyKey}
                    ></Currency>
                  </CardContent>
                </Card>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  gap: "20px",
                }}
              >
                <Card
                  sx={{
                    marginBottom: "1rem",
                    borderRadius: "5px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    width: "50%",
                  }}
                >
                  <CardContent>
                    <LanguagesSpoken languages={languages} />
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    marginBottom: "1rem",
                    borderRadius: "5px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    width: "50%",
                  }}
                >
                  <CardContent>
                    <CountryCarRules carRules={country?.car} />
                  </CardContent>
                </Card>
              </Box>
              <Card
                sx={{
                  marginBottom: "1rem",
                  borderRadius: "5px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent>
                  <GeneralCountryInfo
                    borders={country?.borders}
                    capital={country?.capital}
                    coatOfArms={country?.coatOfArms}
                    independent={country?.independent}
                    mapDetails={country?.maps}
                    population={country?.population}
                    startOfTheWeek={country?.startOfWeek}
                    status={country?.status}
                    unitedNationsMember={country?.unMember}
                    landLocked={country?.landlocked}
                    squaredKm={country?.area}
                    countryName={country?.name?.common}
                  />
                </CardContent>
              </Card>
              <Translations translations={translations} />
            </Grid>
          </Grid>
        </Box>
      )}
    </React.Fragment>
  );
};

export default CountryDetails;
