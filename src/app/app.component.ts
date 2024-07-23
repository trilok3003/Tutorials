import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {NavigationModule} from "@progress/kendo-angular-navigation";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17';
}
