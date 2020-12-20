import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import DashboardPage from '../pages/DashboardPage';
import NavHeader from '../components/NavHeader'; 

// List of Authenticated Routes


/* TODO
  Development Error Wrapper Route
*/

const AuthenticatedAppContent = () => {
	return (
		<>
			<NavHeader></NavHeader>
			<Switch>
				<Route exact path='/dashboard' component={DashboardPage} />
			</Switch>
			<Redirect to='/dashboard' />
		</>
	);
};

export default AuthenticatedAppContent;
