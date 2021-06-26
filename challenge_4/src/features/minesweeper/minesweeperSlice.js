import { createSlice } from '@reduxjs/toolkit';
import { Board } from './helpers';

const newBoard = Board(10);

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
    }
  }
});

export const { sayHello, sayGoodbye, toggleVisibility } = minesweeperSlice.actions;

export default minesweeperSlice.reducer;
