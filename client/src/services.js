import axios from 'axios';

import { assureInRange, assurePositiveInteger, decodeHtmlSpecialChars } from './utils';

const { REACT_APP_TRIVIA_ENDPOINT } = process.env;

export async function fetchQuestions({ amount, difficulty, type }) {
	assurePositiveInteger(amount);
	assureInRange(difficulty, ['easy', 'medium', 'hard']);
	assureInRange(type, ['boolean', 'multiple']);

	try {
		const params = { amount, difficulty, type };
		const { data } = await axios.get(REACT_APP_TRIVIA_ENDPOINT, { params });
		return data.results.map((q, i) => ({
			id: i,
			category: q.category,
			question: decodeHtmlSpecialChars(q.question),
			correctAnswer: q.correct_answer,
			incorrectAnswers: q.incorrect_answers
		}));
	} catch (error) {
		throw new Error('Unable to fetch Open Trivia DB questions');
	}
}