import { Dispatch, createContext } from 'react';
import { ICountry, CountryState, CountryTypes } from '../api/country/types'

interface ICountryContext {
  store: CountryState;
  dispatch: Dispatch<CountryTypes>;
}

export const defaultState: ICountryContext = {
  store: {
    countryList: [],
    selectedCountry: {} as ICountry,
    isLoading: false,
    searchKeyword: '',
  },
  dispatch: (country: CountryTypes): void => {},
}

const CountryContext = createContext(defaultState);

export default CountryContext;