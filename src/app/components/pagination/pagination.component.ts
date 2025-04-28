import { CommonModule } from '@angular/common';
import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  @Input() totalItems: number = 0;       // Total number of items (like leads.length)
  @Input() itemsPerPage: number = 5;      // Items per page
  @Input() currentPage: number = 1;       // Current page number

  @Output() pageChanged = new EventEmitter<number>();   // Emit page change

  get totalPages(): number[] {
    const pageCount = Math.ceil(this.totalItems / this.itemsPerPage);
    return Array(pageCount).fill(0).map((_, index) => index + 1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= Math.ceil(this.totalItems / this.itemsPerPage)) {
      this.pageChanged.emit(page); // Emit the correct page change
    }
  }

  goToPrevious(): void {
    if (this.currentPage > 1) {
      this.pageChanged.emit(this.currentPage - 1);
    }
  }

  goToNext(): void {
    if (this.currentPage < Math.ceil(this.totalItems / this.itemsPerPage)) {
      this.pageChanged.emit(this.currentPage + 1);
    }
  }


}

