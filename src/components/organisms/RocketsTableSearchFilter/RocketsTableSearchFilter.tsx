import { useState, useEffect } from 'react';
import { API } from '../../../shared/api';
import SearchFilter from '../../molecules/SearchFilter';
import RocketsTable from '../../molecules/RocketsTable';
import { IRocket } from '../../../shared/api/types';

const RocketsTableSearchFilter = () => {
  const [rockets, setRockets] = useState<IRocket[]>([]);
  const [mappedRockets, setMappedRockets] = useState<IRocket[]>([]);

  useEffect(() => {
    API.getRockets()
      .then((data) => {
        setRockets(data);
        setMappedRockets(data);
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
    setMappedRockets(filteredResults);
  };

  return (
    <div>
      <SearchFilter
        onSearch={searchResults}
        resultsCount={mappedRockets.length}
      />
      {mappedRockets.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <RocketsTable rockets={mappedRockets} />
      )}
    </div>
  );
};

export default RocketsTableSearchFilter;
