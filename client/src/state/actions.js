import questions from './actions/questions';
import navigation from './actions/navigation';

export default {
	...questions,
	...navigation
};

export { questions, navigation };