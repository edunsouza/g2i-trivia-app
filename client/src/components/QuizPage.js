import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchQuestions } from '../services';
import { setLoading } from '../state/actions/navigation';
import { answer as answerQuestion, fill as fillQuestions } from '../state/actions/questions';

import Header from './Header';
import Button from './Button';
import Label from './Label';
import ActionFooter from './ActionFooter';

export default function QuizPage() {
	const [hasError, setError] = useState(false);
	const { questions, navigation, settings } = useSelector(store => store);
	const dispatch = useDispatch();
	const history = useHistory();

	const currentQuestion = questions.list[questions.answered] || {};

	const onAnswer = answer => {
		if (navigation.isLoading || hasError) {
			return;
		}
		dispatch(answerQuestion(answer, currentQuestion.id));
	};

	const getQuestions = async () => {
		try {
			dispatch(setLoading(true));
			const { difficulty, questionsAmount: amount, questionsType: type } = settings;
			const questions = await fetchQuestions({ difficulty, amount, type });
			dispatch(fillQuestions(questions));
		} catch (error) {
			setError(true);
		} finally {
			dispatch(setLoading(false));
		}
	};

	useEffect(() => {
		if (questions.answered > 0 && questions.answered >= questions.list.length) {
			history.push('/results');
		}
	}, [questions.answered]);

	useEffect(() => {
		if (!questions.list.length) {
			getQuestions();
		}
	}, [questions.list]);

	useEffect(() => document.title = 'Quiz', []);

	return (
		<>
			<Header title="Quiz!" />
			{
				hasError
					? <Label>Unable to fetch questions. Please, try again later.</Label>
					: <Label>{navigation.isLoading ? 'Loading...' : currentQuestion.question}</Label>
			}
			<ActionFooter>
				<Button onClick={() => onAnswer('True')}>True</Button>
				<Button onClick={() => onAnswer('False')}>False</Button>
			</ActionFooter>
		</>
	);
}
