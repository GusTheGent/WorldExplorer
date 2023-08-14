import { Country } from "interfaces/Country.interface";

interface CountrySchemaModel {
  columns: Array<{
    Header: string;
    accessor: (country: Country) => any;
  }>;
}

export const dataGridValues: CountrySchemaModel = {
  columns: [
    {
      Header: "Country",
      accessor: (country) => country.name?.common,
    },
    {
      Header: "Capital",
      accessor: (country) => country.capital?.[0] || "N/A",
    },
    {
      Header: "Region",
      accessor: (country) => country.region,
    },
    {
      Header: "Population",
      accessor: (country) =>
        country.population.toLocaleString().replace(",", "."),
    },
  ],
};
