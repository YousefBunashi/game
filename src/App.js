import React, { useState } from "react";

let randomNumber = Math.round(Math.random() * 10);
let attemps = 0;

function App() {
  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);
  let results = "";

  const onClick = () => {
    // check users guess against randonNumber
    attemps++;
    const userGuess = value;
    if (userGuess == "") return null;
    if (attemps == 3) return <p className="alert alert-success">Game over!</p>;
    if (userGuess == randomNumber)
      return <p className="alert alert-success">Correct!</p>;
    if (userGuess > randomNumber)
      return <p className="alert alert-warning">Too high, guess again</p>;
    if (userGuess < randomNumber)
      return <p className="alert alert-warning">Too low, guess again</p>;
  };

  results = onClick(value);

  return (
    <>
      <h2>Guess The Number!</h2>
      <p className="lead">Guess a number between 1 and 10.</p>
      <input value={value} type="number" onChange={onChange} />
      <button type="submit" onClick={onClick}>
        GUESS
      </button>

      {results}
    </>
  );
}
export default App;
