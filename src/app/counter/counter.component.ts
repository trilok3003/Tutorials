import { Component, EventEmitter, Input, Output, Type } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input() val: number = 0;
  @Input() name: string = '';
  @Output() counterChange = new EventEmitter<number>();
  inc() {
    this.counterChange.emit(this.val++);
  }
  dec() {
    this.val = this.val > 0 ? this.val - 1 : 0;
    this.counterChange.emit(this.val);
  }
}
