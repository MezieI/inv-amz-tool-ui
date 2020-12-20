import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	withRouter,
} from 'react-router-dom';

/* Utils */
import history from '../utils/history';

/* Pages */
import LoginPage from '../pages/LoginPage';

/* Components */
import AuthenticatedApp from './AuthenticatedApp';
import AuthenticatedRoute from './AuthenticateRoute';

const App = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path='/login' component={LoginPage} />
				<AuthenticatedRoute path='/'>
					<AuthenticatedApp />
				</AuthenticatedRoute>
			</Switch>
		</Router>
	);
};

export default App;
