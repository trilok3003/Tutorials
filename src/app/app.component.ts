import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchRxjsComponent } from "./search-rxjs/search-rxjs.component";
import { SearchSignalComponent } from "./search-signal/search-signal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchRxjsComponent, SearchSignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17';
}
