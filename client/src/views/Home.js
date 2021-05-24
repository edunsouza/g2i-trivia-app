import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PageHeader from '../components/PageHeader';

export default function Home() {
	const dispatch = useDispatch();
	const settings = useSelector(store => store.settings);

	useEffect(() => {
		document.title = 'Home';
	}, []);

	setTimeout(() => {
		dispatch({ type: 'eduardo' });
	}, 2000);

	const questionsType = settings.questionsType === 'boolean' ? 'True or False' : 'Multiple Choice';

	return (
		<>
			<PageHeader title="Welcome to the Trivia Challenge!" />
			<p>You will be presented with {settings.questionsAmount} {questionsType} questions.</p>
		</>
	);
}
