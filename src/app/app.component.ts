import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AttributeDirective } from './attribute.directive';
import { StructuralDirective } from './structural.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AttributeDirective, StructuralDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17';
  condition: boolean = true;
}
