import React, { useState, useEffect } from 'react';
import Row from './Row';
import styles from '../Minesweeper.module.css';
import { checkForWinner } from '../helpers';

const Board = ({ board }) => {
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    setWinner(checkForWinner(board));
    if (winner) {
      alert('You win!');
    }
  }, [board, winner]);

  return (
    <div className={styles.board}>
      {board.map((row, y) => <Row key={y} row={row} y={y}/>)}
    </div>
  )
};

export default Board;
