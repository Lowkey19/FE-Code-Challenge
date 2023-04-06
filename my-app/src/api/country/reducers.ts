import { Actions, CountryState, CountryTypes } from "./types";

export function country(state: CountryState, action: CountryTypes): CountryState {
  switch (action.type) {
    case Actions.GET_COUNTRY_LIST_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case Actions.GET_COUNTRY_LIST_FULFILLED: {
      return {
        ...state,
        countryList: action.payload,
        isLoading: false,
      }
    }
    case Actions.GET_COUNTRY_LIST_REJECTED: {
      return {
        ...state,
        isLoading: false,
      }
    }
    case Actions.GET_COUNTRY_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case Actions.GET_COUNTRY_FULFILLED: {
      return {
        ...state,
        selectedCountry: action.payload,
        isLoading: false,
      }
    }
    case Actions.GET_COUNTRY_REJECTED: {
      return {
        ...state,
        isLoading: false,
      }
    }
    case Actions.SEARCH_COUNTRY_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case Actions.SEARCH_COUNTRY_FULFILLED: {
      return {
        ...state,
        countryList: action.payload,
        isLoading: false,
      }
    }
    case Actions.SEARCH_COUNTRY_REJECTED: {
      return {
        ...state,
        isLoading: false,
      }
    }
    case Actions.ASSIGN_SEARCH_KEY_WORD_ACTION: {
      return {
        ...state,
        searchKeyword: action.payload,
      }
    }
    case Actions.GET_COUNTRY_LIST_BY_REGION_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case Actions.GET_COUNTRY_LIST_BY_REGION_FULFILLED: {
      return {
        ...state,
        countryList: action.payload,
        isLoading: false,
      }
    }
    case Actions.GET_COUNTRY_LIST_BY_REGION_REJECTED: {
      return {
        ...state,
        isLoading: false,
      }
    }
    default:
      return state;
  }
}