import { Component } from '@angular/core';
import { AdminStatsCardsComponent } from '../../components/admin-stats-cards/admin-stats-cards.component';
import { RecentDealsComponent } from '../../components/recent-deals/recent-deals.component';

@Component({
  selector: 'app-dashboard',
  imports: [RecentDealsComponent,AdminStatsCardsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
