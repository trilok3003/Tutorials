import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';
import { DataService } from './data.service';
import { DataListComponent } from "./data-list/data-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaginationComponent, DataListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-17';
}
