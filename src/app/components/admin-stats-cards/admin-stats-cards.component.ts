import { Component } from '@angular/core';

@Component({
  selector: 'app-admin--cards',
  imports: [],
  templateUrl: './admin-stats-cards.component.html',
  styleUrl: './admin-stats-cards.component.css'
})
export class AdminStatsCardsComponent {
  totalLeads: number = 0;
  newLeads: number = 0;
  qualifiedLeads: number = 0;
  proposedLeads: number = 0;
  negotiatedLeads: number = 0;
  lostLeads: number = 0;
  wonDeals: number = 0;


  constructor() { }

}
