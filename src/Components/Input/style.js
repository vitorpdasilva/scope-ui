import styled from 'styled-components';
import { variants, sizes } from '../../theme';

const StyledInput = styled.input`
	border: 2px solid;
	border-color: ${({ variant }) => variants[variant]?.main || variants.default.main };
	height: 42px;
	padding: 8px 12px;
	box-sizing: border-box;
	border-radius: 6px;
	transform: ${({ size }) => `scale(${sizes[size]})`};
	&:focus {
		outline: none;
	}
`;

export default StyledInput;
