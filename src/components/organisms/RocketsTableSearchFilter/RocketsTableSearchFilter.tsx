import { useState, useEffect } from 'react';
import { API } from '../../../shared/api';
import SearchFilter from '../../molecules/SearchFilter';
import RocketsTable from '../../molecules/RocketsTable';
import { IRocket } from '../../../shared/api/types';
import { StyledSearchFilter } from './styles';

const RocketsTableSearchFilter = () => {
  const [rockets, setRockets] = useState<IRocket[]>([]);
  const [filteredRockets, setfilteredRockets] = useState<IRocket[]>([]);

  useEffect(() => {
    API.getRockets()
      .then((data) => {
        setRockets(data);
        setfilteredRockets(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const searchResults = (query: string) => {
    const filteredResults = rockets.filter((rocket) =>
      [
        rocket.rocket_name.toLowerCase(),
        rocket.diameter.meters.toString(),
        rocket.height.meters.toString(),
        rocket.mass.kg.toString(),
        rocket.cost_per_launch.toString(),
      ].some((value) => value.includes(query.toLowerCase()))
    );
    setfilteredRockets(filteredResults);
  };

  return (
    <div>
      <SearchFilter
        onSearch={searchResults}
        resultsCount={filteredRockets.length}
      />
      {filteredRockets.length === 0 ? (
        <StyledSearchFilter>No results found.</StyledSearchFilter>
      ) : (
        <RocketsTable rockets={filteredRockets} />
      )}
    </div>
  );
};

export default RocketsTableSearchFilter;
