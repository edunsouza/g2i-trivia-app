import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ResultsPage from './ResultsPage';
import QuizPage from './QuizPage';
import HomePage from './HomePage';

import './App.scss';

export default function App() {
	return (
		<div className="container">
			<Router>
				<Switch>
					<Route path="/results">
						<ResultsPage />
					</Route>
					<Route path="/quiz">
						<QuizPage />
					</Route>
					<Route path="/*">
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}