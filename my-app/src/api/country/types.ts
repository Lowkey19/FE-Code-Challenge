export interface Action<T, P extends unknown = undefined> {
  payload: P extends infer Q ? Q : undefined;
  type: T;
}

export enum Actions {
  GET_COUNTRY_LIST_START = "@country/GET_COUNTRY_LIST_START",
  GET_COUNTRY_LIST_FULFILLED = "@country/GET_COUNTRY_LIST_FULFILLED",
  GET_COUNTRY_LIST_REJECTED = "@country/GETCOUNTRY_LIST_REJECTED",
  GET_COUNTRY_START = "@country/GET_COUNTRY_START",
  GET_COUNTRY_FULFILLED = "@country/GET_COUNTRY_FULFILLED",
  GET_COUNTRY_REJECTED = "@country/GET_COUNTRY_REJECTED",
  ASSIGN_SEARCH_KEY_WORD_ACTION = "@country/ASSIGN_SEARCH_KEY_WORD_ACTION",
  SEARCH_COUNTRY_START = "@country/SEARCH_COUNTRY_START",
  SEARCH_COUNTRY_FULFILLED = "@country/SEARCH_COUNTRY_FULFILLED",
  SEARCH_COUNTRY_REJECTED = "@country/SEARCH_COUNTRY_REJECTED",
  GET_COUNTRY_LIST_BY_REGION_START = "@country/GET_COUNTRY_LIST_BY_REGION_START",
  GET_COUNTRY_LIST_BY_REGION_FULFILLED = "@country/GET_COUNTRY_LIST_BY_REGION_FULFILLED",
  GET_COUNTRY_LIST_BY_REGION_REJECTED = "@country/GETCOUNTRY_LIST_BY_REGION_REJECTED",
}

export interface ICountry {
  name: string;
  capital: string;
  region: string;
  subregion: string;
  languages: object;
  population: number;
  flag: string;
  currencies: object;
  nativeName?: string;
  tld?: string;
}

export type CountryState = {
  countryList: ICountry[];
  selectedCountry: ICountry;
  isLoading: boolean;
  searchKeyword: string;
}

type GetCountryListRequest = Action<typeof Actions.GET_COUNTRY_LIST_START>;
type GetCountryListAction = Action<typeof Actions.GET_COUNTRY_LIST_FULFILLED, ICountry[]>;
type GetCountryListError = Action<typeof Actions.GET_COUNTRY_LIST_REJECTED>;

type GetCountryRequest = Action<typeof Actions.GET_COUNTRY_START, string>;
type GetCountryAction = Action<typeof Actions.GET_COUNTRY_FULFILLED, ICountry>;
type GetCountryError = Action<typeof Actions.GET_COUNTRY_REJECTED>;

type AssignSearchKeyWordAction = Action<typeof Actions.ASSIGN_SEARCH_KEY_WORD_ACTION, string>;

type SearchCountryRequest = Action<typeof Actions.SEARCH_COUNTRY_START, string>;
type SearchCountryAction = Action<typeof Actions.SEARCH_COUNTRY_FULFILLED, ICountry[]>;
type SearchCountryError = Action<typeof Actions.SEARCH_COUNTRY_REJECTED>;

type GetCountryListByRegionRequest = Action<typeof Actions.GET_COUNTRY_LIST_BY_REGION_START>;
type GetCountryListByRegionAction = Action<typeof Actions.GET_COUNTRY_LIST_BY_REGION_FULFILLED, ICountry[]>;
type GetCountryListByRegionError = Action<typeof Actions.GET_COUNTRY_LIST_BY_REGION_REJECTED>;

export type CountryTypes =
| GetCountryListRequest
| GetCountryListAction
| GetCountryListError
| SearchCountryRequest
| SearchCountryAction
| SearchCountryError
| AssignSearchKeyWordAction
| GetCountryRequest
| GetCountryAction
| GetCountryError
| GetCountryListByRegionRequest
| GetCountryListByRegionAction
| GetCountryListByRegionError;