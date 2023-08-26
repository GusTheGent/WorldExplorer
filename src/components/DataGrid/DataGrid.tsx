import * as React from "react";
import { DataGridProps } from "./types";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Avatar,
  TableSortLabel,
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
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedCountries, setSearchedCountries] = useState<Country[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    accessor: ((country: Country) => any) | null;
    direction: "ascending" | "descending";
  }>({
    accessor: null,
    direction: "ascending",
  });
  const handleNavigation = (country: Country) => {
    navigate(`/details/${country.name.common}`);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
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

  const handleSort = (accessor: (country: Country) => any) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig.accessor === accessor &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ accessor, direction });
  };

  const sortedCountries = [...countriesToDisplay];

  if (sortConfig.accessor) {
    sortedCountries.sort((a, b) => {
      const aValue = sortConfig.accessor!(a);
      const bValue = sortConfig.accessor!(b);

      if (aValue == null || bValue == null) {
        return 0;
      }

      if (aValue < bValue) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

  return (
    <React.Fragment>
      <Box
        sx={{
          marginTop: "-40px",
          padding: "2rem",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <TextField
          type="text"
          placeholder="Search Country"
          value={searchQuery}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleSearch(event)
          }
          variant="outlined"
        />
      </Box>
      {countriesToDisplay.length !== 0 && (
        <TableContainer sx={{overflowX: "initial"}}>
          <Table stickyHeader>
            <TableHead>
              <TableRow style={{ background: "#ffff" }}>
                {dataGridValues.columns.map((item, index) => (
                  <TableCell
                    style={{ fontSize: "1.25rem", fontWeight: "bold" }}
                    key={index}
                  >
                    <TableSortLabel
                      active={sortConfig.accessor === item.accessor}
                      direction={
                        sortConfig.accessor === item.accessor
                          ? sortConfig.direction === "ascending"
                            ? "asc"
                            : "desc"
                          : undefined
                      }
                      onClick={() => handleSort(item.accessor)}
                    >
                      {item.Header}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedCountries.map((country, index) => (
                <TableRow
                  key={index}
                  className="table-row"
                  onClick={() => handleNavigation(country)}
                  sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
                >
                  {dataGridValues.columns.map((item, columnIndex) => (
                    <TableCell key={columnIndex} style={{ fontSize: "1rem" }}>
                      {item.Header !== "Flag" ? (
                        item.accessor(country)
                      ) : (
                        <Avatar src={item.accessor(country)} />
                      )}
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
