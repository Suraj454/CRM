import { Component } from '@angular/core';
import { TableHeaderComponent } from '../../../components/table-header/table-header.component';
import { ClientTableComponent } from '../../../components/client-table/client-table.component';
import { PaginationComponent } from '../../../components/pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DealstableheaderComponent } from '../../../components/DealsComponent/dealstableheader/dealstableheader.component';


@Component({
  selector: 'app-client',
  imports: [DealstableheaderComponent,CommonModule ,FormsModule ,PaginationComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {


  // Static client data
  staticClients = [
    {
      clientName: 'Client 1',
      clientEmail: 'client1@example.com',
      contactNo: '123-456-7890',
      companyName: 'Company 1',
      companyAdd: '123 Street, City, Country',
      sourceType: 'Web',
      crmService: { serviceName: 'CRM Service 1' },
      timeDate: new Date(),
      status: 'NEW_CLIENT'
    },
    {
      clientName: 'Client 2',
      clientEmail: 'client2@example.com',
      contactNo: '987-654-3210',
      companyName: 'Company 2',
      companyAdd: '456 Avenue, City, Country',
      sourceType: 'Referral',
      crmService: { serviceName: 'CRM Service 2' },
      timeDate: new Date(),
      status: 'ACTIVE'
    },
    {
      clientName: 'Client 3',
      clientEmail: 'client3@example.com',
      contactNo: '111-222-3333',
      companyName: 'Company 3',
      companyAdd: '789 Boulevard, City, Country',
      sourceType: 'Advertisement',
      crmService: { serviceName: 'CRM Service 3' },
      timeDate: new Date(),
      status: 'NEW_CLIENT'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Any initialization logic if needed
  }

  // Get the CSS class for a client's status (for badges)
  getBadgeClass(status: string): string {
    switch (status) {
      case 'NEW_CLIENT': return 'bg-blue-100 text-blue-800';
      case 'ACTIVE': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  }

  // Placeholder for status change logic if needed
  onStatusChange(client: any): void {
    console.log(`Status updated for client ${client.clientName} to ${client.status}`);
  }

}
