import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Scorecard from './components/Scorecard.jsx';
import PinSelector from './components/PinSelector.jsx';
import calculateScores from './components/helpers.jsx';

const App = () => {
  const [rolls, setRolls] = useState([]);
  const [frames, setFrames] = useState([]);
  const [scores, setScores] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [maxRolls, setMaxRolls] = useState(2);
  const [maxFrames, setMaxFrames] = useState(10);

  useEffect(() => {
    if (frames.length > 8) {
      setMaxRolls(3);
    }
  }, [rolls]);

  useEffect(() => {
    if (rolls.length === maxRolls) {
      setFrames([...frames, rolls]);
      setRolls([]);
    }
    if (rolls[0] === 10 && maxRolls === 2) {
      setFrames([...frames, rolls]);
      setRolls([]);
    }
  }, [rolls]);

  useEffect(() => {
    const newScores = calculateScores(frames);
    setScores(newScores);
    setTotalScore(newScores[newScores.length - 1]);
  }, [frames]);

  return (
    <>
      <Scorecard frames={frames} scores={scores} totalScore={totalScore}/>
      <PinSelector rolls={rolls} setRolls={setRolls}/>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));

