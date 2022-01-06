import React from "react";

interface InputProps {
  placeholder: string;
}

export const Input = ({ placeholder }: InputProps) => {
  return <input placeholder={placeholder} />;
};
