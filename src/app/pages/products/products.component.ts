import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { Product } from '../../models/product.type';
import { CurrencyPipe } from '@angular/common';
import {CardModule} from "@progress/kendo-angular-layout";
import { toSignal } from '@angular/core/rxjs-interop';

import { IndicatorsModule } from '@progress/kendo-angular-indicators';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CardModule, 
    CurrencyPipe,
    IndicatorsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  http = inject(HttpClient);
  products = toSignal(this.http.get<Product[]>('https://fakestoreapi.com/products'));
  private $searchFilter = signal<string>('');
  filterProducts = computed(() => {
   return this.products()?.filter((p) => p.title.toLowerCase().includes(this.$searchFilter()))
  });
  favorites = signal<Product[]>([]);
  constructor() {
    effect(() => {
      if (this.favorites().length >= 3) {
        document.body.classList.add('red');
      }
      else{
        document.body.classList.remove('red');
      }
    })
  }
  updateFilter(filter: string) {
    const filterValue = filter.length > 3 ? filter : '';
    this.$searchFilter.set(filterValue);
  }
  clearFavorites(): void {
   this.favorites.set([])
  }
  addFavorite(product: Product) {
   this.favorites.update((p) => [...p, product]);
  }
}
