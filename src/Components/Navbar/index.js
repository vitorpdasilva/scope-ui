import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import StyledNav, { NavItem } from './style';

const Navbar = ({ items = [], vertical = false, children, ...props }) => (
	<Router>
		<StyledNav {...props} vertical={vertical}>
			{items?.map(({ name, url, external = false, ...rest }) => (
				<NavItem key={name} vertical={vertical} {...props}>
					{external ? (
						<a href={url} target="_blank" {...rest}>{name}</a>
					) : (
						<Link to={url} {...rest}>{name}</Link>
					)}
				</NavItem>
			))}
			{children}
		</StyledNav>
	</Router>
);

export default Navbar;