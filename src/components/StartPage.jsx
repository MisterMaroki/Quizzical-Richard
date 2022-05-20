import React from "react";
import { StartPageWrapper } from "./StartPage.styled"

export const StartPage = (props) => {
  return (
    <StartPageWrapper>
      <h1>Quizzical</h1>

      <br />

      <div className="settings-container">
        <div>
          <label>Number of questions</label>
          <br />
          <select
            onChange={props.handleSelect}
            value={props.amount}
            name="amount"
          >
            <option>Select</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>

        <div>
          <label>Category</label>
          <br />
          <select
            onChange={props.handleSelect}
            value={props.category}
            name="category"
          >
            <option>Select</option>
            <option value="9">General</option>
            <option value="10">Books</option>
            <option value="27">Animals</option>
          </select>
        </div>

        <div>
          <label>Difficulty</label>
          <br />
          <select
            onChange={props.handleSelect}
            value={props.difficulty}
            name="difficulty"
          >
            <option>Select</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>

      <button onClick={props.handleStart}>Start</button>
    </StartPageWrapper>
  );
};
