import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { NgFor } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [NgFor, PaginationComponent],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css',
})
export class DataListComponent {
  paginatedData: any[];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dataService
      .getPaginatedData(this.currentPage, this.itemsPerPage)
      .subscribe(
        (data) => {
          this.paginatedData = data.results;
          this.totalItems = 100; //data.info['results'];
        },
        (error) => {
          // Handle error
        }
      );
  }
  paginationChange(event: any) {
    let { currentPage, itemsPerPage } = event;
    this.currentPage = currentPage;
    this.itemsPerPage = itemsPerPage;
    this.fetchData();
    // this.fetchData();
  }
  // goToPreviousPage(): void {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //     this.fetchData();
  //   }
  // }

  // goToNextPage(): void {
  //   if (this.currentPage < this.totalPages) {
  //     this.currentPage++;
  //     this.fetchData();
  //   }
  // }

  // goToPage(page: string): void {
  //   const pageNumber = parseInt(page, 10);
  //   if (
  //     pageNumber &&
  //     pageNumber >= 1 &&
  //     pageNumber <= this.totalPages &&
  //     pageNumber !== this.currentPage
  //   ) {
  //     this.currentPage = pageNumber;
  //     this.fetchData();
  //   }
  // }
  // get pageNumbers(): number[] {
  //   return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  // }

  // get totalPages(): number {
  //   return Math.ceil(this.totalItems / this.itemsPerPage);
  // }
  trackByFn(index: number, item: any): any {
    return item.id; // Replace "id" with the unique identifier of your data item
  }

  private cachedData: any[];
  // Client-side Caching
  fetchDataWithClientSideCaching(): void {
    if (this.cachedData) {
      this.paginatedData = this.cachedData.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.currentPage * this.itemsPerPage
      );
    } else {
      this.dataService
        .getPaginatedData(this.currentPage, this.itemsPerPage)
        .subscribe(
          (data) => {
            this.paginatedData = data.results;
            this.totalItems = data.totalItems;
            this.cachedData = data.results; // Store the fetched data for future use
          },
          (error) => {
            // Handle error
          }
        );
    }
  }
}
// Optimizing Pagination Performance:
// trackBy, Client-side Caching
