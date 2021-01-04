import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  children?: ReactNode;
}

const StyledButton = styled.button`
  display: flex;
`;

export default ({ children }: ButtonProps) => (
  <StyledButton>I SHOULD BE HERE</StyledButton>
);
