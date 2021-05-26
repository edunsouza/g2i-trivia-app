import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { reset as resetQuestions } from '../state/actions/questions';

import Header from './Header';
import Button from './Button';
import Footer from './Footer';

export default function ResultsPage() {
	const history = useHistory();
	const dispatch = useDispatch();

	const playAgain = () => {
		dispatch(resetQuestions());
		history.push('/home');
	};

	return (
		<>
			<Header title="You scored" subtitle="3 / 10" />
			{/* <TriviaResults /> */}
			<Footer>
				<Button variant="secondary" onClick={playAgain}>Play again?</Button>
			</Footer>
		</>
	);
}
