import styled from 'styled-components';
import { variants, colors, transition } from '../../theme';

const Styled = styled.nav`
  height: 53px;
  background: ${({ variant, color }) => variants[variant]?.main || colors[color] || color || variants.inverse.main};
  color: ${colors.white};
  display: flex;
  * {
    text-decoration: none;
    color: white;
  }
`;

export const NavItem = styled.div`
  transition: ${transition};
  height: 100%;
  min-width: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  cursor: pointer;
  &:hover {
    background: ${variants.primary.main};
  }
`;

export default Styled;