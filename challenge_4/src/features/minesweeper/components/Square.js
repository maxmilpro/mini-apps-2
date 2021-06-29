import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleVisibility, findVisibleSquares} from '../minesweeperSlice';

const Square = ({ square, y, x }) => {
  const {value, visible} = square;
  const board = useSelector(state => state.minesweeper.board);
  const dispatch = useDispatch();

  let display;
  if (visible === false) {
    display = 'hidden';
  } else if (value === 'X') {
    display = 'X';
  } else {
    display = value;
  }

  return (
    <div onClick={() => {
      if (value === 'X') {
        dispatch(toggleVisibility({ y, x }))
        alert('Game Over!')
      } else {
        dispatch(findVisibleSquares({ board, y, x }))
      }
    }}>{display}</div>
  )
};

export default Square;
