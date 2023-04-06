import React, { FunctionComponent, useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import styled from 'styled-components';

import { assignSearchKeyWord } from '../api/country';
import SearchField from '../components/SearchField';
import CountryList from '../components/CountryList';
import CountryContext from '../providers/country';
import FilterField from '../components/FilterField';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 90px 0;
`;

const HomeView: FunctionComponent<RouteComponentProps> = () => {
  const { dispatch } = useContext(CountryContext);

  const handleChange = (s: string) => {
    assignSearchKeyWord(s, dispatch);
  };

  return (
    <Container>
      <SearchContainer>
        <SearchField onChange={handleChange} />
        <FilterField />
      </SearchContainer>
      <CountryList />
    </Container>
  );
};

export default HomeView;