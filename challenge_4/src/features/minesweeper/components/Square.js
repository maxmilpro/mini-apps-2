import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleVisibility } from '../minesweeperSlice';


const Square = ({ square, y, x }) => {
  const dispatch = useDispatch();
  const {value, visible} = square;

  let display;
  if (visible === false) {
    display = 'hidden';
  } else if (value === 'X') {
    display = 'X';
  } else {
    display = value;
  }

  return (
    <div onClick={() => dispatch(toggleVisibility({y, x}))}>{display}</div>
  )
};

export default Square;
