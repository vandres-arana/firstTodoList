import Task from '../models/task';

// TODO: API
export const createTask = (task: string): Promise<Task> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newTask: Task = {
        id: Date.now(),
        name: task,
        createdAt: (new Date()).toString(),
      };
      
      reject('Any Error!');
      // resolve(newTask)
    }, 1000);
  });
};