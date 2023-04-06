import React, { FunctionComponent, useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import { getCountryListByRegion } from '../api/country';
import CountryContext from '../providers/country';

const Container = styled.div`
  display: flex;
  width: 200px;
`;

interface Props {
  onChange?: (s: string) => void;
  onEnterPress?: () => void;
}

const FilterField: FunctionComponent<Props> = ({ onChange, onEnterPress }) => {
  const { dispatch } = useContext(CountryContext);
  const [filter, setfilter] = useState('');

  const regions = ['Africa', 'Antarctic', 'America', 'Asia', 'Europe', 'Oceania'];

  const handleChange = (e: SelectChangeEvent<string>) => {
    setfilter(e.target.value);
    if (typeof onChange === 'function') onChange(e.target.value);
  }

  useEffect(() => {
    if (filter) getCountryListByRegion(filter, dispatch);
  }, [filter, dispatch]);

  return (
    <Container>
      <FormControl fullWidth>
        <InputLabel>Filter by Region</InputLabel>
        <Select
          value={filter}
          onChange={handleChange}
          label='Filter by Region'
        >
          {regions.map(r => {
            return (
              <MenuItem value={r}>{r}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Container>
  )
}

export default FilterField;