import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { getCountryList } from '../api/country';
import CountryContext from '../providers/country';
import CountryCards from './CountryCards';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 40px;
`;

const CountryList: FunctionComponent = () => {
  const { store, dispatch } = useContext(CountryContext);
  const [countries, setCountries] = useState(store.countryList);
  const [searchKeyword, setSearchKeyword] = useState(store.searchKeyword);

  useEffect(() => {
    getCountryList(dispatch);
  }, [dispatch]);

  useEffect(() => {
    setCountries(store.countryList);
  }, [store.countryList]);

  useEffect(() => {
    setSearchKeyword(store.searchKeyword)
  }, [store.searchKeyword]);

  const filteredCountries = countries.filter(c => c.name.toLowerCase().includes(searchKeyword.toLowerCase()));

  return (
    <Container>
      {filteredCountries.map((country, key) => {
        return (
          <CountryCards key={key} country={country} />
        )
      })}
    </Container>
  )
}

export default CountryList