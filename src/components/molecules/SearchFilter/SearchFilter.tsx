import { useState, ChangeEvent } from 'react';
import Search from '../../atoms/Search';

import {
  StyledSearchContainer,
  StyledSearchFilterWrapper,
  StyledTitleContainer,
  StyledResults,
} from './styles';

interface ISearchProps {
  onSearch: (query: string) => void;
  resultsCount: number;
}

const SearchFilter = ({ onSearch, resultsCount }: ISearchProps) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchValue(query);
    onSearch(query);
  };

  return (
    <StyledSearchFilterWrapper>
      <StyledTitleContainer>
        <h3>SpaceX rockets</h3>
      </StyledTitleContainer>
      <StyledResults>{resultsCount} Results</StyledResults>
      <StyledSearchContainer>
        <Search
          type='text'
          value={searchValue}
          setvalue={setSearchValue}
          placeholder='Search'
          onChange={handleSearch}
        />
      </StyledSearchContainer>
    </StyledSearchFilterWrapper>
  );
};

export default SearchFilter;
