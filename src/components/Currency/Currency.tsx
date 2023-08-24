import * as React from "react";
import { Box,  Typography } from "@mui/material";
import { CurrencyProps } from "./types";

const Currency: React.FunctionComponent<CurrencyProps> = ({
currency,
currencyKey
}) => {
  return (
    <React.Fragment>
      <Box sx={{ padding: "2rem"  ,display:"flex" , justifyContent:"flex-start" , flexDirection:"column" , alignItems:"flex-start"}}>
          <Typography variant="h6">
            Currency:
            <span> {currency && currency[currencyKey].name}</span>
          </Typography>       
          <Typography variant="h6">
            Currency Symbol:
            <span> {currency && currency[currencyKey].symbol}</span>
          </Typography>       
      </Box>
    </React.Fragment>
  );
};

export default Currency;
