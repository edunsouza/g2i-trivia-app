const answerQuestion = (answer, id) => ({
	type: 'QUESTIONS/ADD_ANSWER',
	payload: { answer, id }
});

const fillQuestions = payload => ({
	type: 'QUESTIONS/ADD_ANSWER',
	payload
});

export default {
	answerQuestion,
	fillQuestions
};