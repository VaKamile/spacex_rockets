import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  background-color: #f5f5fa;
  border-radius: 3.125em;
  height: 2.1875em;
`;

export const StyledIcon = styled.div`
  width: 0.875em;
  height: 0.875em;

  margin-left: 0.9375em;
  margin-top: 0.6em;
  background-color: #5a71e4;
  -webkit-mask-image: url('src/assets/search.svg');
  mask-image: url('src/assets/search.svg');
  object-fit: contain;
  object-position: center;
`;

export const StyledInput = styled.input`
  outline: none;
  border: none;
  width: 753px;
  margin-left: calc(0.75em - 1px);
  background-color: #f5f5fa;
  border-radius: 3.125em;

  font-size: 1em;
  line-height: 1.5em;
  color: #000;

  &::placeholder {
    color: #9b9eac;
  }
  &:focus {
    outline: none;
  }
`;
