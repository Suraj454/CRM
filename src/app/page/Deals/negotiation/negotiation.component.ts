// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-negotiation',
//   imports: [CommonModule],
//   templateUrl: './negotiation.component.html',
//   styleUrl: './negotiation.component.css'
// })
// export class NegotiationComponent {

// }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DealstableheaderComponent } from '../../../components/DealsComponent/dealstableheader/dealstableheader.component';

@Component({
  selector: 'app-negotiation',
  standalone: true,
  imports: [CommonModule, FormsModule,DealstableheaderComponent ],
  templateUrl: './negotiation.component.html',
  styleUrl: './negotiation.component.css'
})
export class NegotiationComponent implements OnInit {

  negotiations = [
    {
      leadId: 201,
      leadName: 'John Doe',
      proposedDate: '2025-04-25',
      proposedValue: 15000,
      actualValue: 14000,
      status: 'IN NEGOTIATION'
    },
    {
      leadId: 202,
      leadName: 'Jane Smith',
      proposedDate: '2025-04-26',
      proposedValue: 20000,
      actualValue: 19000,
      status: 'OFFER ACCEPTED'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  showNegotiationModal = false;

  negotiationForm = {
    dealName: '',
    proposedValue: null,
    closedValue: null,
    proposedDate: '',
    closedDate: ''
  };
  

  getBadgeClass(status: string): string {
    switch (status) {
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
      dealName: negotiation.leadName || '',
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








