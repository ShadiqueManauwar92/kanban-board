export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  assignee: string;
  createdAt: Date;
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}
