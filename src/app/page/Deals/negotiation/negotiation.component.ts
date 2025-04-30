
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DealstableheaderComponent } from '../../../components/DealsComponent/dealstableheader/dealstableheader.component';
import { SalesLeadsService } from '../../../services/salesLeads/sales-leads.service';
import { PaginationComponent } from '../../../components/pagination/pagination.component';

@Component({
  selector: 'app-negotiation',
  standalone: true,
  imports: [CommonModule, FormsModule, DealstableheaderComponent,PaginationComponent],
  templateUrl: './negotiation.component.html',
  styleUrl: './negotiation.component.css'
})
export class NegotiationComponent implements OnInit {

  negotiations: any[] = []; // Array to hold the fetched negotiation data
  filteredNegotiations: any[] = [];  // Array to hold the filtered negotiations
  displayedNegotiations: any[] = [];  // Array to hold negotiations displayed on the current page

 // pagination
 
  currentPage: number = 1;  // Track the current page
  itemsPerPage: number = 5; // Number of items per page
  
  
  searchTerm: string = '';  // Variable to bind to the search input


  constructor(private salesLeadsService: SalesLeadsService) {}

  ngOnInit(): void {
    this.fetchNegotiations(); // Fetch negotiations when the component initializes
  }

  fetchNegotiations(): void {
    this.salesLeadsService.getNegotiations().subscribe(data => {
      this.negotiations = data.map(item => ({
        leadName: item.lead.leadsource.leadName,   // Extract only the necessary fields
        serviceName: item.lead.leadsource.crmService.serviceName,
        dealName: item.dealName,
        proposedDate: item.proposedDate,
        proposedValue: item.proposedValue,
        actualValue: item.lead.leadsource.crmService.price || 0,  // Handle null closed value
        closedValue: item.closedValue,
        closedDate: item.closedDate,
        status: item.dealStatus,
        salesLeadId: item.salesLeadId // Assuming the `id` is available in the respons
      }));
      this.filteredNegotiations = this.negotiations;  // Initialize filtered negotiations
      this.updateDisplayedNegotiations();  // Initialize displayed negotiations
      
    });
  }

    // This function will be called when the search term changes
    onSearchTermChange(searchTerm: string): void {
      this.searchTerm = searchTerm;  // Update the search term
      this.filterNegotiations(searchTerm);  // Filter negotiations based on the search term
    }
  

    // Function to filter negotiations based on the search term
    filterNegotiations(searchTerm: string): void {
      const term = searchTerm.toLowerCase().trim();  // Convert search term to lowercase
      if (!term) {
        this.filteredNegotiations = this.negotiations;  // If no search term, show all negotiations
        return;
      }
  
      // Filter negotiations based on the search term
      this.filteredNegotiations = this.negotiations.filter(negotiation =>
        [
          negotiation.leadName,
          negotiation.dealName,
          negotiation.serviceName,
          negotiation.status,
          negotiation.proposedDate,
          negotiation.closedDate
        ]
          .map(field => (field || '').toString().toLowerCase())  // Convert fields to lowercase
          .some(field => field.includes(term))  // Check if any field includes the search term
      );

      this.updateDisplayedNegotiations();  // Update displayed negotiations after filtering

    }


      // Update the negotiations displayed on the current page
  updateDisplayedNegotiations(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedNegotiations = this.filteredNegotiations.slice(startIndex, endIndex);
  }

  // Method to handle page change from the pagination component
  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateDisplayedNegotiations(); // Update displayed negotiations when page changes
  }
  

  getBadgeClass(status: string): string {
    switch (status) {
      case 'PROPOSED':
        return '	bg-yellow-100 text-yellow-800';
      case 'WON':
        return 'bg-green-100 text-green-800';
      case 'Lost':
        return 'bg-red-200 text-red-800';
      default:
        return 'bg-red-100 text-red-800';
    }
  }



  // Negotiation Form Modal logic

  

  showNegotiationModal = false;

  negotiationForm = {
    salesLeadId: 0,
    dealName: '',
    serviceName:'',
    proposedValue: 0,
    closedValue: 0,
    proposedDate: '',
    closedDate: '',
    dealStatus:''
  };
  

  // editNegotiation(negotiation: any): void {
  //   console.log('Edit negotiation:', negotiation);
  //   // Open modal or navigate to edit form
  // }

  // deleteNegotiation(negotiation: any): void {
  //   console.log('Delete negotiation:', negotiation);
  //   // Confirm and delete logic here
  // }

  

  markAsWon(): void {

    console.log('Marked as WON:', this.negotiationForm);

    this.showNegotiationModal = false;
    // Save/update status logic here

    this.negotiationForm.dealStatus = 'WON';
    
    this.salesLeadsService.updateNegotiation(this.negotiationForm.salesLeadId, this.negotiationForm).subscribe({
      next: (response) => {
        console.log('Negotiation status updated successfully:', response);
        this.fetchNegotiations(); // Refresh the list after updating
      },
      error: (error) => {
        console.error('Error updating negotiation status:', error);
      }
    });
  }
  
  markAsLost(): void {
    console.log('Marked as LOST:', this.negotiationForm);
    this.showNegotiationModal = false;

    // Save/update status logic here
    this.negotiationForm.dealStatus = 'LOST';

    this.salesLeadsService.updateNegotiation(this.negotiationForm.salesLeadId, this.negotiationForm).subscribe({
      next: (response) => {
        console.log('Negotiation status updated successfully:', response);
        this.fetchNegotiations(); // Refresh the list after updating
      },
      error: (error) => {
        console.error('Error updating negotiation status:', error);
      }
    });

  }

  

  openNegotiationModal(negotiation: any): void {
    this.negotiationForm = {
      salesLeadId: negotiation.salesLeadId,
      dealName: '' ,
      serviceName:negotiation.serviceName || '',
      proposedValue: negotiation.proposedValue || null,
      closedValue: 0,
      proposedDate: negotiation.proposedDate || '',
      closedDate: '',
      dealStatus: negotiation.dealStatus
    };
    this.showNegotiationModal = true;
  }

  closeNegotiationModal(): void {
    this.showNegotiationModal = false;
  }


}








