import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Scorecard from './components/Scorecard.jsx';
import PinSelector from './components/PinSelector.jsx';

const App = () => {
  const [rolls, setRolls] = useState([]);
  const [frames, setFrames] = useState([]);
  const [scores, setScores] = useState([]);
  const maxRolls = 2;
  const maxFrames = 10;

  useEffect(() => {
    if (rolls.length === maxRolls) {
      setFrames([...frames, rolls]);
      setRolls([]);
    }
    if (rolls[0] === 10) {
      setFrames([...frames, rolls]);
      setRolls([]);
    }
  }, [rolls]);

  useEffect(() => {
    let score = 0;
    setScores([]);
    for (let i = 0; i < frames.length; i ++) {
      const currentFrame = frames[i];
      const rollsFromNextTwoFrames = ([frames[i + 1], frames[i + 2]]).flat();
      console.log('current frame: ', currentFrame);
      console.log('1st bonus: ', rollsFromNextTwoFrames[0]);
      console.log('2nd bonus: ', rollsFromNextTwoFrames[1]);
      if (currentFrame[0] === 10) {
        score += (10 + (rollsFromNextTwoFrames[0] || 0) + (rollsFromNextTwoFrames[1] || 0));
        setScores([...scores, score]);
      }
    }
  }, [frames]);

  return (
    <>
      <Scorecard frames={frames}/>
      <PinSelector rolls={rolls} setRolls={setRolls}/>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));

