import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-leadtable-header-features',
  imports: [],
  templateUrl: './leadtable-header-features.component.html',
  styleUrl: './leadtable-header-features.component.css'
})
export class LeadtableHeaderFeaturesComponent {

  @Output() addLeadClicked = new EventEmitter<void>();

  onAddLeadClick() {
    this.addLeadClicked.emit();
  }
}
