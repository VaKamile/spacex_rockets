import { IRocket } from '../../../shared/api/types.ts';
import {
  StyledTableWrapper,
  StyledLablesWrapper,
  StyledInfo,
  StyledSingleInfo,
  StyledRocketsName,
  StyledMeasurementsCostPerLaunch,
  StyledMeasurementsMass,
  StyledMeasurementsHeight,
  StyledMeasurementsDiameter,
} from './styles.ts';

interface IRocketsTableProps {
  rockets: IRocket[];
}

const RocketsTable = ({ rockets }: IRocketsTableProps) => {
  return (
    <StyledTableWrapper>
      <StyledLablesWrapper>
        <div>Rocket Name</div>
        <div>Diameter</div>
        <div>Height</div>
        <div>Mass</div>
        <div>Cost per launch</div>
      </StyledLablesWrapper>
      <StyledInfo>
        {rockets.map((rocket) => (
          <StyledSingleInfo key={rocket.id}>
            <StyledRocketsName>{rocket.rocket_name}</StyledRocketsName>
            <StyledMeasurementsDiameter>
              {rocket.diameter.meters}
            </StyledMeasurementsDiameter>
            <StyledMeasurementsHeight>
              {rocket.height.meters}
            </StyledMeasurementsHeight>
            <StyledMeasurementsMass>{rocket.mass.kg}</StyledMeasurementsMass>
            <StyledMeasurementsCostPerLaunch>
              $
              {rocket.cost_per_launch
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
            </StyledMeasurementsCostPerLaunch>
          </StyledSingleInfo>
        ))}
      </StyledInfo>
    </StyledTableWrapper>
  );
};

export default RocketsTable;
