import * as React from "react";
import { DataGridProps } from "./types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { dataGridValues } from "./helper";
import "./DataGrid.scss";
import { useNavigate } from "react-router-dom";
import { Country } from "interfaces/Country.interface";

const DataGrid: React.FunctionComponent<DataGridProps> = ({
  countries,
  error,
}) => {
  const navigate = useNavigate();

  const handleNavigation = (country: Country) => {
    navigate(`/details/${country.name.common}`);
  };
  if (error) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);

      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      );
    } else {
      return <div>{error.message}</div>;
    }
  }
  return (
    <React.Fragment>
      {countries.length !== 0 && (
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow style={{ background: "orange" }}>
                {dataGridValues.columns.map((item, index) => (
                  <TableCell style={{ fontWeight: "bold" }} key={index}>
                    {item.Header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {countries.map((country, index) => (
                <TableRow
                  key={index}
                  className="table-row"
                  onClick={() => handleNavigation(country)}
                >
                  {dataGridValues.columns.map((item, columnIndex) => (
                    <TableCell key={columnIndex}>
                      {item.accessor(country)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </React.Fragment>
  );
};

export default DataGrid;
