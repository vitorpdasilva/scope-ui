import React from 'react';
import Styled from './style';

const Button = ({ children, ...rest }) => (
    <Styled {...rest}>
      {children}
    </Styled>
);

export default Button;