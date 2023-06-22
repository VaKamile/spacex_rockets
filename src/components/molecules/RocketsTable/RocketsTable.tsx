import { useEffect, useState } from 'react';

import { API } from '../../../shared/api/index.ts';
import { IRocket } from '../../../shared/api/types.ts';
import {
  StyledTableWrapper,
  StyledLablesWrapper,
  StyledInfo,
  StyledSingleInfo,
  StyledMeasurements,
} from './styles.ts';

function RocketsTable() {
  const [rockets, setRockets] = useState<IRocket[]>([]);

  useEffect(() => {
    API.getRockets()
      .then((data) => {
        setRockets(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  // const costPerLaunch = { };
  // const formattedNumber = costPerLaunch.toLocaleString();
  // const formattedCostPerLauch = `${formattedNumber.replace(/,/g, ' ')}`;

  return (
    <StyledTableWrapper>
      <StyledLablesWrapper>
        <span>Rocket Name</span>
        <span>Diameter</span>
        <span>Height</span>
        <span>Mass</span>
        <span>Cost per launch</span>
      </StyledLablesWrapper>
      <StyledInfo>
        {rockets.map((rocket) => (
          <StyledSingleInfo key={rocket.id}>
            <span>{rocket.rocket_name}</span>
            <StyledMeasurements>{rocket.diameter.meters}m</StyledMeasurements>
            <StyledMeasurements>{rocket.height.meters}m</StyledMeasurements>
            <StyledMeasurements>{rocket.mass.kg}kg</StyledMeasurements>
            <StyledMeasurements>${rocket.cost_per_launch}</StyledMeasurements>
          </StyledSingleInfo>
        ))}
      </StyledInfo>
    </StyledTableWrapper>
  );
}

export default RocketsTable;
