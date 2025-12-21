import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanService } from './services/kanban.service';
import { KanbanColumnComponent } from './components/kanban-column/kanban-column.component';
import { AddTaskModalComponent } from './components/add-task-modal/add-task-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, KanbanColumnComponent, AddTaskModalComponent],
  templateUrl: './app.html'
})
export class AppComponent {
  private kanbanService = inject(KanbanService);
  
  columns = this.kanbanService.columns;
  showModal = false;

  connectedTo = computed(() => 
    this.columns().map(col => col.id)
  );

  totalTasks = computed(() => 
    this.columns().reduce((sum, col) => sum + col.tasks.length, 0)
  );

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}