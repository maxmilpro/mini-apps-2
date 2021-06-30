import { configureStore } from '@reduxjs/toolkit';
import minesweeperReducer from '../features/minesweeper/minesweeperSlice';

export const store = configureStore({
  reducer: {
    minesweeper: minesweeperReducer,
  },
});
