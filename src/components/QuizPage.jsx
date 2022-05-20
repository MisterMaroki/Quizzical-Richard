import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import he from 'he';
import { sort } from '../utils/Utils';
import { QuestionElement } from './QuestionElement';
import { AnswerElement } from './AnswerElement';

export const QuizPage = (props) => {
  const [quizData, setQuizData] = useState([]);

	//this useEffect runs twice when you are in dvelopment mode but when you promote to production the useEffect should only run once
	//learn more about that here https://www.codingdeft.com/posts/react-use-effect-running-twice/
	useEffect(() => {
		getQuizData();
	}, []);

	//exctracted these functions to arrow in function scope
	const getQuizData = async () => {
		 const AMOUNT = props.quizSettings.amount;
    const CATEGORY = props.quizSettings.category;
    const DIFFICULTY = props.quizSettings.difficulty;
    const URL = `https://opentdb.com/api.php?amount=${AMOUNT}&category=${CATEGORY}&difficulty=${DIFFICULTY}&type=multiple`;
    const TEST_URL =
      'https://opentdb.com/api.php?amount=2&category=9&difficulty=easy&type=multiple';

    fetch(TEST_URL)
			.then((res) => res.json())
			// .then((data) => console.log(data))
			.then((data) => {
				const quizDataRaw = data.results.map((item) => {
					// const answer = item.correct_answer;
					// const incAnswers = item.incorrect_answers;
					// const allAnswers = incAnswers.concat(answer);
					const allAnswers = [item.correct_answer, ...item.incorrect_answers];

					return {
						question: he.decode(item.question),
						//the answes array is used as props for the createAnswerData function
						answers: sort(createAnswerData(allAnswers)),
						id: nanoid(),
						key: nanoid(),
					};
				});

				setQuizData(quizDataRaw);
			});
	};

	const createAnswerData = (answers) => {
		const answerDataRaw = answers.map((answer, index) => {
			return {
				answer: answer,
				//line 28 we put the correct answer first. This will run before they are sorted so index 0 is correct_answer
				isCorrect: index === 0 ? true : false,
				isSelected: false,
				id: nanoid(),
				key: nanoid(),
			};
		});
		return answerDataRaw;
	};
  
	const quizDataMap = quizData.map((item) => {
		return (
			<>
				<QuestionElement question={item.question} key={nanoid()} />
				<div>
					{item.answers?.map((answer) => {
						return (
							<AnswerElement
								answer={answer.answer}
								isCorrect={answer.isCorrect}
								isSelected={answer.isSelected}
								key={answer.id}
								answerId={answer.id}
								questionId={item.id}
							/>
						);
					})}
				</div>
			</>
		);
	});


  return <>{quizDataMap}</>;
};
