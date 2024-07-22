import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GradePipe } from './grade.pipe';
import { GradeDirective } from './grade.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GradePipe, GradeDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-17';
}
