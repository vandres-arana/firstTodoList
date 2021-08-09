import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import DataException from '../exceptions/data-exception';

type Task = {
  id?: number,
  name: string;
  createdAt: number | string;
  completed?: boolean;
}

type InitialStateProps = {
  tasks: Task[];
}

const initialState: InitialStateProps = {
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
    addTask(state, action: PayloadAction<string>) {
      const newTask: Task = {
        id: Date.now(),
        name: action.payload,
        createdAt: (new Date()).toString(),
      };

      // throw new DataException('Error with new Task');
      throw 'Unkown exception';

      state.tasks.push(newTask);
    },
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
})

export const { addTask } = todoSlice.actions;

export default todoSlice.reducer;