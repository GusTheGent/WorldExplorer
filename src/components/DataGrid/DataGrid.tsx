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
import { useState } from "react";

const DataGrid: React.FunctionComponent<DataGridProps> = ({
  countries,
  error,
}) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedCountries, setSearchedCountries] = useState<Country[]>([]);

  const handleNavigation = (country: Country) => {
    navigate(`/details/${country.name.common}`);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
    const filteredCountries = countries.filter(country =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchedCountries(filteredCountries);
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

  const countriesToDisplay = searchQuery ? searchedCountries : countries;

  return (
    <React.Fragment>
      <div>
        <input
          type="text"
          placeholder="Search Country"
          value={searchQuery}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleSearch(event)
          }
        />
      </div>
      {countriesToDisplay.length !== 0 && (
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
              {countriesToDisplay.map((country, index) => (
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
