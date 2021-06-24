import React from 'react';
import { Rounds } from '../styles/Scorecard.jsx';
import Frame from './Frame.jsx';

const Scorecard = ( {frames} ) => {
  return (
    <div>
      <h3>Scorecard</h3>
      <Rounds>
        {
          frames.map((element, index) => <Frame key={index + 1} round={index + 1} rolls={element}/>)
        }
      </Rounds>
    </div>
  )
};

export default Scorecard;
