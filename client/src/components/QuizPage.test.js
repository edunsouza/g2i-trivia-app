import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import { initialState, reducers } from '../state';
import { questions as questionsActions } from '../state/actions';

import QuizPage from './QuizPage';

let store = null;

afterEach(() => store = null);
beforeEach(() => {
	store = createStore(combineReducers(reducers), {
		...initialState,
		questions: { list: [{}], answered: 0 }
	});
});

test('should render QuizPage', async () => {
	render(
		<Provider store={store}>
			<QuizPage />
		</Provider>
	);
	expect(screen.getByText(/Quiz time!/i)).toBeInTheDocument();
	expect(screen.getByText(/True/i)).toBeInTheDocument();
	expect(screen.getByText(/False/i)).toBeInTheDocument();
});

test('should display the appropriate category', async () => {
	render(
		<Provider store={store}>
			<QuizPage />
		</Provider>
	);

	const category = 'Category: Test';

	act(() => {
		// load questions
		store.dispatch(questionsActions.fill([{ category }]));
	});

	expect(screen.getByText(category, { exact: true })).toBeInTheDocument();
	expect(screen.getByText(/True/i)).toBeInTheDocument();
	expect(screen.getByText(/False/i)).toBeInTheDocument();
});

test('should display the next question after answering the previous one', async () => {
	const { container } = render(
		<Provider store={store}>
			<QuizPage />
		</Provider>
	);

	const q1 = { category: 'Category: Test 1', question: 'Is it a question?' };
	const q2 = { category: 'Category: Test 2', question: `Isn't it?` };

	act(() => {
		// load questions
		store.dispatch(questionsActions.fill([
			{ id: 1, ...q1 },
			{ id: 2, ...q2 }
		]));
	});

	expect(screen.getByText(q1.category, { exact: true })).toBeInTheDocument();
	expect(screen.getByText(q1.question, { exact: true })).toBeInTheDocument();

	const anyAnswerButton = container.querySelector('footer > button');
	fireEvent.click(anyAnswerButton);

	expect(screen.getByText(q2.category, { exact: true })).toBeInTheDocument();
	expect(screen.getByText(q2.question, { exact: true })).toBeInTheDocument();
});
