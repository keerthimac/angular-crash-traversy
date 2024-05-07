import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Tasks';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgStyle,NgClass } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, NgStyle,NgClass],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task:Task) {
    this.onToggleTask.emit(task);
  }
}
