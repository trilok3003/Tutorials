import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   private API = 'https://fakestoreapi.com/products';
   private http = inject(HttpClient);
   public products$ = this.http.get<any[]>(this.API);
  constructor() { }
}
