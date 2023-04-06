import React, { FunctionComponent, useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { navigate, RouteComponentProps } from '@reach/router';
import { Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { getCountry } from '../api/country';
import CountryContext from '../providers/country';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 90px;
`;

const ButtonContainer = styled.div`
  > button {
    width: 150px;
    background-color: #ffffff;
    color: #000000;
    
    &:hover {
      background-color: #808080;
    }
  }
`;

const StyledImage = styled.img`
  height: 400px;
  margin-right: 60px;
`;

const DetailsContainer = styled.div`
  display: flex;
  margin-top: 60px;
`;

const Title = styled.div`
  > p {
    font-weight: bold;
    font-size: 50px;
  }
`;

const SummaryContainer = styled.div`
  font-size: 25px;
  margin: 10px 15px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Contents = styled.div`
  display: flex;
  width: 100%;
`;

const ColumnContainer = styled.div`
  width: 50%;
  margin-right: 100px;
  > p {
    font-size: 24px;
    margin: 10px 0;
  }
`;

interface Props extends RouteComponentProps {
  name?: string;
}

const CountryView: FunctionComponent<Props> = (props: Props) => {
  const { name } = props;
  const { store, dispatch } = useContext(CountryContext);
  const [country, setCountry] = useState(store.selectedCountry);

  useEffect(() => {
    if (name) getCountry(name, dispatch)
  }, [name, dispatch])

  useEffect(() => {
    setCountry(store.selectedCountry);
  }, [store.selectedCountry])

  const goBack = () => {
    navigate('/');
  }

  return (
    <Container>
      <ButtonContainer>
        <Button variant="contained" onClick={goBack}>
          <ArrowBackIcon />
          <Typography>Back</Typography>
        </Button>
      </ButtonContainer>
      <DetailsContainer>
        <StyledImage src={country.flag} />
        <SummaryContainer>
          <Title>
            <Typography>{country.name}</Typography>
          </Title>
          <Contents>
            <ColumnContainer>
              <Typography><b>Native Name</b>: {country.nativeName}</Typography>
              <Typography><b>Population</b>: {(country.population).toLocaleString()}</Typography>
              <Typography><b>Region</b>: {country.region}</Typography>
              <Typography><b>Sub Region</b>: {country.subregion}</Typography>
              <Typography><b>Capital</b>: {country.capital}</Typography>
            </ColumnContainer>
            <ColumnContainer>
              <Typography><b>Top Level Domain</b>: {country.tld}</Typography>
              <Typography><b>Currencies</b>: {Object.values(country?.currencies).map(c => c.name).join(", ")}</Typography>
              <Typography><b>Languages</b>: {Object.values(country?.languages).join(", ")}</Typography>
            </ColumnContainer>
          </Contents>
        </SummaryContainer>
      </DetailsContainer>
    </Container>
  )
}

export default CountryView;