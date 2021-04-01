import styled from 'styled-components';
import { colors, variants } from '../../theme';

const Styled = styled.button`
  cursor: pointer;
  transition: border .25s linear, color .25s linear, background-color .25s linear;
  border: 0;
  padding: 10px 19px;
  font-size: 17px;
  line-height: 1.471;
  border-radius: 6px;
  color: white;
  background: ${({ variant, color }) => variants[variant].main || colors[color] || color || variants.default};
  min-width: 212px;
  min-height: 45px;
  &:hover {
    background: ${({ variant }) => variants[variant].hover};
  }
`;

export default Styled;