import React from 'react';
import Row from './Row';
import styles from '../Minesweeper.module.css';

const Board = ({ board }) => {
  return (
    <div className={styles.board}>
      {board.map((row, y) => <Row key={y} row={row} y={y}/>)}
    </div>
  )
};

export default Board;
