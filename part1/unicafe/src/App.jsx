import { useState } from "react";
import Button from "./component/Button";
import Header from "./component/Header";
import Statistics from "./component/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const name = "Statistics";

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  let all;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <br />
      <br />
      {good || neutral || bad ? (
        <table>
          <Header header={name} />

          <Statistics action={good} text="Good" />
          <Statistics action={neutral} text="Neutral" />
          <Statistics action={bad} text="Bad" />
          <Statistics action={good + neutral + bad} text="All" />
          <Statistics
            action={(all = good * 1 + bad * -1 + neutral) / 3}
            text="Average"
          />
          <Statistics action={(good / all) * 1 * 100 + "%"} text="Positive" />
        </table>
      ) : (
        <h2>No Feedback Given</h2>
      )}
    </div>
  );
}

export default App;
