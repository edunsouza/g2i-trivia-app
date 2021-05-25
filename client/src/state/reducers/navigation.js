export default (state = {}, { type, payload }) => {
	switch (type) {
		case 'NAVIGATION/SET_LOADING':
			return { ...state, isLoading: payload };
		default:
			return state;
	}
};
