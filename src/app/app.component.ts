import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderByPipe } from './order-by.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OrderByPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17';
  array = [1, 5, 4, 2, 3];

  constructor() {
  //  const sorted = this.array.sort((a, b) => {
  //     return a - b;
  //   });
  //   const sorted2 = this.array.sort((a, b) => {
  //     return b - a;
  //   });
  }
}
