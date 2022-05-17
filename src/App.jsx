import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { sort } from "./utils/Utils";
import { Start } from "./components/Start";
import { Quiz } from "./components/Quiz";

export const App = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [quizSettings, setQuizSettings] = useState({
    amount: "",
    category: "",
    difficulty: "",
  });
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    const AMOUNT = quizSettings.amount;
    const CATEGORY = quizSettings.category;
    const DIFFICULTY = quizSettings.difficulty;
    const NEW_URL = `https://opentdb.com/api.php?amount=${AMOUNT}&category=${CATEGORY}&difficulty=${DIFFICULTY}&type=multiple`;
    const URL =
      "https://opentdb.com/api.php?amount=2&category=9&difficulty=easy&type=multiple";

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const quizData = data.results.map((item) => {
          const correctAnswer = item.correct_answer;
          const incorrectAnswers = item.incorrect_answers;
          const allAnswers = incorrectAnswers.concat(correctAnswer);

          const answerData = allAnswers.map((answer) => {
            return {
              answer: answer,
              isSelected: false,
              isCorrect: answer === item.correct_answer ? true : false,
              id: nanoid(),
              key: nanoid(),
            };
          });

          return {
            question: item.question, // Decode it!
            answers: sort(answerData),
            id: nanoid(),
            key: nanoid(),
          };
        });

        setQuiz(quizData);
        console.log(quiz);
      });
  }, [hasStarted]);
  // What should be put in the dep. array?

  const start = () => {
    setHasStarted((prevHasStarted) => !prevHasStarted);
  };

  const select = (e) => {
    setQuizSettings((prevQuizSettings) => {
      return { ...prevQuizSettings, [e.target.name]: e.target.value };
    });
  };

  return <>{hasStarted ? <Quiz /> : <Start start={start} select={select} />}</>;
};
