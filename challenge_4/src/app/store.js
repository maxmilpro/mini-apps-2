import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import minesweeperReducer from '../features/minesweeper/minesweeperSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    minesweeper: minesweeperReducer,
  },
});
