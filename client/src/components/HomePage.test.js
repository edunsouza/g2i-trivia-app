import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { initialState, reducers } from '../state';
import HomePage from './HomePage';

let store = null;
let reduxState = null;

beforeEach(() => {
	reduxState = { ...initialState };
	store = createStore(combineReducers(reducers), reduxState);
});

afterEach(() => {
	reduxState = null;
	store = null;
});

test('should render HomePage', () => {
	render(
		<Provider store={store}>
			<HomePage />
		</Provider>
	);

	expect(screen.getByText('Welcome to the Trivia Challenge!', { exact: false })).toBeInTheDocument();
	expect(screen.getByText('Can you score 100%?', { exact: false })).toBeInTheDocument();
	expect(screen.getByText(/Begin/i)).toBeInTheDocument();
});

test('should display "True or False" as quiz description', () => {
	const questions = 10;
	reduxState.settings.questionsAmount = questions;
	reduxState.settings.questionsType = 'boolean';
	const store = createStore(reducers.settings, reduxState);

	render(
		<Provider store={store}>
			<HomePage />
		</Provider>
	);

	const booleanLabel = `You will be presented with ${questions} True or False questions.`;
	expect(screen.getByText(booleanLabel)).toBeInTheDocument();
});

test('should display "Multiple Choice" as quiz description', () => {
	const questions = 20;
	reduxState.settings.questionsAmount = questions;
	reduxState.settings.questionsType = 'multi';
	const store = createStore(reducers.settings, reduxState);

	render(
		<Provider store={store}>
			<HomePage />
		</Provider>
	);

	const booleanLabel = `You will be presented with ${questions} Multiple Choice questions.`;
	expect(screen.getByText(booleanLabel)).toBeInTheDocument();
});

test('should begin the quiz', () => {
	const historyMock = { location: {}, listen: Function(), push: jest.fn() };
	render(
		<Provider store={store}>
			<Router history={historyMock}>
				<HomePage />
			</Router>
		</Provider>
	);

	fireEvent.click(screen.getByText(/Begin/i));
	expect(historyMock.push.mock.calls[0][0]).toEqual('/quiz');
});