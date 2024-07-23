import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
  {
    path: '',
    // component: HomeComponent,
    loadComponent: async () =>
      (await import('./pages/home/home.component')).HomeComponent,
  },
  {
    path: 'products',
    // component: ProductsComponent,
    loadComponent: async () =>
      (await import('./pages/products/products.component')).ProductsComponent,
  },
];
