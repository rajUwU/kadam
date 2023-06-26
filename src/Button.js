import React from 'react';
import styled from 'styled-components';
import { tertiaryColor } from './colors';

const StyledButton = styled.button`
  background-color: ${tertiaryColor};
  border: none;
  padding: 20px 0 20px 0;
  font-size: 2.5vh;
  border-radius: 30px;
  cursor: pointer;
  margin: 0 1vh 0 1vh;

  &:hover {
    background-color: #fdcddf;
  }
`;

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;