import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { Link } from '@reach/router';

import { ICountry } from '../api/country/types';

const Container = styled.div`
  display: flex;
  height: 400px;
  width: 350px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 50px;
  flex-direction: column;
  border-radius: 12px;
  margin: 50px;
`;

const Title = styled.div`
  margin-bottom: 10px;
  > p {
    font-weight: bold;
    font-size: 24px;
  }
`;

const DetailsContainer = styled.div`
  padding: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;

const StyledImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

interface Props {
  country: ICountry;
}

const CountryCards: FunctionComponent<Props> = ({ country }) => {
  const { name, flag, population, region, capital } = country;

  return (
      <Container>
        <StyledImage src={flag || ''} />
        <DetailsContainer>
          <StyledLink to={`/${name}`}>
            <Title>
              <Typography>{name}</Typography>
            </Title>
          </StyledLink>
          <Typography>Population: {population.toLocaleString()}</Typography>
          <Typography>Region: {region}</Typography>
          <Typography>Capital: {capital}</Typography>
        </DetailsContainer>
      </Container>
  )
}

export default CountryCards;