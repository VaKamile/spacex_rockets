import { useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';
import { StyledInputWrapper, StyledIcon, StyledInput } from './style';

interface IInputProps {
  type: 'text' | 'number';
  value: string | number;
  setvalue: React.Dispatch<React.SetStateAction<string>>;
  icon?: any;
  placeholder?: string;
  color?: string;
}

const Search = ({
  type,
  value,
  setvalue,
  icon,
  placeholder,
  color,
}: IInputProps) => {
  const theme = useTheme();

  const inputWrapperRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const iconRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleOutsideInputClick = (e: any) => {
      if (!inputWrapperRef.current?.contains(e.target)) {
        inputWrapperRef.current!.style.boxShadow = 'none';
        inputWrapperRef.current!.style.borderColor =
          theme!.pallete.secondary.main;
        iconRef.current!.style.color = theme!.palette.default.dark;
      }
    };

    document.addEventListener('click', handleOutsideInputClick);

    return () => {
      document.removeEventListener('click', handleOutsideInputClick);
    };
  }, []);

  const handleClick = () => {
    inputWrapperRef.current!.style.boxShadow = `0px 0px 1px 3px ${
      color ? theme!.palette[color].light : theme!.palette.default.light
    }`;

    inputWrapperRef.current!.style.borderColor = color
      ? theme!.palette[color].dark
      : theme!.palette.default.dark;
    inputRef.current!.focus();
    iconRef.current!.style.color = theme!.palette.dark.main;
  };

  return (
    <StyledInputWrapper ref={inputWrapperRef} onClick={handleClick}>
      <StyledIcon ref={iconRef}>{icon && icon}</StyledIcon>
      <StyledInput
        ref={inputRef}
        type={type}
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        placeholder={placeholder ? placeholder : ''}
      />
    </StyledInputWrapper>
  );
};

export default Search;
