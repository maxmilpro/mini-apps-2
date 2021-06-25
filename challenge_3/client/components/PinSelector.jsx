import React from 'react';

const PinSelector = ({ rolls, setRolls }) => {
  return (
    <div>
      {
        [...new Array(11)].map((element, index) => {
          return <div key={index} onClick={(e) => {setRolls([...rolls, Number(e.target.textContent)])}}>{index}</div>
        })
      }
    </div>
  )
};

export default PinSelector;
