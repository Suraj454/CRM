import { Component } from '@angular/core';
import { AdminChartsComponent } from '../../components/admin-charts/admin-charts.component';
import { AdminStatsCardsComponent } from '../../components/admin-stats-cards/admin-stats-cards.component';

@Component({
  selector: 'app-dashboard',
  imports: [AdminChartsComponent,AdminStatsCardsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
