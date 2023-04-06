import { Dispatch, useReducer } from 'react';

import { api } from '../../helpers/api';
import { defaultState } from '../../providers/country';
import { country } from './reducers';
import { Actions, ICountry, CountryState, CountryTypes } from './types';

const initialState: CountryState = defaultState.store;

export const useCountry = (): [CountryState, Dispatch<CountryTypes>] => {
  const [state, dispatch] = useReducer(country, initialState);
  return [state, dispatch];
}

export async function getCountryList(dispatch: Dispatch<CountryTypes>): Promise<void> {
  dispatch({ type: Actions.GET_COUNTRY_LIST_START, payload: undefined });
  try {
    const { data } = await api({
      url: '/all',
      method: 'get',
    });

    const countriesData = data.map((d: any) => {
      return {
        name: d.name.common || '',
        capital: d.capital && d.capital.length ? d.capital[0] : '',
        region: d.region || '',
        subregion: d.subregion || '',
        languages: { ...d.languages } || {},
        population: d.population || 0,
        flag: d.flags.svg || '',
        currencies: { ...d.currencies } || {},
      } as ICountry;
    })

    dispatch({ type: Actions.GET_COUNTRY_LIST_FULFILLED, payload: countriesData });
  } catch (e) {
    dispatch({ type: Actions.GET_COUNTRY_LIST_REJECTED, payload: undefined });
  }
}

export async function getCountryListByRegion(s: string, dispatch: Dispatch<CountryTypes>): Promise<void> {
  dispatch({ type: Actions.GET_COUNTRY_LIST_BY_REGION_START, payload: undefined });
  try {
    const { data } = await api({
      url: `/region/${s}`,
      method: 'get',
    });

    const countriesData = data.map((d: any) => {
      return {
        name: d.name.common || '',
        capital: d.capital && d.capital.length ? d.capital[0] : '',
        region: d.region || '',
        subregion: d.subregion || '',
        languages: { ...d.languages } || {},
        population: d.population || 0,
        flag: d.flags.svg || '',
        currencies: { ...d.currencies } || {},
      } as ICountry;
    })

    dispatch({ type: Actions.GET_COUNTRY_LIST_BY_REGION_FULFILLED, payload: countriesData });
  } catch (e) {
    dispatch({ type: Actions.GET_COUNTRY_LIST_BY_REGION_REJECTED, payload: undefined });
  }
}


export async function getCountry(s: string, dispatch: Dispatch<CountryTypes>): Promise<void> {
  dispatch({ type: Actions.GET_COUNTRY_START, payload: s });
  try {
    const { data } = await api({
      url: `/name/${s}?fullText=true`,  
      method: 'get',
    });

    const countryData: ICountry = {
      name: data[0].name.common || '',
      capital: data[0].capital && data[0].capital.length ? data[0].capital[0] : '',
      region: data[0].region || '',
      subregion: data[0].subregion || '',
      languages: { ...data[0].languages } || {},
      population: data[0].population || 0,
      flag: data[0].flags.svg || '',
      currencies: { ...data[0].currencies } || {},
      nativeName: data[0].name.nativeName.official || '',
      tld: data[0].tld[0] || '',
    };

    dispatch({ type: Actions.GET_COUNTRY_FULFILLED, payload: countryData });
  } catch (e) {
    dispatch({ type: Actions.GET_COUNTRY_REJECTED, payload: undefined });
  }
}

export async function searchCountry(s: string, dispatch: Dispatch<CountryTypes>): Promise<void> {
  dispatch({ type: Actions.SEARCH_COUNTRY_START, payload: s });
  try {
    const { data } = await api({
      url: `/name/${s}`,
      method: 'get',
    });

    const countries: ICountry[] = data.map((d: any) => {
      return {
        name: d.name.common || '',
        capital: d.capital && d.capital.length ? d.capital[0] : '',
        region: d.region || '',
        subregion: d.subregion || '',
        languages: { ...d.languages } || {},
        population: d.population || 0,
        flag: d.flags.svg || '',
        currencies: { ...d.currencies } || {},
      } as ICountry;
    });
    
    dispatch({ type: Actions.SEARCH_COUNTRY_FULFILLED, payload: countries });
  } catch (e) {
    dispatch({ type: Actions.SEARCH_COUNTRY_REJECTED, payload: undefined });
  }
}

export function assignSearchKeyWord(s: string, dispatch: Dispatch<CountryTypes>): void {
  dispatch({ type: Actions.ASSIGN_SEARCH_KEY_WORD_ACTION, payload: s });
}