import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourceCardComponent } from "./cource-card/cource-card.component";
import { Course } from './models/course.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourceCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17';
  courses : Array<Course> = [
    {
      title: 'Angular 17 soon 18!',
      image: '../../../assets/angular.jpeg',
      rank: 5,
      timeSpan: "2h"
    },
    {
      title: 'Theme Builder!',
      image: '../../../assets/theme-builder.jpeg',
      rank: 5,
      timeSpan: "2h"
    }
  ]
}
