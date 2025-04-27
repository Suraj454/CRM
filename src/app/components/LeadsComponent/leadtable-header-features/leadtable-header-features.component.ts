import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-leadtable-header-features',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './leadtable-header-features.component.html',
  styleUrl: './leadtable-header-features.component.css'
})
export class LeadtableHeaderFeaturesComponent {

  @Output() addLeadClicked = new EventEmitter<void>();
  @Output() searchLeads = new EventEmitter<string>(); 

  searchTerm: string = '';

  onAddLeadClick() {
    this.addLeadClicked.emit();
  }

  onSearchChange() {
    this.searchLeads.emit(this.searchTerm);   // <-- Emit search term
  }
}
