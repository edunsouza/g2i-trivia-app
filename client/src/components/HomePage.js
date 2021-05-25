import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Header from './Header';
import Button from './Button';
import Label from './Label';
import ActionFooter from './ActionFooter';


export default function HomePage() {
	const history = useHistory();
	const settings = useSelector(store => store.settings);

	const begin = () => {
		history.push('/quiz');
	};

	const questionsType = settings.questionsType === 'boolean' ? 'True or False' : 'Multiple Choice';

	useEffect(() => document.title = 'Home', []);

	return (
		<>
			<Header title="Welcome to the Trivia Challenge!" />
			<Label>You will be presented with {settings.questionsAmount} {questionsType} questions.</Label>
			<Label>Can you score 100%?</Label>
			<ActionFooter>
				<Button variant="primary" onClick={begin}>Begin</Button>
			</ActionFooter>
		</>
	);
}
