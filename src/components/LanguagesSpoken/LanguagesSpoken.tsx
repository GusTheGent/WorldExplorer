import * as React from "react";
import { LanguagesSpokenProps } from "./types";
import { Box, Typography } from "@mui/material";


const LanguagesSpoken: React.FunctionComponent<LanguagesSpokenProps> = ({
 languages,
 }) => {
   return (
     <React.Fragment>
      <Box sx={{ padding: "2rem"  ,display:"flex" , justifyContent:"flex-start" , flexDirection:"column" , alignItems:"flex-start"}}>
           <Typography variant="h6">
                  Languages Spoken:{" "}
                  {languages.map((language, index) => (
                    <span key={index}>
                      {language}
                      {index !== languages.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </Typography>
       </Box>
     </React.Fragment>
   );
 };
 
 export default LanguagesSpoken;
 