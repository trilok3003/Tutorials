import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input() products: any;
}
