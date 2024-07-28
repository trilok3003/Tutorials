import { Component, effect, HostBinding, input, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  step = input.required<number>();
  isComplete = input(false);
  @HostBinding('class.complete') hasCompleteClass = false;
  constructor() {
    effect(() => (this.hasCompleteClass = this.isComplete()));
  }
}
