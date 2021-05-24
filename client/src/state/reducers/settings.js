export default (state = {}, { type, payload }) => {
	switch (type) {
		case 'SETTINGS/SET_DIFFICULTY':
			return {
				...state,
				difficulty: payload || 'hard'
			};
		default:
			return state;
	}
};
