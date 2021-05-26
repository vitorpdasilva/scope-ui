import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './style';

const Button = ({ variant, onClick, size = 'medium', children, ...rest }) => (
    <StyledButton onClick={onClick} size={size} variant={variant} {...rest}>
      {children}
    </StyledButton>
);

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'success', 'warning', 'inverse', 'default', 'info', 'danger', 'disabled']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'default',
	size: 'medium',
  onClick: undefined,
};


export default Button;
