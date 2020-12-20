import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../utils/authUtils';

/* @children : element
   @rest: react-router-dom props
*/
const AuthenticatedRoute = ({ children, ...rest }) => {
	return (
		<Route {...rest}>
			{isAuthenticated ? { ...children } : <Redirect to='/login' />}
		</Route>
	);
};

AuthenticatedRoute.propType = {
	children: PropTypes.element,
};

AuthenticatedRoute.defaultProps = {
	children: PropTypes.isRequired,
};

export default AuthenticatedRoute;
