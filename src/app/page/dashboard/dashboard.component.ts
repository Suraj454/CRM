import { Component } from '@angular/core';
import { StatsComponent } from "../../components/stats/stats.component";
import { RecentDealsComponent } from '../../components/recent-deals/recent-deals.component';

@Component({
  selector: 'app-dashboard',
  imports: [StatsComponent,RecentDealsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
