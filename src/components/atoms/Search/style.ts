import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  background-color: #f5f5fa;
  border-radius: 0.5em;
`;

export const StyledIcon = styled.span`
  color: #5a71e4;
  font-size: 0.875em;
`;

export const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding-left: calc(0.75em - 1px);
  background-color: #f5f5fa;
  border-radius: 3.125em;

  font-size: 1em;
  line-height: 1.5;
  color: red;

  &::placeholder {
    color: #f5f5fa;
  }
`;
