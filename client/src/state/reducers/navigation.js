export default (state = {}, { type, payload }) => {
	switch (type) {
		case 'NAVIGATION/INCREMENT_CURRENT_QUESTION':
			// eslint-disable-next-line
			console.log('payload:', payload);
			return {
				...state,
				currentQuestion: payload
			};
		default:
			return state;
	}
};
