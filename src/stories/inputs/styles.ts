import styled from "styled-components";
export interface InputProps {
  placeholder: string;
  background?: string;
  borderColor?: string;
}

export const Container = styled.input<InputProps>`
  height: 30px;
  padding: 5px 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.background};
  transition: 0.2s;

  &:focus {
    border: 1px solid green;
  }
`;
