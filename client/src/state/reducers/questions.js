export default (state = {}, { type, payload }) => {
	switch (type) {
		case 'QUESTIONS/ADD_ANSWER': {
			return [...state].map(question => {
				if (question.id === payload.id) {
					question.answer = payload.answer
				}
				return question;
			});
		}
		case 'QUESTIONS/FILL_QUESTIONS':
			return Array.isArray(payload) ? payload : [];
		default:
			return state;
	}
};
