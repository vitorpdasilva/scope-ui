import React from 'react';
import PropTypes from 'prop-types';
import { variants } from '../../theme';
import StyledButton from './style';

const Button = ({ variant, onClick, children, ...rest }) => (
    <StyledButton onClick={onClick} variant={variant} {...rest}>
      {children}
    </StyledButton>
);

const variantsTypes = Object.keys(variants);

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'success', 'warning', 'inverse', 'default', 'info', 'danger', 'disabled']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'default',
  onClick: undefined,
};


export default Button;
