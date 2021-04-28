import React from 'react';
import StyledInput from './style';

const Input = ({ variant, ...rest }) => (
    <StyledInput variant={variant} {...rest} />
);

export default Input;
