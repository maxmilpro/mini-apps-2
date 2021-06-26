import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sayHello, sayGoodbye } from './minesweeperSlice';

const Minesweeper = () => {
  const greeting = useSelector((state) => state.minesweeper.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>This is the Greeting: {greeting}</div>
      <button onClick={() => dispatch(sayHello())}>Say Hello</button>
      <button onClick={() => dispatch(sayGoodbye())}>Say Goodbye</button>
    </div>
  )
}

export default Minesweeper;
