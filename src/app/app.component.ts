import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CookieComponent } from "./cookie/cookie.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CookieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17';
}
