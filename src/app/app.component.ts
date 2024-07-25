import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17';
  burgers = 0
  pizzas = 0
  totalItems = 0;

  constructor() {
    this.calculateTotalItems()
  }
  burgersChanged(count: number | any){
    this.burgers = count;
    this.calculateTotalItems()
  }
  pizzasChanged(count: number | any){

    this.pizzas = count;
    this.calculateTotalItems()
  }
  calculateTotalItems(){
    this.totalItems = this.burgers + this.pizzas;
  }
}
