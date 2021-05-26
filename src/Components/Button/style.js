import styled from 'styled-components/macro';
import { colors, variants, transition, sizes } from '../../theme';

const StyledButton = styled.button`
  cursor: pointer;
  transition: ${transition};
  border: 0;
  padding: 10px 19px;
  font-size: 17px;
  line-height: 1.471;
  border-radius: 6px;
  color: ${colors.white};
  background: ${({ variant, color }) => variants[variant]?.main || colors[color] || color || variants.default.main};
  min-width: 212px;
  min-height: 45px;
	transform: ${({ size }) => `scale(${sizes[size]})`};
  &:hover {
    background: ${({ variant }) => variants[variant].hover};
  }
	cursor: ${({ variant, disabled }) => variant === 'disabled' || disabled ? 'not-allowed' : 'pointer'};
  &:focus {
    outline: none;
  }
`;

export default StyledButton;
