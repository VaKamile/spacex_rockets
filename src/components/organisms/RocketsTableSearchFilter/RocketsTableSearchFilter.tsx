import { useQuery } from 'react-query';
import { API } from '../../../shared/api';
import SearchFilter from '../../molecules/SearchFilter';
import { COLOR } from '../../../shared/theme/types';
import { IRocket } from '../../../shared/api/types';
import { ISearchFilterData } from '../../molecules/SearchFilter/SearchFilter';

const RocketsTableSearchFilter = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['rockets'],
    queryFn: () => API.getRockets(),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  const mappedRockets: ISearchFilterData = {
    title: 'Rockets',
    types: Array.from(
      new Set(data.map((rocket: IRocket) => rocket.diameter.meters))
    ),
    items: data.map((rocket: IRocket) => ({
      id: rocket.id?.toString() as string,
      value: rocket.rocket_name,
      type: rocket.mass.kg,
    })),
  };

  return (
    <SearchFilter data={mappedRockets} color={COLOR.info} itemsPerPage={4} />
  );
};

export default RocketsTableSearchFilter;
