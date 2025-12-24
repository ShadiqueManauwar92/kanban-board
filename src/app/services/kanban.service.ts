import { Injectable, signal } from '@angular/core';
import { Column, Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {
  private columnsSignal = signal<Column[]>([
    { id: 'todo', title: 'To Do', tasks: [] },
    { id: 'in-progress', title: 'In Progress', tasks: [] },
    { id: 'review', title: 'Review', tasks: [] },
    { id: 'done', title: 'Done', tasks: [] }
  ]);

  columns = this.columnsSignal.asReadonly();

  addTask(columnId: string, task: Omit<Task, 'id' | 'createdAt'>): void {
    const newTask: Task = {
      ...task,
      id: crypto.randomUUID(),
      createdAt: new Date()
    };

    this.columnsSignal.update(columns =>
      columns.map(col =>
        col.id === columnId
          ? { ...col, tasks: [...col.tasks, newTask] }
          : col
      )
    );
  }

  moveTask(taskId: string, fromColumnId: string, toColumnId: string, toIndex: number): void {
    this.columnsSignal.update(columns => {
      const fromColumn = columns.find(col => col.id === fromColumnId);
      const task = fromColumn?.tasks.find(t => t.id === taskId);

      if (!task) return columns;

      return columns.map(col => {
        if (col.id === fromColumnId) {
          return {
            ...col,
            tasks: col.tasks.filter(t => t.id !== taskId)
          };
        }
        if (col.id === toColumnId) {
          const newTasks = [...col.tasks];
          newTasks.splice(toIndex, 0, task);
          return { ...col, tasks: newTasks };
        }
        return col;
      });
    });
  }

  deleteTask(columnId: string, taskId: string): void {
    this.columnsSignal.update(columns =>
      columns.map(col =>
        col.id === columnId
          ? { ...col, tasks: col.tasks.filter(t => t.id !== taskId) }
          : col
      )
    );
  }

  updateTask(columnId: string, taskId: string, updates: Partial<Task>): void {
    this.columnsSignal.update(columns =>
      columns.map(col =>
        col.id === columnId
          ? {
              ...col,
              tasks: col.tasks.map(task =>
                task.id === taskId ? { ...task, ...updates } : task
              )
            }
          : col
      )
    );
  }
}