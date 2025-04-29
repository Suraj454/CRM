

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

  displayedLeadSources: LeadSourceInterface[] = []; // Lead sources for the current page

    // Pagination variables
    currentPage: number = 1;
    itemsPerPage: number = 5;   
  
  

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
        console.log('Lead sources fetched successfully:', response);
        this.updateDisplayedLeads();  // Update displayed leads when data is fetched
      },
      error: (error) => {
        console.error('Error fetching lead sources:', error);
      }
    });
  }

    // Function to update displayed leads based on current page
    updateDisplayedLeads() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      
      // Slice the leadSources array based on the current page and itemsPerPage
      this.displayedLeadSources = this.leadSources.slice(startIndex, endIndex);
    }
    // This method will be called when the page is changed
    onPageChange(page: number) {
      this.currentPage = page;  // Set current page
      this.updateDisplayedLeads();  // Update the displayed leads based on the page
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
}
