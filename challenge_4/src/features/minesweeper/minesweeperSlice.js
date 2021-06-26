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
    }
  }
});

export const { sayHello, sayGoodbye } = minesweeperSlice.actions;

export default minesweeperSlice.reducer;
