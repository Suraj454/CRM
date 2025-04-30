import { Component,OnInit } from '@angular/core';
import { LeadsourceService } from '../../../services/leadsourceServices/leadsource.service';
import { LeadservicesService } from '../../../services/leadServices/leadservices.service';
import { Lead } from '../../../page/Leads/leads/lead-interface';
import { LeadSourceInterface } from '../../../page/Leads/lead-source/lead-source-interface';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-leadcards',
  imports: [],
  templateUrl: './leadcards.component.html',
  styleUrl: './leadcards.component.css'
})
export class LeadcardsComponent implements OnInit {
     
  totalLeadSources: number = 0;
  totalNewLeads: number = 0;
  totalQualifiedLeads: number = 0;


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
    });
  }

}
