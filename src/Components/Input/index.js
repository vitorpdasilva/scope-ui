import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from './style';

const Input = ({ variant, ...rest }) => (
    <StyledInput variant={variant} {...rest} />
);

Input.propTypes = {
  variant: PropTypes.oneOf(['primary', 'success', 'warning', 'inverse', 'default', 'info', 'danger', 'disabled']),
  children: PropTypes.isRequired,
  onClick: PropTypes.func,
};

Input.defaultProps = {
  variant: 'default',
  onClick: undefined,
};


export default Input;
