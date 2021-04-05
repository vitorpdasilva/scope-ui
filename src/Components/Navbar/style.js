import styled from 'styled-components/macro';
import { variants, colors, transition } from '../../theme';

const StyledNav = styled.nav`
  height: ${({ vertical }) => vertical ? '100vh' : '53px'};
  background: ${({ variant, color }) => variants[variant]?.main || colors[color] || color || variants.inverse.main};
  color: ${colors.white};
  display: flex;
  width: ${({ vertical }) => vertical ? '140px' : 'auto'};
  flex-direction: ${({ vertical }) => vertical ? 'column' : 'inherit'};
  * {
    text-decoration: none;
    color: white;
  }
`;

export const NavItem = styled.div`
  transition: ${transition};
  height: ${({ vertical }) => vertical ? '53px' : '100%'};
  min-width: 108px;
  color: ${colors.white};
  cursor: pointer;
  &:hover {
    background: ${variants.primary.main};
  }
	> a {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export default StyledNav;
