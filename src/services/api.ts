import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Country } from "interfaces/Country.interface";

const baseURL = "https://restcountries.com/v3.1";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<Country[], undefined>({
      query: () => "/all",
    }),
    getCountryByName: builder.query<Country[], string | undefined>({
      query: (countryName) => `/name/${countryName}?fullText=true`,
    }),
  }),
});

export const { useGetAllCountriesQuery, useGetCountryByNameQuery } = api;
