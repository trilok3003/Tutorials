import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  tasks = [
    { name: 'Task 1', status: 'Pending', id: 1 },
    { name: 'Task 2', status: 'Completed', id: 2},
    { name: 'Task 3', status: 'In Progress', id: 3},
  ];
}
