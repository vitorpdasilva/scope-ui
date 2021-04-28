import React from 'react';
import PropTypes from 'prop-types';
import { variants } from '../../theme';
import StyledButton from './style';

const Button = ({ variant, onClick, children, ...rest }) => (
    <StyledButton onClick={onClick} variant={variant} {...rest}>
      {children}
    </StyledButton>
);


Button.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants)),
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};


export default Button;
