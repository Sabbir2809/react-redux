import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  // 1.  State
  name: 'counter',
  initialState: { count: 0 },

  // 3. reducer function(action)
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByValue: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
