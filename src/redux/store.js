import { configureStore } from '@reduxjs/toolkit';
import cardSlice from './CardSlice/cardSlice';

export const store = configureStore({
  reducer: {
    card: cardSlice,
  },
});
