import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { KanbanService } from '../../services/kanban.service';

@Component({
  selector: 'app-add-task-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-task-modal.component.html'
})
export class AddTaskModalComponent {
  @Output() close = new EventEmitter<void>();
  
  private fb = inject(FormBuilder);
  private kanbanService = inject(KanbanService);

  taskForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', Validators.required],
    priority: ['medium' as 'low' | 'medium' | 'high', Validators.required],
    assignee: ['', Validators.required],
    column: ['todo', Validators.required]
  });

  onSubmit(): void {
    if (this.taskForm.valid) {
      const { column, ...taskData } = this.taskForm.value;
      this.kanbanService.addTask(column!, {
        title: taskData.title!,
        description: taskData.description!,
        priority: taskData.priority!,
        assignee: taskData.assignee!
      });
      this.close.emit();
    }
  }

  onClose(): void {
    this.close.emit();
  }
}