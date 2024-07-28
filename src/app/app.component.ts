import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemComponent } from "./item/item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17';
  step1Complete = signal(false);
  step2Complete =  signal(false);
  step3Complete = signal(false);
}
