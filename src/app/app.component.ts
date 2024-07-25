import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { COLORS } from './colors';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17';
  colors = COLORS;


  addColor(input: HTMLInputElement): void {
    if (!input.value) {
      return;
    }

    const newColor = { name: input.value, hex: Math.random().toString() };

    this.colors = [...this.colors];
    input.value = '';
  }
  colorTrackBy(index: number, color: any) {
    return color.hex;
  }

}
