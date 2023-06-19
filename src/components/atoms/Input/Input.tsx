import { useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';
import { StyledInputWrapper, StyledIcon, StyledInput } from './styles';

interface IInputProps {
  type: 'text' | 'number';
  value: string | number;
  setvalue: React.Dispatch<React.SetStateAction<string>>;
  icon?: any;
  placeholder?: string;
  color?: string;
}

const Input = ({
  type,
  value,
  setvalue,
  icon,
  placeholder,
  color,
}: IInputProps) => {
  const theme = useTheme();



  useEffect(() => {}, []);


  return (
  );
};

export default Input;
