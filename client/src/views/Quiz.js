import React, { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

import { answerQuestion, incrementCurrentQuestion } from '../state/actions';

import PageHeader from '../components/PageHeader';
// import ActionFooter from '../components/ActionFooter';

export default function Quiz() {
	const dispatch = useDispatch();
	const { questions, navigation } = useStore().getState();

	const onAnswer = answer => {
		dispatch(answerQuestion(answer, navigation.currentQuestion));
		dispatch(incrementCurrentQuestion(navigation.currentQuestion));
	};

	useEffect(() => {
		document.title = 'Quiz';
	}, []);

	const currentQuestion = questions[navigation.currentQuestion];

	return (
		<>
			<PageHeader title="Quiz!" />
			{currentQuestion}
			<div>
				<button onClick={() => onAnswer('True')}>True</button>
				<button onClick={() => onAnswer('False')}>False</button>
			</div>
		</>
	);
}
