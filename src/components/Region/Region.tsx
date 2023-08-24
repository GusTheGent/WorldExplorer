import * as React from "react";
import { RegionProps } from "./types";
import { Box,  Typography } from "@mui/material";

const Region: React.FunctionComponent<RegionProps> = ({
 region,
 subregion,
}) => {
  return (
    <React.Fragment>
      <Box sx={{ padding: "2rem"  ,display:"flex" , justifyContent:"flex-start" , flexDirection:"column" , alignItems:"flex-start"}}>
          <Typography variant="h6">
            Region: <span>{region}</span>
          </Typography>
          <Typography variant="h6">
            Subregion:
            <span> {subregion}</span>
          </Typography>
      </Box>
    </React.Fragment>
  );
};

export default Region;
