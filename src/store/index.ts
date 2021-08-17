import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; 

import errorHandler from '../middlewares/error-management';
import logger from '../middlewares/logger';

import tasksReducer from './TodoSlice';
import categoriesReducer from './CategorySlice';

const rootReducer = {
  tasks: tasksReducer,
  categories: categoriesReducer,
};

export type RootState = typeof rootReducer;

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
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});


export default store;