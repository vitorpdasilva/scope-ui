import styled from 'styled-components';
import { variants, colors } from '../../theme';

const Styled = styled.nav`
    border: 1px solid red;
    height: 53px;
    background: ${({ variant, color }) => variants[variant]?.main || colors[color] || color || variants.inverse.main};
    color: ${colors.white};
`;

export default Styled;