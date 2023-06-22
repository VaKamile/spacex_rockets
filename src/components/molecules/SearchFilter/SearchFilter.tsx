import { useEffect, useState } from 'react';

import Search from '../../atoms/Search';
import {
  StyledSearchContainer,
  StyledSearchFilterWrapper,
  StyledTitleContainer,
  StyledResults,
} from './styles';

interface IItem {
  id: string | number;
  value: string;
  beforeValue?: any;
  type: string;
}

export interface ISearchFilterData {
  title: string;
  types: string[];
  items: IItem[];
}

// interface ISearchFilterProps {
//   data: ISearchFilterData;
//   color?: COLOR;
//   itemsPerPage?: number;
// }

const SearchFilter = () => {
  // const { title, types, items } = data;

  // const [displayData, setDisplayData] = useState<IItem[]>([]);
  // const [searchValue, setSearchValue] = useState('');

  // useEffect(() => {
  //   if (searchValue) {
  //     const itemsAfterSearch = items.filter((item) =>
  //       item.value.toLowerCase().includes(searchValue.toLocaleLowerCase())
  //     );

  //     setDisplayData(itemsAfterSearch);
  //   } else {
  //     setDisplayData(items);
  //   }
  // }, [items, searchValue]);

  // const filterItems = (filterBy: string) => {
  //   if (searchValue) {
  //     const itemsAfterSearch = items.filter((item) =>
  //       item.value.toLowerCase().includes(searchValue.toLocaleLowerCase())
  //     );

  //     setDisplayData(itemsAfterSearch);
  //   } else {
  //     setDisplayData(items);
  //   }
  // };

  return (
    <StyledSearchFilterWrapper>
      <StyledTitleContainer>
        <h3>SpaceX Rockets</h3>
      </StyledTitleContainer>
      <StyledResults> 3 Results</StyledResults>
      <StyledSearchContainer>
        <Search />
      </StyledSearchContainer>
    </StyledSearchFilterWrapper>
  );
};

export default SearchFilter;
