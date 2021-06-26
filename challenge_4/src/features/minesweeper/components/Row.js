import React from 'react';
import Square from './Square';

const Row = ({ row, y }) => {
  return (
    <div style={{display:"flex"}}>
      {row.map((square, x) => <Square key={x} square={square} y={y} x={x}/>)}
    </div>
  )
}

export default Row;
