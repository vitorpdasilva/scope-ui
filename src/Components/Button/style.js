import styled from 'styled-components';
import { colors, variants, transition } from '../../theme';

const Styled = styled.button`
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
  &:hover {
    background: ${({ variant }) => variants[variant].hover};
  }
`;

export default Styled;