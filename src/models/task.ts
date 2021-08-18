type Task = {
  id: number;
  name: string;
  createdAt: number | string;
  completed?: boolean;
  category: number;
  date?: string;
};

export default Task;
