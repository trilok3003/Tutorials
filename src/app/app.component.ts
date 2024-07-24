import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-17';
  private storageKey = 'user-background';
  private defaultColor = '#ff00ff';
  userBackgroundColor = null;

  ngOnInit(): void {
    this.loadBackgroundPreferences();
  }

  private getBackgroundColor(): string | any {
    return localStorage.getItem(this.storageKey) || this.defaultColor;
  }
  public saveBackgroundColor(color: string): void {
    localStorage.setItem(this.storageKey, color);
    this.loadBackgroundPreferences();
  }
  public removePreferences(): void {
    localStorage.removeItem(this.storageKey);
    this.loadBackgroundPreferences();
  }

  private loadBackgroundPreferences(): void {
    this.userBackgroundColor = this.getBackgroundColor();
    window.document.body.style.backgroundColor = this.getBackgroundColor();
  }
}
