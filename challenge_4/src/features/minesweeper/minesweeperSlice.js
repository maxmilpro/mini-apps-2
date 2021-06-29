import { createSlice } from '@reduxjs/toolkit';
import { Board, revealSquare } from './helpers';

export const newBoard = Board(10);

const initialState = {
  board: newBoard,
}

export const minesweeperSlice = createSlice({
  name: 'minesweeper',
  initialState,
  reducers: {
    sayHello: (state) => {
      state.value = 'hello'
    },
    sayGoodbye: (state) => {
      state.value = 'goodbye'
    },
    toggleVisibility: (state, action) => {
      const { y, x } = action.payload;
      state.board[y][x].visible = true;
    },
    findVisibleSquares: (state, action) => {
      const { board, y, x } = action.payload;
      state.board = revealSquare(board, y, x)
    }
  }
});

export const { sayHello, sayGoodbye, toggleVisibility, findVisibleSquares } = minesweeperSlice.actions;

export default minesweeperSlice.reducer;
