import { Component, input } from '@angular/core';
import { Course } from '../models/course.type';

@Component({
  selector: 'app-cource-card',
  standalone: true,
  imports: [],
  templateUrl: './cource-card.component.html',
  styleUrl: './cource-card.component.css'
})
export class CourceCardComponent {
  course = input.required<Course>();

}
