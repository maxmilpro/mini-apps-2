import React from 'react';

const Square = ({ square, y, x }) => {
  return (
    <div>{square.value} at [{y},{x}]</div>
  )
};

export default Square;
