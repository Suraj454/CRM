import { Component } from '@angular/core';
// import { LeadsourceService } from '../../../services/leadsourceServices/leadsource.service';
// import { LeadservicesService } from '../../../services/leadServices/leadservices.service';
import { SalesLeadsService } from '../../../services/salesLeads/sales-leads.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-deal-cards',
  imports: [],
  templateUrl: './deal-cards.component.html',
  styleUrl: './deal-cards.component.css'
})
export class DealCardsComponent {


  totalNewLeads: number = 0;
  totalProposedLeads: number = 0;
  totalLostLeads: number = 0;
  totalWonLeads: number = 0;

  constructor(private salesLeadsService: SalesLeadsService) {}

  ngOnInit(): void {
    this.loadSalesDashboardData();
  }

  loadSalesDashboardData(): void {
    forkJoin({
      qualifiedLeads: this.salesLeadsService.getQualifiedLeads(),
      negotiations: this.salesLeadsService.getNegotiations(),
      wonDeals: this.salesLeadsService.getWonDeals()
    }).subscribe(({ qualifiedLeads, negotiations, wonDeals }) => {
      this.totalNewLeads = qualifiedLeads.filter(lead => lead.dealStatus === 'NEW_LEAD').length;
      this.totalProposedLeads = negotiations.filter(lead => lead.dealStatus === 'PROPOSED').length;
      this.totalLostLeads = negotiations.filter(lead => lead.dealStatus === 'LOST').length;
      this.totalWonLeads = wonDeals.length;
    });
  }
}
