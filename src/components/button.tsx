import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: ${props => props.theme.accent};
  color: white;
  padding: 6px 16px;
  border-radius: 10px;
`;

const Button = ({ children, ...rest }: ButtonHTMLAttributes<{}>) => {
  return <Btn {...rest}>{children}</Btn>;
};

export default Button;
