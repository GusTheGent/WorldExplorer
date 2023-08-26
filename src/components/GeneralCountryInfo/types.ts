import { CoatOfArms, Maps } from "interfaces/Country.interface"

export type GeneralCountryInfoProps = {
    mapDetails: Maps | undefined
    coatOfArms: CoatOfArms | undefined
    capital: string [] | undefined
    population: number | undefined
    unitedNationsMember: boolean | undefined
    independent: boolean | undefined
    startOfTheWeek: string | undefined
    status: string | undefined
    borders: string [] | undefined
    squaredKm: number | undefined
    landLocked: boolean | undefined
    countryName: string | undefined
}