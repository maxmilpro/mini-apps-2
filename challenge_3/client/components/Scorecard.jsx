import React from 'react';
import { Rounds } from '../styles/Scorecard.jsx';
import Frame from './Frame.jsx';

const Scorecard = () => {
  return (
    <div>
      <h3>Scorecard</h3>
      <Rounds>
        {
          [...new Array(10)].map((element, index) => <Frame key={index} round={index + 1}/>)
        }
      </Rounds>
    </div>
  )
};

export default Scorecard;
