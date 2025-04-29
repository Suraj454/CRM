import { Component } from '@angular/core';
import { LeadsourceService } from '../../../services/leadsourceServices/leadsource.service';
import { LeadservicesService } from '../../../services/leadServices/leadservices.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-deal-cards',
  imports: [],
  templateUrl: './deal-cards.component.html',
  styleUrl: './deal-cards.component.css'
})
export class DealCardsComponent {

       
    totalLeadSources: number = 0;
    totalNewLeads: number = 0;
    totalQualifiedLeads: number = 0;
    totalNegotiationLeads: number = 0;
    totalProposedLeads: number = 0;
  
    constructor(
      private leadSourceService: LeadsourceService,
      private leadService: LeadservicesService
    ) {}
  
    ngOnInit() {
      this.loadDashboardData();
    }
    loadDashboardData() {
      forkJoin({
        leadSources: this.leadSourceService.getLeadSources(),
        allLeads: this.leadService.getLeads()
      }).subscribe(({ leadSources, allLeads }) => {
        this.totalLeadSources = leadSources.length;
        this.totalNewLeads = allLeads.filter(lead => lead.leadStatus === 'NEW_LEAD').length;
        this.totalQualifiedLeads = allLeads.filter(lead => lead.leadStatus === 'QUALIFIED').length;
        this.totalProposedLeads = allLeads.filter(lead => lead.leadStatus === 'PROPOSED').length;
      });
    }

}
