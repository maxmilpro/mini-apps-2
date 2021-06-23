import React from 'react';
import { StyledFrame, Round, Rolls, Roll, RunningScore } from '../styles/Frame.jsx';

const Frame = ({ round }) => {
  return (
    <StyledFrame>
      <Round>Round: {round}</Round>
      <Rolls>
        <Roll>2</Roll>
        <Roll>3</Roll>
      </Rolls>
      <RunningScore>100</RunningScore>
    </StyledFrame>
  )
};

export default Frame;
