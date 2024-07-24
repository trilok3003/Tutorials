import { Component, computed, effect, signal } from '@angular/core';
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
  message = signal<string>('Hello from Signal');
  userName = signal('dany');
  congratsUser = computed(() => 'Thanks ' + this.userName());
  /**
   * Computed Signals:-
   * Computed: A signal that calculates its value or state from other signals, updating reactively.
   */

  constructor() {
    effect(() => {
      if (this.userName().length === 4) {
        console.log('You have a userName');
      }
    });
  }

  set() {
    this.message.set('You got a new message');
  }
  update() {
    this.message.update((p) => `${p} !!😁`);
    console.log(this.message());
  }
}
