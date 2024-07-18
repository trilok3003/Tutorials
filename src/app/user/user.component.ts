import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() occupation = '';
  @Output() incrementCountEvent = new EventEmitter<number>();
  count = 0;
  onClick() {
    this.count++;
    this.incrementCountEvent.emit(this.count);
}
}
