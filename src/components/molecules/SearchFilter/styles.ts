import { styled } from 'styled-components';

export const StyledSearchFilterWrapper = styled.div`
  margin: 1em;
  border-radius: 0.375em;

  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
`;

export const StyledTitleContainer = styled.div`
  background-color: ${(props) =>
    props.color
      ? props.theme.palette[props.color].main
      : props.theme.palette.default.main};

  border-radius: 0.375em 0.375em 0 0;
  padding: 1em 1.25em;

  h3 {
    font-size: 1.25em;
    line-height: 1.25;
    font-weight: 700;
    color: ${(props) =>
      props.color
        ? props.theme.palette.light.main
        : props.theme.palette.dark.main};
  }
`;

export const StyledSearchContainer = styled.div`
  padding: 0.5em 0.75em;
  border-bottom: ${(props) => `1px solid ${props.theme.palette.default.main}`};
`;

export const StyledFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props) => `1px solid ${props.theme.palette.default.main}`};

  a {
    display: inline-block;
    padding: 0.5em;

    color: ${(props) =>
      props.color
        ? props.theme.palette[props.color].main
        : props.theme.palette.link.main};
    text-decoration: none;
    font-size: 0.875em;
    line-height: 1.5;
    font-weight: 400;

    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.palette.dark.main};
    }
  }

  a.selected {
    color: ${(props) => props.theme.palette.dark.main};
    box-shadow: ${(props) => `0 1px 0 ${props.theme.palette.dark.main}`};
  }
`;

export const StyledItemsContainer = styled.div`
  p {
    color: ${(props) => props.theme.palette.dark.main};
    border-bottom: ${(props) =>
      `1px solid ${props.theme.palette.default.main}`};
    padding: 0.5em 0.75em;

    span.item-before-value-and-value-container {
      display: flex;
      align-items: center;
      gap: 10px;

      span.item-before-value {
        width: 5%;
      }
    }

    span.item-value {
      line-height: 1.5;
    }
  }
`;

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 0.5em 0.75em;

  button {
    min-width: 2em;
    padding: 0.2em 0.6em;
    border: ${(props) => `1px solid ${props.theme.palette.default.main}`};
    border-radius: 0.375em;

    background-color: ${(props) => props.theme.palette.light.main};

    font-size: 0.9em;
    line-height: 1.4;
    color: ${(props) => props.theme.palette.dark.main};
    cursor: pointer;

    &:hover {
      background-color: ${(props) =>
        props.color
          ? props.theme.palette[props.color].main
          : props.theme.palette.default.main};
      color: ${(props) => props.theme.palette.light.main};
    }
  }

  button.selected {
    background-color: ${(props) =>
      props.color
        ? props.theme.palette[props.color].main
        : props.theme.palette.default.main};
    color: ${(props) => props.theme.palette.light.main};
  }
`;

export const StyledResetFilterButtonContainer = styled.div`
  padding: 0.5em 0.75em;
`;
