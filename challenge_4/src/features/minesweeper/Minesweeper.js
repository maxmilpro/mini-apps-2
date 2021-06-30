import React from 'react';
import { useSelector } from 'react-redux';
import Board from './components/Board';
import styles from './Minesweeper.module.css';

const Minesweeper = () => {
  const board = useSelector((state) => state.minesweeper.board);

  return (
    <div>
      <div className={styles.title}>Minesweeper</div>
      <Board board={board}/>
    </div>
  )
}

export default Minesweeper;
