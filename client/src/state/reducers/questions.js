export default (state = {}, { type, payload }) => {
	switch (type) {
		case 'QUESTIONS/ANSWER':
			return {
				answered: state.answered + 1,
				list: state.list.map(q => {
					if (q.id == payload.id) {
						q.answer = payload.answer;
						q.isCorrect = `${payload.answer}`.toLowerCase() === `${q.correctAnswer}`.toLowerCase();
					}
					return { ...q };
				})
			};
		case 'QUESTIONS/FILL':
			return {
				...state,
				list: Array.isArray(payload) ? payload : []
			};
		case 'QUESTIONS/RESET':
			return {
				answered: 0,
				list: []
			};
		default:
			return state;
	}
};
