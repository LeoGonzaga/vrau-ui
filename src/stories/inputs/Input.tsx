import React from "react";
import { Container } from "./styles";
export interface InputProps {
  placeholder: string;
  background?: string;
  borderColor?: string;
}

export const Input = ({ placeholder, background, borderColor }: InputProps) => {
  return (
    <Container
      placeholder={placeholder}
      background={background}
      borderColor={borderColor}
    />
  );
};
