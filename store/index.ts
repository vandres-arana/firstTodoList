import { configureStore } from '@reduxjs/toolkit';
import errorHandler from '../middlewares/error-management';
import logger from '../middlewares/logger';

import tasksReducer from './TodoSlice';

const middlewares = [
  logger,
  errorHandler,
];

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