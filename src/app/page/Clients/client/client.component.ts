import { Component } from '@angular/core';
import { PaginationComponent } from '../../../components/pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DealstableheaderComponent } from '../../../components/DealsComponent/dealstableheader/dealstableheader.component';
import { Clientdata } from './clientdata-interface';
import { ClientServicesService } from '../../../services/ClientServices/client-services.service';

@Component({
  selector: 'app-client',
  imports: [DealstableheaderComponent,CommonModule ,FormsModule ,PaginationComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

  clients: Clientdata[] = [];

  constructor(private clientService: ClientServicesService) {}

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe({
      next: (data) => {
        this.clients = data.map(client => ({
          clientId: client.clientId,
          leadName: client.salesLead?.lead?.leadsource?.leadName ?? '',
          leadEmail: client.salesLead?.lead?.leadsource?.leadEmail ?? '',
          contactNo: client.salesLead?.lead?.leadsource?.contactNo ?? '',
          companyName: client.salesLead?.lead?.leadsource?.companyName ?? '',
          companyAdd: client.salesLead?.lead?.leadsource?.companyAdd ?? '',
          serviceName: client.salesLead?.lead?.leadsource?.crmService?.serviceName ?? '',
        }));
      },
      error: (err) => {
        console.error('Error fetching clients:', err);
      }
    });
  }



}
