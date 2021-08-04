import { configureStore } from '@reduxjs/toolkit';

import tasksReducer from './TodoSlice';

const middlewares = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: middlewares,
})


export type RootState = ReturnType<typeof store.getState>

export default store;