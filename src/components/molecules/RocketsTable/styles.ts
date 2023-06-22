import styled from 'styled-components';

export const StyledTableWrapper = styled.div`
  background-color: #f5f5f6;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledLablesWrapper = styled.div`
  display: flex;
  max-width: 1096px;
  justify-content: space-between;

  div {
    width: calc(1096px / 5);
    padding-left: 24px;

    color: #676c7e;

    font-size: 14px;
    font-family: Roboto;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.1px;
    padding-bottom: 0.8em;
  }
`;
export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1875em;
`;
export const StyledSingleInfo = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1096px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 17px 29px;

  font-size: '14px';
  font-weight: 400;
`;
export const StyledRocketsName = styled.div`
  width: calc(1096px / 5);
  text-align: left;
  font-size: 14px;
  letter-spacing: 0.25px;
`;

export const StyledMeasurementsDiameter = styled.div`
  width: calc(1096px / 5);
  text-align: right;
  padding-right: 139px;
  font-size: 14px;
  letter-spacing: 0.25px;
`;
export const StyledMeasurementsHeight = styled.div`
  width: calc(1096px / 5);
  text-align: right;
  font-size: 14px;
  letter-spacing: 0.25px;
  padding-right: 145px;
`;
export const StyledMeasurementsMass = styled.div`
  width: calc(1096px / 5);
  text-align: right;
  padding-right: 145px;
  font-size: 14px;
  letter-spacing: 0.25px;
`;

export const StyledMeasurementsCostPerLaunch = styled.div`
  width: calc(1096px / 5);
  padding-right: 65px;
  text-align: right;
  font-size: 14px;
  letter-spacing: 0.25px;
`;
