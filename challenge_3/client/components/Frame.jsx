import React from 'react';
import { StyledFrame, Round, Rolls, Roll, RunningScore } from '../styles/Frame.jsx';

const Frame = ({ round, rolls, score }) => {
  return (
    <StyledFrame>
      <Round>Round: {round}</Round>
      <Rolls>
        <Roll>{rolls[0]}</Roll>
        <Roll>{rolls[1]}</Roll>
      </Rolls>
      <RunningScore>{score}</RunningScore>
    </StyledFrame>
  )
};

export default Frame;
