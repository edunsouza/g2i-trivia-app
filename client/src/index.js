import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './state';
import Home from './views/Home';
import Results from './views/Results';
import Quiz from './views/Quiz';

import ResponsiveContainer from './components/ResponsiveContainer';

import './index.scss';

ReactDOM.render(
	<Provider store={store}>
		<ResponsiveContainer>
			<Router>
				<Switch>
					<Route path="/results">
						<Results />
					</Route>
					<Route path="/quiz">
						<Quiz />
					</Route>
					<Route path="/*">
						<Home />
					</Route>
				</Switch>
			</Router>
		</ResponsiveContainer>
	</Provider>,
	document.getElementById('root')
);
