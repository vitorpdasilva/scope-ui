import React from 'react';
import StyledTitle from './style';
import PropTypes from 'prop-types';

const Title = ({ as = 'h1', level = 2, variant = 'default', children }) => {
	return (
		<StyledTitle variant={variant} level={level} as={as}>
			{children}
		</StyledTitle>
	)
};

Title.PropTypes = {
	as: PropTypes.string,
	variant: PropTypes.oneOf(['primary', 'success', 'warning', 'inverse', 'default', 'info', 'danger', 'disabled']),
	level: PropTypes.oneOf(['1', '2', '3', '4', '5']),
	children: PropTypes.any,
}


export default Title;
