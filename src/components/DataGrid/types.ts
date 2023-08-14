import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { Country } from "interfaces/Country.interface";

export type DataGridProps = {
  countries: Country[];
  error: FetchBaseQueryError | SerializedError | undefined;
};
