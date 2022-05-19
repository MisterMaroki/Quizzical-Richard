import React, { useState } from "react";
import { StartPage } from "./components/StartPage";
import { QuizPage } from "./components/QuizPage";

export const App = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [quizSettings, setQuizSettings] = useState({
    amount: "",
    category: "",
    difficulty: "",
  });

  const handleStart = () => {
    setHasStarted((prevHasStarted) => !prevHasStarted);
    // Only setHasStarted if all settings have been set
  };

  const handleSelect = (e) => {
    setQuizSettings((prevQuizSettings) => {
      return { ...prevQuizSettings, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      {hasStarted ? (
        <QuizPage />
      ) : (
        <StartPage handleStart={handleStart} handleSelect={handleSelect} />
      )}
    </>
  );
};
