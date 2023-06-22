import { useEffect, useRef, ChangeEvent } from 'react';
import { StyledInputWrapper, StyledIcon, StyledInput } from './style';

interface IInputProps {
  type: 'text' | 'number';
  value: string | number;
  setvalue: (value: string) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Search = ({
  onChange,
  type,
  value,
  setvalue,
  placeholder,
}: IInputProps) => {
  const inputWrapperRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleOutsideInputClick = (e: any) => {
      if (!inputWrapperRef.current?.contains(e.target)) {
        inputWrapperRef.current!.style.boxShadow = 'none';
      }
    };

    document.addEventListener('click', handleOutsideInputClick);

    return () => {
      document.removeEventListener('click', handleOutsideInputClick);
    };
  }, []);

  const handleClick = () => {
    inputWrapperRef.current!.style.boxShadow = `0px 0px 1px 3px lightgrey`;
  };

  return (
    <StyledInputWrapper ref={inputWrapperRef} onClick={handleClick}>
      <StyledIcon></StyledIcon>
      <StyledInput
        ref={inputRef}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder ? placeholder : ''}
      />
    </StyledInputWrapper>
  );
};

export default Search;
