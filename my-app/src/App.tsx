import React from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';

import { useCountry } from './api/country';
import Header from './components/Header';
import MainView from './views/HomeView';
import CountryView from './views/CountryView';
import CountryContext from './providers/country';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [country, countryDispatch] = useCountry();

  return (
    <CountryContext.Provider value={{ store: { ...country }, dispatch: countryDispatch }}>
      <Container>
        <Header />
        <Router basepath="/">
          <MainView path="/" />
          <CountryView path="/:name" />
        </Router>
      </Container>
    </CountryContext.Provider>
  );
}

export default App;
