import React from 'react';
import Row from './Row';

const Board = ({ board }) => {
  return (
    <div>
      {board.map((row, y) => <Row key={y} row={row} y={y}/>)}
    </div>
  )
};

export default Board;
