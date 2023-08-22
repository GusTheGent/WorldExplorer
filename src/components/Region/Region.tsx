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
        <Box>
          {" "}
          <Typography variant="h6">
            Region: <span>{region}</span>
          </Typography>
        </Box>
        <Box>
          {" "}
          <Typography variant="h6">
            Subregion:
            <span> {subregion}</span>
          </Typography>
        </Box>
        <Box>         
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Region;
