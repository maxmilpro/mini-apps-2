import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleVisibility, findVisibleSquares} from '../minesweeperSlice';
import styles from '../Minesweeper.module.css';

const Square = ({ square, y, x }) => {
  const {value, visible} = square;
  const board = useSelector(state => state.minesweeper.board);
  const dispatch = useDispatch();
  const [flagged, setFlagged] = useState(false);

  let displayText;
  if (visible === false) {
    displayText = '';
  } else if (value === 'X') {
    displayText = 'X';
  } else {
    displayText = value;
  }

  return (
    <div
      className={`${styles.square} ${flagged ? styles.flag : ''} ${visible ? styles.visible : ''}`}
      onClick={(e) => {
          if (value === 'X') {
            dispatch(toggleVisibility({ y, x }))
            alert('Game Over!')
          } else {
            dispatch(findVisibleSquares({ board, y, x }))
          }
        }
      }
      onContextMenu={(e) => {
        e.preventDefault()
        setFlagged(!flagged);
      }}
    >{displayText}</div>
  )
};

export default Square;
