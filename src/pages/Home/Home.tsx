import * as React from "react";
import { HomeProps } from "./types";
import Title from "components/Title/Title";
import { useGetAllCountriesQuery } from "services/api";
import DataGrid from "components/DataGrid/DataGrid";
import Loader from "components/Loader/Loader";
import "./Home.scss";
import { Box } from "@mui/material";

const Home: React.FunctionComponent<HomeProps> = () => {
  const { data = [], isLoading, error } = useGetAllCountriesQuery(undefined);
  const worldImage = process.env.PUBLIC_URL + "/world.svg";
  return (
    <React.Fragment>
      <div className="list-container">
        <Box className="world-img">
          <img id="earth" src={worldImage} alt="World" />
        </Box>
        <Title title="Country List" />
      </div>
      {!isLoading ? <DataGrid countries={data} error={error} /> : <Loader />}
    </React.Fragment>
  );
};

export default Home;
