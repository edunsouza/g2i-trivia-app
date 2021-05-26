import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ReactComponent as CorrectAnswerIcon } from '../assets/plus.svg';
import { ReactComponent as IncorrectAnswerIcon } from '../assets/minus.svg';

import { reset as resetQuestions } from '../state/actions/questions';

import Header from './Header';
import Button from './Button';
import Footer from './Footer';
import DecoratedList from './DecoratedList';

export default function ResultsPage() {
	const history = useHistory();
	const dispatch = useDispatch();
	const { list: questions, answered } = useSelector(store => store.questions);
	const [score, setScore] = useState(0);

	const playAgain = () => {
		dispatch(resetQuestions());
		history.push('/home');
	};

	useEffect(() => {
		if (answered < questions.length) {
			history.push('/quiz');
		}

		const rightOnes = questions.filter(q => q.isCorrect);
		setScore(rightOnes.length);
	}, []);

	const answerList = questions.map(q => ({
		id: q.id,
		text: q.question,
		decorator: q.isCorrect ? <CorrectAnswerIcon /> : <IncorrectAnswerIcon />
	}));

	return (
		<>
			<Header title="You scored" subtitle={`${score} / ${questions.length}`} />
			<DecoratedList list={answerList} />
			<Footer>
				<Button variant="primary" onClick={playAgain}>Play again?</Button>
			</Footer>
		</>
	);
}
