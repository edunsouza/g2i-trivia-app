import { createStore, combineReducers } from 'redux';

import navigation from './reducers/navigation';
import settings from './reducers/settings';
import questions from './reducers/questions';

const reducers = combineReducers({ navigation, settings, questions });

const session = window.sessionStorage.getItem('quiz-state');
const initialState = session ? JSON.parse(session) : {
	questions: [],
	navigation: { currentQuestion: null },
	settings: {
		difficulty: 'hard',
		questionsAmount: 10,
		questionsType: 'boolean'
	}
};

const store = createStore(reducers, initialState);

store.subscribe(() => {
	const sessionState = JSON.stringify(store.getState());
	window.sessionStorage.setItem('quiz-state', sessionState);
	// eslint-disable-next-line
	console.log(JSON.parse(sessionState));
});

export default store;
