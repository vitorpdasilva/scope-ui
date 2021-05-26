import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from './style';

const Input = ({ variant, ...rest }) => (
    <StyledInput variant={variant} {...rest} />
);

Input.propTypes = {
  variant: PropTypes.oneOf(['primary', 'success', 'warning', 'inverse', 'default', 'info', 'danger', 'disabled']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
	onClick: PropTypes.func,
};

Input.defaultProps = {
  variant: 'default',
	size: 'medium',
  onClick: undefined,
};


export default Input;
