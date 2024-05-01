import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from '../Tasks';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiUrl: string = 'http://localhost:5000/tasks';

  constructor() {}

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
