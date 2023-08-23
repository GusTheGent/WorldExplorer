import * as React from "react";
import { TranslationsProps } from "./types";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Translations: React.FunctionComponent<TranslationsProps> = ({
  translations,
}) => {
  return (
    <React.Fragment>
      <Box sx={{ padding: "1rem" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "1.25rem" }}>
                  <Typography variant="h6"> Language Code</Typography>
                </TableCell>
                <TableCell sx={{ fontSize: "1.25rem" }}>
                  {" "}
                  <Typography variant="h6">Official</Typography>
                </TableCell>
                <TableCell sx={{ fontSize: "1.25rem" }}>
                  {" "}
                  <Typography variant="h6">Common</Typography>
                
                </TableCell>{" "}
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(translations).map(
                ([languageCode, translation], index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                      {languageCode}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                      {translation.official}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                      {translation.common}
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </React.Fragment>
  );
};

export default Translations;
