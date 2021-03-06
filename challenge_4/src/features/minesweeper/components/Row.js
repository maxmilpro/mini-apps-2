import React from 'react';
import Square from './Square';
import styles from '../Minesweeper.module.css';

const Row = ({ row, y }) => {
  return (
    <div className={styles.row}>
      {row.map((square, x) => <Square key={x} square={square} y={y} x={x}/>)}
    </div>
  )
}

export default Row;
