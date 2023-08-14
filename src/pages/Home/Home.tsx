import * as React from "react";
import { HomeProps } from "./types";
import Title from "components/Title/Title";
import { useGetAllCountriesQuery } from "services/api";
import DataGrid from "components/DataGrid/DataGrid";
import Loader from "components/Loader/Loader";
import "./Home.scss";

const Home: React.FunctionComponent<HomeProps> = () => {
  const { data = [], isLoading, error } = useGetAllCountriesQuery(undefined);
  return (
    <React.Fragment>
      <Title title="Country List" />
      {!isLoading ? <DataGrid countries={data} error={error} /> : <Loader />}
    </React.Fragment>
  );
};

export default Home;
