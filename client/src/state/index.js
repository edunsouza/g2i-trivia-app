import { createStore, combineReducers } from 'redux';

import reducers from './reducers';
import actions from './actions';

const session = window.sessionStorage.getItem('trivia');
const initialState = session ? JSON.parse(session) : {
	questions: {
		answered: 0,
		list: []
	},
	navigation: { isLoading: false },
	settings: {
		difficulty: 'hard',
		questionsAmount: 10,
		questionsType: 'boolean'
	}
};

const store = createStore(combineReducers(reducers), initialState);

store.subscribe(() => {
	const sessionState = JSON.stringify(store.getState());
	window.sessionStorage.setItem('trivia', sessionState);
});

export {
	store,
	initialState,
	reducers,
	actions
};
