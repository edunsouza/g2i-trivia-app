export default (state = {}, { type, payload }) => {
	switch (type) {
		case 'QUESTIONS/ADD_ANSWER':
			return {
				answered: state.answered + 1,
				list: state.list.map(q => ({
					...q,
					answer: q.id === payload.id ? payload.answer : q.answer
				}))
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
