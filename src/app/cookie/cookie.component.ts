import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-cookie',
  standalone: true,
  imports: [],
  templateUrl: './cookie.component.html',
  styleUrl: './cookie.component.css'
})
export class CookieComponent {
  count = signal(10);
  butter = computed(() => this.count() * 0.1);
  sugar = computed(() => this.count() * 0.2);
  flour = computed(() => this.count() * 0.3);


  update(event: Event) {
     const input = event.target as HTMLInputElement;
     this.count.set(parseInt(input.value));
  }
}
