import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 100,
}

const todoSLice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter -= action.payload;
    }
  },
})

export const { increment, decrement } = todoSLice.actions;

export default todoSLice.reducer;