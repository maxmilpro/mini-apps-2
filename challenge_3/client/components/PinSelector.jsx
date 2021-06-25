import React from 'react';
import { StyledPinSelector, Pins } from '../styles/PinSelector.jsx'

const PinSelector = ({ rolls, setRolls }) => {
  return (
    <StyledPinSelector>
      {
        [...new Array(11)].map((element, index) => {
          return <Pins key={index} onClick={(e) => {setRolls([...rolls, Number(e.target.textContent)])}}>{index}</Pins>
        })
      }
    </StyledPinSelector>
  )
};

export default PinSelector;
