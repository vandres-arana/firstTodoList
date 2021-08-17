import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; 

import errorHandler from '../middlewares/error-management';
import logger from '../middlewares/logger';

import tasksReducer from './TodoSlice';
import categoriesReducer from './CategorySlice';

const middlewares = [
  logger,
  errorHandler,
  thunk,
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    categories: categoriesReducer,
  },
  middleware: middlewares,
})


export type RootState = ReturnType<typeof store.getState>

export default store;