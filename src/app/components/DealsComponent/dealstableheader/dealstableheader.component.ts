import { CommonModule } from '@angular/common';
import { Component, EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dealstableheader',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dealstableheader.component.html',
  styleUrl: './dealstableheader.component.css'
})
export class DealstableheaderComponent {

  @Output() searchLeads = new EventEmitter<string>(); 

  searchTerm: string = '';
   
  onSearchChange() {
    this.searchLeads.emit(this.searchTerm);   // <-- Emit search term
  }

}
