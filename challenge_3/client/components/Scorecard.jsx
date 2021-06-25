import React from 'react';
import { Rounds, TotalScore } from '../styles/Scorecard.jsx';
import Frame from './Frame.jsx';

const Scorecard = ({ frames, scores, totalScore }) => {
  return (
    <div>
      <h3>Bowling Scorecard</h3>
      <Rounds>
        {
          frames.map((element, index) => <Frame key={index + 1} round={index + 1} rolls={element} score={scores[index]}/>)
        }
        {
          [...new Array(10 - frames.length)].map(
            (element, index) => <Frame key={index + 1} round={frames.length + index + 1} rolls={['-', '-']} score={'-'}/>
          )
        }
        <TotalScore>Total: {totalScore}</TotalScore>
      </Rounds>
    </div>
  )
};

export default Scorecard;
