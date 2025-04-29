import { Component } from '@angular/core';
import { DealCardsComponent } from '../../../components/DealsComponent/deal-cards/deal-cards.component';


@Component({
  selector: 'app-deal-dashboard',
  imports: [DealCardsComponent],
  templateUrl: './deal-dashboard.component.html',
  styleUrl: './deal-dashboard.component.css'
})
export class DealDashboardComponent {

}
