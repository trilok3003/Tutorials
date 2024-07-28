import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input({ required: true }) step!: number;
  @Input() @HostBinding('class.complete') isComplete = false;
}
