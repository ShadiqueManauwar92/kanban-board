import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html'
})
export class TaskCardComponent {
  @Input({ required: true }) task!: Task;
  @Output() delete = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();

  getPriorityColor(): string {
    const colors = {
      low: 'bg-green-500',
      medium: 'bg-yellow-500',
      high: 'bg-red-500'
    };
    return colors[this.task.priority];
  }

  onDelete(): void {
    this.delete.emit();
  }

  onEdit(): void {
    this.edit.emit();
  }
}