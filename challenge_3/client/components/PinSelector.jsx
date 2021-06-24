import React from 'react';

const PinSelector = ({ rolls, setRolls }) => {
  return (
    <div>
      {
        [...new Array(10)].map((element, index) => {
          return <div key={index + 1} onClick={(e) => {setRolls([...rolls, Number(e.target.textContent)])}}>{index + 1}</div>
        })
      }
    </div>
  )
};

export default PinSelector;
