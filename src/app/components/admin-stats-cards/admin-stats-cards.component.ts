import { Component ,OnInit} from '@angular/core';
import { SalesLeadsService } from '../../services/salesLeads/sales-leads.service';
import { LeadservicesService } from '../../services/leadServices/leadservices.service';
import { LeadsourceService } from '../../services/leadsourceServices/leadsource.service';
import { LeadSourceInterface } from '../../page/Leads/lead-source/lead-source-interface';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-admin--cards',
  imports: [],
  templateUrl: './admin-stats-cards.component.html',
  styleUrl: './admin-stats-cards.component.css'
})
export class AdminStatsCardsComponent implements OnInit  {

  totalLeadSources: number = 0;
  totalNewLeads: number = 0;
  totalQualifiedLeads: number = 0;
  totalProposedLeads: number = 0;
  totalLostLeads: number = 0;
  totalWonLeads: number = 0;

  constructor(
    private leadService: LeadservicesService,
    private salesLeadsService: SalesLeadsService,
    private leadSourceService: LeadsourceService,

  ) {}


  ngOnInit(): void {
    this.loadAdminDashboardData();

  }

  loadAdminDashboardData(): void {
    forkJoin({
      leadSources: this.leadSourceService.getLeadSources(),
      allLeads: this.leadService.getLeads(),
      qualifiedLeads: this.salesLeadsService.getQualifiedLeads(),
      negotiations: this.salesLeadsService.getNegotiations(),
      wonDeals: this.salesLeadsService.getWonDeals()
    }).subscribe(({ leadSources, allLeads, qualifiedLeads, negotiations, wonDeals }) => {
      this.totalLeadSources = allLeads.length;
      //this.totalLeadSources = leadSources.length;
      this.totalNewLeads = allLeads.filter(lead => lead.leadStatus === 'NEW_LEAD').length;
      this.totalQualifiedLeads = allLeads.filter(lead => lead.leadStatus === 'QUALIFIED').length;
      //this.newLeads = allLeads.filter(lead => lead.leadStatus === 'NEW_LEAD').length;
      this.totalProposedLeads = negotiations.filter(lead => lead.dealStatus === 'PROPOSED').length;
      this.totalLostLeads = negotiations.filter(lead => lead.dealStatus === 'LOST').length;
      this.totalWonLeads = wonDeals.length;
    });
  }


}
