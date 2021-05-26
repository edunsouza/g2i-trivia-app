import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchQuestions } from '../services';
import { setLoading } from '../state/actions/navigation';
import { answer as answerQuestion, fill as fillQuestions } from '../state/actions/questions';

import Header from './Header';
import Button from './Button';
import Label from './Label';
import DescriptiveFrame from './DescriptiveFrame';
import Footer from './Footer';

export default function QuizPage() {
	const history = useHistory();
	const dispatch = useDispatch();
	const { questions, navigation, settings } = useSelector(store => store);
	const [hasError, setError] = useState(false);

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
			setError(false);
		} catch (error) {
			setError(true);
		} finally {
			dispatch(setLoading(false));
		}
	};

	useEffect(() => document.title = 'Quiz', []);

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

	const currentQuestion = questions.list[questions.answered] || {};
	const counter = {
		answered: (questions.answered || 0) + 1,
		total: questions.list.length
	};

	return (
		<>
			<Header title={currentQuestion.category || 'Quiz time!'} />

			<DescriptiveFrame description={`${counter.answered} of ${counter.total}`}>
				<Label isLoading={navigation.isLoading} variant="bordered">
					{hasError ? 'Unable to fetch questions. Please, try again.' : currentQuestion.question}
				</Label>
			</DescriptiveFrame>

			<Footer>
				<Button onClick={() => onAnswer('True')}>True</Button>
				<Button onClick={() => onAnswer('False')}>False</Button>
			</Footer>
		</>
	);
}
