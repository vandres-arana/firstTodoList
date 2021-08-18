type Task = {
  id: number;
  name: string;
  createdAt: number | string;
  completed?: boolean;
  category: number;
};

export default Task;
