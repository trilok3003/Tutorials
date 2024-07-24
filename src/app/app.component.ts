import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-17';
  selectedTeam = '';
  selectedTeam2 = '';
  selectedTeam3 = '';


  @ViewChild('teams2') teams!: ElementRef;
  onSelected(value: string): void {
    this.selectedTeam = value;
  }
  onSelected2():void {
		this.selectedTeam2 = this.teams.nativeElement.value;
	}
}
