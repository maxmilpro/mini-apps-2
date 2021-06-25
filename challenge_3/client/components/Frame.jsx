import React from 'react';
import { StyledFrame, Round, Rolls, Roll, RunningScore } from '../styles/Frame.jsx';

const Frame = ({ round, rolls, score }) => {
  return (
    <StyledFrame>
      <Round>Round: {round}</Round>
      <Rolls>
        {
          rolls.map(roll => <Roll>{roll}</Roll>)
        }
      </Rolls>
      <RunningScore>{score}</RunningScore>
    </StyledFrame>
  )
};

export default Frame;
