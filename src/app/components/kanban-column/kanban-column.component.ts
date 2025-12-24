import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Column } from '../../models/task.model';
import { KanbanService } from '../../services/kanban.service';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-kanban-column',
  standalone: true,
  imports: [CommonModule, DragDropModule, TaskCardComponent],
  templateUrl: './kanban-column.component.html'
})
export class KanbanColumnComponent {
  @Input({ required: true }) column!: Column;
  @Input({ required: true }) connectedTo: string[] = [];
  
  private kanbanService = inject(KanbanService);

  drop(event: CdkDragDrop<any>): void {
    if (event.previousContainer === event.container) {
      const task = this.column.tasks[event.previousIndex];
      const tempTasks = [...this.column.tasks];
      moveItemInArray(tempTasks, event.previousIndex, event.currentIndex);
      
      this.kanbanService.moveTask(
        task.id,
        this.column.id,
        this.column.id,
        event.currentIndex
      );
    } else {
      const task = event.previousContainer.data[event.previousIndex];
      const fromColumnId = event.previousContainer.id;
      
      this.kanbanService.moveTask(
        task.id,
        fromColumnId,
        this.column.id,
        event.currentIndex
      );
    }
  }

  deleteTask(taskId: string): void {
    this.kanbanService.deleteTask(this.column.id, taskId);
  }

  getColumnColor(): string {
    const colors: { [key: string]: string } = {
      'todo': 'border-blue-500',
      'in-progress': 'border-yellow-500',
      'review': 'border-purple-500',
      'done': 'border-green-500'
    };
    return colors[this.column.id] || 'border-gray-500';
  }
}