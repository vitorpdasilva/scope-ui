import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Styled from './style';

const Navbar = ({ items = [], children }) => (
	<Router>
		<Styled>
			{items?.map(({ name, url, external = false, ...rest }) => (
				<Fragment key={name}>
					{console.log({ items })}
					{external ? (
						<a href={url} target="_blank" {...rest}>{name}</a>
					) : (
						<Link to={url} {...rest}>{name}</Link>
					)}

				</Fragment>
			))}
			{children}
		</Styled>
	</Router>
);

export default Navbar;