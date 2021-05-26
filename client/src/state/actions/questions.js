const answer = (answer, id) => ({
	type: 'QUESTIONS/ANSWER',
	payload: { answer, id }
});

const fill = list => ({
	type: 'QUESTIONS/FILL',
	payload: list
});

const reset = () => ({ type: 'QUESTIONS/RESET' });

export default {
	answer,
	fill,
	reset
};

export { answer, fill, reset };