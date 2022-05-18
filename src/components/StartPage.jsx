import React from "react";

export const StartPage = (props) => {
  return (
    <>
      <h1>Quizzical</h1>

      <br />

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

      <br />

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

      <br />

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

      <br />

      <button onClick={props.handleStart}>Start</button>
    </>
  );
};
