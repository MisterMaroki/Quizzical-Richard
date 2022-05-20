import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import he from 'he';
import { sort } from '../utils/Utils';
import { QuestionElement } from './QuestionElement';
import { AnswerElement } from './AnswerElement';

export const QuizPage = (props) => {
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
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
          const answer = item.correct_answer;
          const incAnswers = item.incorrect_answers;
          const allAnswers = incAnswers.concat(answer);

          const answerDataRaw = allAnswers.map((answer) => {
            return {
              answer: answer,
              isCorrect: answer === item.correct_answer ? true : false,
              isSelected: false,
              id: nanoid(),
              key: nanoid(),
            };
          });

          return {
            question: he.decode(item.question), // Decode!
            answers: sort(answerDataRaw),
            id: nanoid(),
            key: nanoid(),
          };
        });

        setQuizData(quizDataRaw);
      });
  }, []);
  console.log(quizData);

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
