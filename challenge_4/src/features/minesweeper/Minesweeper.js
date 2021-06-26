import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sayHello, sayGoodbye } from './minesweeperSlice';
import Board from './components/Board';

const Minesweeper = () => {
  const greeting = useSelector((state) => state.minesweeper.value);
  const board = useSelector((state) => state.minesweeper.board);
  const dispatch = useDispatch();

  return (
    <div>
      <Board board={board}/>
      <div>This is the Greeting: {greeting}</div>
      <button onClick={() => dispatch(sayHello())}>Say Hello</button>
      <button onClick={() => dispatch(sayGoodbye())}>Say Goodbye</button>
    </div>
  )
}

export default Minesweeper;
