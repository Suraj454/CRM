

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeadsourceService } from '../../../services/leadsourceServices/leadsource.service';
import { LeadSourceInterface } from './lead-source-interface';
import { PaginationComponent } from '../../../components/pagination/pagination.component';

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [CommonModule, FormsModule,PaginationComponent],
  templateUrl: './lead-source.component.html',
  styleUrl: './lead-source.component.css'
})
export class LeadSourceComponent {

  leadSources: LeadSourceInterface[] = [];
  showModal = false;
  isEditMode = false;
  editingLeadId: number | null = null;

  newLeadSource: LeadSourceInterface = {
    sourceType: '',
    crmService: 0,
    leadName: '',
    contactNo: '',
    companyName: '',
    companyAdd: '',
    leadEmail: '',
    leadSourceId:0,
    timeStamp: ''

  };

  constructor(private leadSourceService: LeadsourceService) { }

  ngOnInit() {
    this.fetchLeadSources();
  }

  fetchLeadSources() {
    this.leadSourceService.getLeadSources().subscribe({
      next: (response: LeadSourceInterface[]) => {
        this.leadSources = response;
        this.calculateTotalPages();
    this.updatePaginatedLeadSources();
        console.log('Lead sources fetched successfully:', response);
      },
      error: (error) => {
        console.error('Error fetching lead sources:', error);
      }
    });
  }

  addLeadSource() {
    this.resetForm();
    this.showModal = true;
    this.isEditMode = false;
  }

  closeModal() {
    this.showModal = false;
    this.resetForm();
  }


saveLeadSource() {

  const payload = {
    ...this.newLeadSource,
    crmService: typeof this.newLeadSource.crmService === 'object'
      ? this.newLeadSource.crmService.serviceId
      : this.newLeadSource.crmService
  };


   // 🛑 Check for duplicates before calling API
   const isDuplicate = this.leadSources.some(ls =>
    ls.leadName.trim().toLowerCase() === this.newLeadSource.leadName.trim().toLowerCase() &&
    ls.leadEmail.trim().toLowerCase() === this.newLeadSource.leadEmail.trim().toLowerCase() &&
    (!this.isEditMode || ls.leadSourceId !== this.editingLeadId) // skip match if editing current item
  );

  if (isDuplicate) {
    alert('Lead with same name and email already exists!');
    return;
  }


  if (this.isEditMode && this.editingLeadId !== null) {
    // ✅ Update existing lead
    this.leadSourceService.updateLeadSource(this.editingLeadId, payload).subscribe({
      next: () => {
        console.log('Lead source updated successfully');
        this.fetchLeadSources();
        this.closeModal();
      },
      error: (error) => {
        console.error('Error updating lead source:', error);
      }
    });
  } else {
    // ✅ Create new lead
    this.leadSourceService.createLeadSource(payload).subscribe({
      next: (response) => {
        console.log('Lead source saved successfully:', response);
        this.fetchLeadSources();
        this.closeModal();
      },
      error: (error) => {
        console.error('Error saving lead source:', error);
      }
    });
  }

}


  onEditLead(lead: LeadSourceInterface) {
    this.newLeadSource = { ...lead }; // Clone to avoid reference issues
    this.editingLeadId = lead.leadSourceId!;
    this.isEditMode = true;
    this.showModal = true;
  }

  onDeleteLead(id: number) {
    if (confirm('Are you sure you want to delete this lead source?')) {
      this.leadSourceService.deleteLeadSource(id).subscribe({
        next: () => {
          console.log('Lead source deleted successfully');
          this.fetchLeadSources();
        },
        error: (error) => {
          console.error('Error deleting lead source:', error);
        }
      });
    }
  }

  private resetForm() {
    this.newLeadSource = {
      sourceType: '',
      crmService: 0,
      leadName: '',
      contactNo: '',
      companyName: '',
      companyAdd: '',
      leadEmail: '',
      leadSourceId:0,
      timeStamp: ''
    };
    this.editingLeadId = null;
    this.isEditMode = false;
  }

  // Pagination related
currentPage: number = 1;
itemsPerPage: number = 6; // Show 5 leads per page
totalPages: number = 0;

// New sliced data
paginatedLeadSources: any[] = [];


  // Calculate total pages based on number of leads
calculateTotalPages() {
  this.totalPages = Math.ceil(this.leadSources.length / this.itemsPerPage);
}

// Get current page's leads
updatePaginatedLeadSources() {
  const start = (this.currentPage - 1) * this.itemsPerPage;
  const end = start + this.itemsPerPage;
  this.paginatedLeadSources = this.leadSources.slice(start, end);
}

// When user clicks 'Next'
nextPage() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.updatePaginatedLeadSources();
  }
}

// When user clicks 'Previous'
previousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.updatePaginatedLeadSources();
  }
}

// When user clicks a page number
goToPage(page: number) {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
    this.updatePaginatedLeadSources();
  }
}

}
