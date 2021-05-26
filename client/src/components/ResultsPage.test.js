import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { initialState, reducers } from '../state';
import ResultsPage from './ResultsPage';

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

test('should render ResultsPage', () => {
	render(
		<Provider store={store}>
			<ResultsPage />
		</Provider>
	);

	expect(screen.getByText(/You scored/i)).toBeInTheDocument();
	expect(screen.getByText('0 / 0')).toBeInTheDocument();
	expect(screen.getByText('Play again?', { exact: false })).toBeInTheDocument();
});

test('should have full score quiz results', () => {
	const questions = 3;
	reduxState.settings.questionsAmount = questions;
	reduxState.questions.answered = questions;
	reduxState.questions.list = [
		{ id: 1, isCorrect: true },
		{ id: 2, isCorrect: true },
		{ id: 3, isCorrect: true }
	]
	const store = createStore(reducers.settings, reduxState);

	render(
		<Provider store={store}>
			<ResultsPage />
		</Provider>
	);

	expect(screen.getByText(`${questions} / ${questions}`)).toBeInTheDocument();
});

test('should have zero score quiz results', () => {
	const questions = 5;
	reduxState.settings.questionsAmount = questions;
	reduxState.questions.answered = questions;
	reduxState.questions.list = [
		{ id: 1, isCorrect: false },
		{ id: 2, isCorrect: false },
		{ id: 3, isCorrect: false },
		{ id: 4, isCorrect: false },
		{ id: 5, isCorrect: false }
	]
	const store = createStore(reducers.settings, reduxState);

	render(
		<Provider store={store}>
			<ResultsPage />
		</Provider>
	);

	expect(screen.getByText(`0 / ${questions}`)).toBeInTheDocument();
});

test('should have at least one score quiz results', () => {
	const questions = 2;
	reduxState.settings.questionsAmount = questions;
	reduxState.questions.answered = questions;
	reduxState.questions.list = [
		{ id: 1, isCorrect: false },
		{ id: 2, isCorrect: true }
	]
	const store = createStore(reducers.settings, reduxState);

	render(
		<Provider store={store}>
			<ResultsPage />
		</Provider>
	);

	expect(screen.getByText(`1 / ${questions}`)).toBeInTheDocument();
});

test('should display questions in results list', () => {
	const [q1, q2, q3] = ['is this a test?', 'isn\'t this a test?', 'this is not even a question!'];
	reduxState.questions.answered = 3;
	reduxState.questions.list = [
		{ id: 1, question: q1 },
		{ id: 2, question: q2 },
		{ id: 3, question: q3 }
	]
	const store = createStore(reducers.settings, reduxState);

	render(
		<Provider store={store}>
			<ResultsPage />
		</Provider>
	);

	expect(screen.getByText(q1)).toBeInTheDocument();
	expect(screen.getByText(q2)).toBeInTheDocument();
	expect(screen.getByText(q3)).toBeInTheDocument();
});