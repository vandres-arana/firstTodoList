import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '.';
import Task from '../models/task';
import { createTask } from './TodoApi';

export const createTaskAsync = createAsyncThunk('tasks/createTask', (nameTask: string) => createTask(nameTask));

type InitialStateProps = {
  loading: boolean;
  tasks: Task[];
}

const initialState: InitialStateProps = {
  loading: false,
  tasks: [{
    id: 1,
    name: 'Netflix and Chill',
    createdAt: '7/25/2021 9:16',
  }, {
    id: 2,
    name: 'Write Test Casses',
    createdAt: '7/25/2021 8:00',
  }, {
    id: 3,
    name: 'Get Wine',
    createdAt: '7/25/2021 16:00',
  }, {
    id: 4,
    name: 'Learn Redux',
    createdAt: '8/4/2021 14:00',
  }]
};

const todoSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    markAsCompleted(state, action: PayloadAction<number>) {
      const foundIndex = state.tasks
        .findIndex(task => task.id === action.payload);

      state.tasks[foundIndex].completed = true;
    },
    deleteTask(state, action: PayloadAction<Number>) {
      const foundIndex = state.tasks
        .findIndex(task => task.id === action.payload);

      const updatedTasks = [...state.tasks];
      updatedTasks.splice(foundIndex, 1);

      state.tasks = updatedTasks;
    }
  },
  extraReducers: builder => {
    builder.addCase(createTaskAsync.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(createTaskAsync.fulfilled, (state, action: PayloadAction<Task>) => {
      state.loading = false;
      state.tasks.push(action.payload);
    })
  }
})

export const { markAsCompleted } = todoSlice.actions;

export default todoSlice.reducer;

export const selectPendingTasks = (state: RootState) => state.tasks.tasks.filter(task => !task.completed)

export const selectPending = (state: RootState) => state.tasks.loading;