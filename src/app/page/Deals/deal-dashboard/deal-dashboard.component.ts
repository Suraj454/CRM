import { Component } from '@angular/core';
import { DealCardsComponent } from '../../../components/DealsComponent/deal-cards/deal-cards.component';
import { DealChartsComponent } from '../../../components/DealsComponent/deal-charts/deal-charts.component';


@Component({
  selector: 'app-deal-dashboard',
  imports: [DealCardsComponent,DealChartsComponent],
  templateUrl: './deal-dashboard.component.html',
  styleUrl: './deal-dashboard.component.css'
})
export class DealDashboardComponent {

}
