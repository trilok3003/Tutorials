import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { PaginatorComponent } from "./paginator/paginator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaginatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-17';
  users = signal([
    'Paul Atreides',
    'Lady Jessica Atreides',
    'Duke Leto Atreides',
    'Alia Atreides',
    'Gurney Halleck',

    'Duncan Idaho',
    'Thufir Hawat',
    'Wellington Yueh',
    'Vladimir Harkonnen',
    'Feyd-Rautha Harkonnen',

    'Glossu Rabban',
    'Baron Harkonnen',
    'Princess Irulan Corrino',
    'Shaddam IV Corrino',
    'Reverend Mother Gaius Helen Mohiam',

    'Chani Kynes',
    'Liet-Kynes',
    'Stilgar',
    'Piter De Vries',
    'Dr. Liet Kynes',
  ]);
}
