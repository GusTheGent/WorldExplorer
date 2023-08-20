import * as React from "react";
import { Box,  Typography } from "@mui/material";
import { CurrencyProps } from "./types";

const Currency: React.FunctionComponent<CurrencyProps> = ({
currency,
}) => {
  return (
    <React.Fragment>
      <Box sx={{ padding: "2rem" }}>
       <Box>
          {" "}
          <Typography variant="h6">
            Currency:
            <span> {currency}</span>
          </Typography>
        </Box>
        <Box>         
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Currency;
