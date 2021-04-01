import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Styled, { NavItem } from './style';

const Navbar = ({ items = [], children }) => (
	<Router>
		<Styled>
			{items?.map(({ name, url, external = false, ...rest }) => (
				<NavItem key={name}>
					{external ? (
						<a href={url} target="_blank" {...rest}>{name}</a>
					) : (
						<Link to={url} {...rest}>{name}</Link>
					)}
				</NavItem>
			))}
			{children}
		</Styled>
	</Router>
);

export default Navbar;