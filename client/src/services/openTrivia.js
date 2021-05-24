import axios from 'axios';
import { assure } from '../utils';

const { OPEN_TRIVIA_ENDPOINT } = process.env;
const { positiveInteger, inRange } = assure;

export async function fetchQuestions({ amount, difficulty, type }) {
	positiveInteger(amount);
	inRange(difficulty, ['easy', 'medium', 'hard']);
	inRange(type, ['boolean', 'multiple']);

	try {
		const { data } = await axios.get(OPEN_TRIVIA_ENDPOINT, {
			qs: {
				amount,
				difficulty,
				type
			}
		});

		return data.results;
	} catch (error) {
		throw new Error('Unable to fetch Open Trivia DB questions');
	}
}
