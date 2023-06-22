import { useEffect, useRef } from 'react';

import { StyledInputWrapper, StyledIcon, StyledInput } from './style';

// interface IInputProps {
//   type: 'text' | 'number';
//   value: string | number;
//   setvalue: React.Dispatch<React.SetStateAction<string>>;
//   icon?: any;
//   placeholder?: string;
//   color?: string;
// }

const Search = () => {
  // const inputWrapperRef = useRef<HTMLDivElement | null>(null);
  // const inputRef = useRef<HTMLInputElement | null>(null);
  // const iconRef = useRef<HTMLImageElement | null>(null);

  // useEffect(() => {
  //   const handleOutsideInputClick = (e: any) => {
  //     if (!inputWrapperRef.current?.contains(e.target)) {
  //       inputWrapperRef.current!.style.boxShadow = 'none';
  //       inputWrapperRef.current!.style.borderColor = 'none';
  //       iconRef.current!.style.color = 'green';
  //     }
  //   };

  //   document.addEventListener('click', handleOutsideInputClick);

  //   return () => {
  //     document.removeEventListener('click', handleOutsideInputClick);
  //   };
  // }, []);

  // const handleClick = () => {
  //   inputWrapperRef.current!.style.boxShadow = `0px 0px 1px 3px 'yellow'
  //   `;

  //   inputWrapperRef.current!.style.borderColor = 'yellow';
  //   inputRef.current!.focus();
  //   iconRef.current!.style.color = 'white';
  // };

  return (
    <StyledInputWrapper>
      <StyledIcon></StyledIcon>
      <StyledInput />
    </StyledInputWrapper>
  );
};

export default Search;
