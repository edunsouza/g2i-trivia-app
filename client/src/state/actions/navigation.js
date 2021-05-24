const incrementCurrentQuestion = currentQuestionIndex => ({
	type: 'NAVIGATION/INCREMENT_CURRENT_QUESTION',
	payload: currentQuestionIndex
});

export default {
	incrementCurrentQuestion
};