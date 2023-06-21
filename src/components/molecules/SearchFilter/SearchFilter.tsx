import { useEffect, useState } from 'react';
import { COLOR } from '../../../shared/theme/types';
import Search from '../../atoms/Search';

import {
  StyledFilterContainer,
  StyledItemsContainer,
  StyledPaginationContainer,
  StyledResetFilterButtonContainer,
  StyledSearchContainer,
  StyledSearchFilterWrapper,
  StyledTitleContainer,
} from '../SearchFilter/styles';

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

interface ISearchFilterProps {
  data: ISearchFilterData;
  color?: COLOR;
  itemsPerPage?: number;
}

const SearchFilter = ({
  data,
  color,
  itemsPerPage = 5,
}: ISearchFilterProps) => {
  const { title, types, items } = data;

  const [displayData, setDisplayData] = useState<IItem[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (searchValue) {
      const itemsAfterSearch = items.filter((item) =>
        item.value.toLowerCase().includes(searchValue.toLocaleLowerCase())
      );

      setDisplayData(itemsAfterSearch);
    } else {
      setDisplayData(items);
    }
  }, [data, searchValue]);

  const filterItems = (filterBy: string) => {
    if (filterBy === 'all') {
      if (searchValue) {
        const itemsAfterSearch = items.filter((item) =>
          item.value.toLowerCase().includes(searchValue.toLocaleLowerCase())
        );

        setDisplayData(itemsAfterSearch);
      } else {
        setDisplayData(items);
      }
    } else {
      if (searchValue) {
        const itemsAfterSearchAndFilter = items
          .filter((item) =>
            item.value.toLowerCase().includes(searchValue.toLocaleLowerCase())
          )
          .filter((item) => item.type === filterBy);

        setDisplayData(itemsAfterSearchAndFilter);
      } else {
        const itemsAfterFilter = items.filter((item) => item.type === filterBy);

        setDisplayData(itemsAfterFilter);
      }
    }

    setCurrentPage(1);
  };

  const resetFilter = () => {
    setSearchValue('');

    setCurrentPage(1);
    setDisplayData(items);
  };

  const generatePagination = () => {
    return Array(Math.ceil(displayData.length / itemsPerPage))
      .fill(0)
      .map((_, i) => i + 1)
      .filter((x, _, arr) => {
        if (x === 1) {
          return x;
        } else if (x === currentPage) {
          return x;
        } else if (
          x - 1 === currentPage ||
          x - 2 === currentPage ||
          x + 1 === currentPage ||
          x + 2 === currentPage
        ) {
          return x;
        } else if (x === arr.length) {
          return x;
        }
      })
      .map((x) => (
        <button
          key={x}
          onClick={() => setCurrentPage(x)}
          className={currentPage === x ? 'selected' : ''}
        >
          {x}
        </button>
      ));
  };

  return (
    <StyledSearchFilterWrapper>
      <StyledTitleContainer color={color}>
        <h3>{title}</h3>
      </StyledTitleContainer>
      <StyledSearchContainer>
        <Search
          type='text'
          value={searchValue}
          setvalue={setSearchValue}
          icon={'C:UsersKamilėDesktop\type15spacex_rocketssrcassetssearch.svg'}
          placeholder='Search'
          color={color}
        />
      </StyledSearchContainer>
      <StyledItemsContainer>
        {displayData.length ? (
          displayData
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((item) => (
              <p key={item.id}>
                {item.beforeValue ? (
                  <span className='item-before-value-and-value-container'>
                    <span className='item-before-value'>
                      {item.beforeValue}
                    </span>
                    <span className='item-value'>{item.value}</span>
                  </span>
                ) : (
                  <span className='item-value'>{item.value}</span>
                )}
              </p>
            ))
        ) : (
          <p>No results...</p>
        )}
      </StyledItemsContainer>
      <StyledPaginationContainer color={color}>
        {generatePagination()}
      </StyledPaginationContainer>
    </StyledSearchFilterWrapper>
  );
};

export default SearchFilter;
