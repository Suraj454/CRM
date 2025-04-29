
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
  filteredDeals: any[] = []; //searching

  searchTerm: string = '';  // The variable to bind to the search input

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

      this.filteredDeals = this.deals; // initialize filteredDeals
    });
  }

    
  // This function will be called when the search term changes
  onSearchChange(searchTerm: string): void {
    this.searchTerm = searchTerm; // Update the searchTerm
    this.filterDeals(searchTerm);  // Filter deals based on the search term
  }

  filterDeals(searchTerm: string): void {
    const term = searchTerm.toLowerCase().trim();  // Convert search term to lowercase
    if (!term) {
      this.filteredDeals = this.deals;  // If no search term, show all deals
      return;
    }

    // Filter deals based on the search term
    this.filteredDeals = this.deals.filter(deal =>
      [
        deal.leadName,
        deal.dealName,
        deal.serviceName,
        deal.status,
        deal.proposedDate,
        deal.closedDate
      ]
        .map(field => (field || '').toString().toLowerCase())
        .some(field => field.includes(term))
    );
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

