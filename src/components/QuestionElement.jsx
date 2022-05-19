import React from "react";

export const QuestionElement = (props) => {
  return (
    <>
      <h1>{props.question}</h1>
    </>
  );
};

// OLD CODE BELOW

// const [quiz, setQuiz] = useState([]);

// const AMOUNT = props.quizSettings.amount;
// const CATEGORY = props.quizSettings.category;
// const DIFFICULTY = props.quizSettings.difficulty;
// const URL = `https://opentdb.com/api.php?amount=${AMOUNT}&category=${CATEGORY}&difficulty=${DIFFICULTY}&type=multiple`;

// useEffect(() => {
//   fetch(
//     "https://opentdb.com/api.php?amount=2&category=9&difficulty=easy&type=multiple"
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       const quizData = data.results.map((x) => {
//         const answer = x.correct_answer;
//         const wrongAnswers = x.incorrect_answers;
//         const allAnswers = wrongAnswers.concat(answer);
//         const answerData = allAnswers.map((answer) => {
//           return {
//             answer: answer,
//             isSelected: false,
//             isCorrect: answer === x.correct_answer ? true : false,
//             id: nanoid(),
//             key: nanoid(),
//           };
//         });

//         return {
//           question: x.question, // Decode it!
//           answer: sort(answerData),
//           id: nanoid(),
//           key: nanoid(),
//         };
//       });

//       setQuiz(quizData);
//       console.log(quiz);
//     });
// }, [props.setHasStarted]);
// // What should be put in the dep. arr.?

// const allQuizData = quiz.map((x) => {
//   return <QuestionElement question={x.question} answer={x.answer} />;
// });
