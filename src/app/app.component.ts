import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";
import { UserStatusComponent } from "./user-status/user-status.component";
import { TasksComponent } from "./tasks/tasks.component";
import { WeatherComponent } from "./weather/weather.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomeComponent, UserStatusComponent, TasksComponent, WeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17';


}
