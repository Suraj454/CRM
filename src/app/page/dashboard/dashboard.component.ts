import { Component } from '@angular/core';
import { AdminStatsCardsComponent } from '../../components/admin-stats-cards/admin-stats-cards.component';
import { RecentDealsComponent } from '../../components/recent-deals/recent-deals.component';
import { AdminChartsComponent } from '../../components/admin-charts/admin-charts.component';

@Component({
  selector: 'app-dashboard',
  imports: [RecentDealsComponent,AdminStatsCardsComponent,AdminChartsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
