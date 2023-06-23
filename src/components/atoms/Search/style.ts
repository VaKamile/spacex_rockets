import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  background-color: #f5f5fa;
  border-radius: 3.125em;
  height: 2.1875em;
`;

export const StyledIcon = styled.div`
  width: 1.1em;
  height: 1.1em;
  margin-left: 0.9375em;
  margin-top: 0.6em;
  background-repeat: no-repeat;
  stroke: rgb(90, 113, 228);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --%3E%3Cpath d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z' fill='rgb(90, 113, 228)'/%3E%3C/svg%3E");
  object-fit: contain;
  object-position: center center;
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
