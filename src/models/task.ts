type Task = {
  id: number;
  name: string;
  createdAt: number | string;
  completed?: boolean;
  category: number;
  anyProperty?: string;
};

export default Task;
