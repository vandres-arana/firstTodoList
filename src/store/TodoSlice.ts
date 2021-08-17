import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';

import {RootState} from '.';
import Task from '../models/task';
import {createTask} from './TodoApi';

export const createTaskAsync = createAsyncThunk(
  'tasks/createTask',
  (nameTask: string) => createTask(nameTask),
);

type InitialStateProps = {
  loading: boolean;
  message?: string;
  tasks: Task[];
};

const initialState: InitialStateProps = {
  loading: false,
  message: '',
  tasks: [
    {
      id: 1,
      category: 3,
      name: 'Netflix and Chill',
      createdAt: '7/25/2021 9:16',
    },
    {
      id: 2,
      category: 1,
      name: 'Write Test Casses',
      createdAt: '7/25/2021 8:00',
    },
    {
      id: 3,
      category: 3,
      name: 'Get Wine',
      createdAt: '7/25/2021 16:00',
    },
    {
      id: 4,
      category: 100,
      name: 'Learn Redux',
      createdAt: '8/4/2021 14:00',
    },
  ],
};

const todoSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    markAsCompleted(state, action: PayloadAction<number>) {
      const foundIndex = state.tasks.findIndex(
        (task) => task.id === action.payload,
      );

      state.tasks[foundIndex].completed = true;
    },
    deleteTask(state, action: PayloadAction<number>) {
      const foundIndex = state.tasks.findIndex(
        (task) => task.id === action.payload,
      );

      const updatedTasks = [...state.tasks];
      updatedTasks.splice(foundIndex, 1);

      state.tasks = updatedTasks;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createTaskAsync.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(createTaskAsync.rejected, (state, action: any) => {
      state.loading = false;
      const {error} = action;
      state.message = error.message;
    });

    builder.addCase(
      createTaskAsync.fulfilled,
      (state, action: PayloadAction<Task>) => {
        state.loading = false;
        state.tasks.push(action.payload);
      },
    );
  },
});

export const {markAsCompleted} = todoSlice.actions;

export default todoSlice.reducer;

export const selectPendingTasks = (state: RootState) => {
  const categories = state.categories.data;
  const activeTasks = state.tasks.tasks
    .filter((task) => !task.completed)
    .map((task) => {
      const category = categories.find(({id}) => id === task.category);

      const taskWithCategory: Task & {categoryName: string} = {
        ...task,
        categoryName: category?.name || 'Empty',
      };

      return taskWithCategory;
    });

  return activeTasks;
};

export const selectPending = (state: RootState) => state.tasks.loading;

export const selectMessage = (state: RootState) => state.tasks.message;
