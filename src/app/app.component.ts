import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { products } from './products';

interface GroupeByCategory {
  category: string;
  products: any;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-17';
  products = products;
  categories: GroupeByCategory[] = [];
  total = 0.0;
  /**
   * Sorting
   */
  public sortProductsDesc(): void {
    this.products = this.products.sort((a, b) => a.price - b.price);
  }

  public sortProductsAsc() {
    this.products = this.products.sort((a, b) => b.price - a.price);
  }
  /**
   * Filtering Data
   * @param nameInput
   */
  filterBy(nameInput: HTMLInputElement) {
    if (nameInput.value) {
      this.products = this.products.filter(
        (p) => p.name.toLowerCase() === nameInput.value.toLowerCase()
      );
    }
  }
  /**
   * Grouping Data
   */
  showGroup() {
    const group = this.products.reduce((acc: any, cur) => {
      let key = cur.category;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(cur);
      return acc;
    }, {});
    this.categories = Object.keys(group).map((key) => ({
      category: key,
      products: group[key],
    }));
  }
  /**
   * Aggregating Data
   */
  showTotal() {
    this.total = this.products.reduce((acc, curr) => acc + curr.price, 0);
  }
}
