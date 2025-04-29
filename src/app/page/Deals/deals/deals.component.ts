
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../../../components/pagination/pagination.component';
import { DealstableheaderComponent } from '../../../components/DealsComponent/dealstableheader/dealstableheader.component';
import { SalesLeadsService } from '../../../services/salesLeads/sales-leads.service';

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [CommonModule,PaginationComponent,DealstableheaderComponent],
  templateUrl: './deals.component.html',
   styleUrl: './deals.component.css'
})

export class DealsComponent {

  deals: any[] = [];

  constructor(private salesLeadsService: SalesLeadsService) {}

  ngOnInit(): void {
    this.fetchWonDeals();
  }

  fetchWonDeals(): void {
    this.salesLeadsService.getWonDeals().subscribe(data => {
      this.deals = data.map(item => ({
        leadName: item.lead.leadsource.leadName,
        dealName: item.dealName,
        serviceName: item.lead.leadsource.crmService.serviceName,
        proposedDate: item.proposedDate,
        closedDate: item.closedDate,
        proposedValue: item.proposedValue,
        actualValue: item.lead.leadsource.crmService.price || 0,
        closedValue: item.closedValue || 0,
        status: item.dealStatus,
        salesLeadId: item.salesLeadId
      }));
    });
  }

  getBadgeClass(status: string): string {
    switch (status) {
      case 'WON':
        return 'bg-green-200 text-green-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  }

  
}

