import React from "react";
import "./CountryCarRules.scss";
import { CountryCarRulesProps } from "./types";
import { Card, Typography } from "@mui/material";
import Title from "components/Title/Title";

const CountryCarRules: React.FunctionComponent<CountryCarRulesProps> = ({carRules}) => {
    return <React.Fragment>
        <Card raised={true}>
            <Title title="Traffic Rules"></Title>
            <Typography variant="h6">
                Car Plates: {carRules.signs.map((sign) => <span>{sign}</span>)}
            </Typography>
            <Typography variant="h6">
                Road Driving Side: <span>{carRules.side}</span>
            </Typography>
        </Card>
    </React.Fragment>
}

export default CountryCarRules;