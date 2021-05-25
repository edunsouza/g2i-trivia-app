import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import { initialState, reducers } from '../state';
import HomePage from './HomePage';

test('renders HomePage', () => {
	const store = createStore(combineReducers(reducers), initialState);
	render(
		<Provider store={store}>
			<HomePage />
		</Provider>
	);
	const headerElement = screen.getByText(/Welcome to the Trivia Challenge!/i);
	expect(headerElement).toBeInTheDocument();
});
