import styled from 'styled-components/macro';
import { variants } from '../../theme';

const levels = [18, 26, 34, 48, 60];

const StyledTitle = styled.h1`
	font-size: ${({ level }) => `${levels[level - 1]}px`};
	color: ${({ variant }) => variants[variant].main}
`;

export default StyledTitle;
