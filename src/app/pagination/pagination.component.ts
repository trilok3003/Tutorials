import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() currentPage: number;
  @Input() itemsPerPage: number;
  @Input() totalItems: number;
  @Output() paginationChanged: EventEmitter<object> = new EventEmitter();

  pageSizes = [5, 10, 20]
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }
  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }
  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    this.changePagination();
    }
  }

  goToPage(page: string): void {
    const pageNumber = parseInt(page, 10);
    this.changePage(pageNumber);
  }
  changePageSize() {
    this.currentPage = 1;
    this.changePagination();
  }
  changePagination() {
    this.paginationChanged.emit({itemsPerPage: this.itemsPerPage, currentPage: this.currentPage});
  }
}
