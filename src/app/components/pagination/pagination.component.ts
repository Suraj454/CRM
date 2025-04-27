import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  currentPage: number = 1;
  totalPages: number = 1; // <-- ADD THIS LINE

  // Optional: Add pageNumbers array if you want
  pageNumbers: number[] = [];

  ngOnInit() {
    // Example: Set totalPages and generate page numbers
    this.totalPages = 5; // You can later set this dynamically
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
  }
}

