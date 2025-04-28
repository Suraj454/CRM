
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DealstableheaderComponent } from '../../../components/DealsComponent/dealstableheader/dealstableheader.component';
import { SalesLeadsService } from '../../../services/salesLeads/sales-leads.service';

@Component({
  selector: 'app-negotiation',
  standalone: true,
  imports: [CommonModule, FormsModule,DealstableheaderComponent ],
  templateUrl: './negotiation.component.html',
  styleUrl: './negotiation.component.css'
})
export class NegotiationComponent implements OnInit {

  negotiations: any[] = []; // Array to hold the fetched negotiation data

  constructor(private salesLeadsService: SalesLeadsService) {}

  ngOnInit(): void {
    this.fetchNegotiations(); // Fetch negotiations when the component initializes
  }

  fetchNegotiations(): void {
    this.salesLeadsService.getNegotiations().subscribe(data => {
      this.negotiations = data.map(item => ({
        leadName: item.lead.leadsource.leadName,   // Extract only the necessary fields
        dealName: item.dealName,
        serviceName: item.lead.leadsource.crmService.serviceName,
        proposedDate: item.proposedDate,
        closeddDate: item.closedDate,
        proposedValue: item.proposedValue,
        actualValue: item.lead.leadsource.crmService.price || 0,  // Handle null closed value
        status: item.lead.leadStatus
      }));
    });
  }

  getBadgeClass(status: string): string {
    switch (status) {
      case 'PROPOSED':
        return 'bg-yellow-200 text-yellow-800';
      case 'IN NEGOTIATION':
        return 'bg-yellow-200 text-yellow-800';
      case 'OFFER ACCEPTED':
        return 'bg-green-200 text-green-800';
      case 'OFFER REJECTED':
        return 'bg-red-200 text-red-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  }



  // Negotiation Form Modal

  showNegotiationModal = false;

  negotiationForm = {
    dealName: '',
    serviceName:'',
    proposedValue: null,
    closedValue: null,
    proposedDate: '',
    closedDate: ''
  };
  

  editNegotiation(negotiation: any): void {
    console.log('Edit negotiation:', negotiation);
    // Open modal or navigate to edit form
  }

  deleteNegotiation(negotiation: any): void {
    console.log('Delete negotiation:', negotiation);
    // Confirm and delete logic here
  }

  

  markAsWon(): void {
    console.log('Marked as WON:', this.negotiationForm);
    this.showNegotiationModal = false;
    // Save/update status logic here
  }
  
  markAsLost(): void {
    console.log('Marked as LOST:', this.negotiationForm);
    this.showNegotiationModal = false;
    // Save/update status logic here
  }

  openNegotiationModal(negotiation: any): void {
    this.negotiationForm = {
      dealName: '' ,
      serviceName:negotiation.serviceName || '',
      proposedValue: negotiation.proposedValue || null,
      closedValue: negotiation.actualValue || null,
      proposedDate: negotiation.proposedDate || '',
      closedDate: ''
    };
    this.showNegotiationModal = true;
  }

  closeNegotiationModal(): void {
    this.showNegotiationModal = false;
  }


}








