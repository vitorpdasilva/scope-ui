import React from 'react';
import StyledButton from './style';

const Button = ({ children, ...rest }) => (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
);

export default Button;