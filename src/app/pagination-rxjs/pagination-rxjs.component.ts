import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './pagination-rxjs.component.html',
  styleUrl: './pagination-rxjs.component.css'
})
export class PaginationRxjsComponent {
  totalItems = 100;
  pageSize = 10;
  currentPage = 1; 
  
  items = this.getData(this.currentPage - 1, this.pageSize); 
  
  pageChanged(page: number) {
    this.currentPage = page;
    this.items = this.getData(this.currentPage - 1, this.pageSize);
  }
  getData(currentPage: number, pageSize: number) {
  return 
  }
}
