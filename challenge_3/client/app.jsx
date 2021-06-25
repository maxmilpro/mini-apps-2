import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Scorecard from './components/Scorecard.jsx';
import PinSelector from './components/PinSelector.jsx';

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
    let score = 0;
    const newScores = [];
    for (let i = 0; i < frames.length; i ++) {
      const currentFrame = frames[i];
      const firstRoll = currentFrame[0];
      const secondRoll = currentFrame[1];
      const thirdRoll = currentFrame[2];
      const [firstBonusRoll, secondBonusRoll] = ([frames[i + 1], frames[i + 2]]).flat();
      // debugger;
      if (firstRoll === 10 && currentFrame.length === 1) {
        score += (firstRoll + (firstBonusRoll || 0) + (secondBonusRoll || 0));
      } else if (firstRoll === 10 && currentFrame.length === 3) {
        score += (firstRoll + secondRoll + thirdRoll);
      } else if (firstRoll + secondRoll === 10 && currentFrame.length === 3) {
        score += (firstRoll + secondRoll + thirdRoll);
      } else if (firstRoll + secondRoll === 10) {
        score += (10 + (firstBonusRoll || 0));
      } else {
        score += (firstRoll + secondRoll);
      }
      newScores.push(score);
    }
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

