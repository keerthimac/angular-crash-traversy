import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TasksComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
