import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from './services/loader.service';
import { DataService } from './services/data.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-17';
  players: any[] = [];
  teams: any[] = [];
  loading$ = this.loader.isLoading$;
  constructor(
    private loader: LoaderService,
    private datsService: DataService
  ) {}
  loadPLayers() {
    this.datsService.getPlayers().subscribe((data) => {
      this.players = data;
    });
  }

  loadTeams() {
    this.datsService.getTeams().subscribe((data) => {
      this.teams = data;
    });
  }
}
