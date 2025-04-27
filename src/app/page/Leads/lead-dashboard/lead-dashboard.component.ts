import { Component } from '@angular/core';
import { LeadcardsComponent } from '../../../components/LeadsComponent/leadcards/leadcards.component';
import { RecentActivityComponent } from '../../../components/LeadsComponent/recent-activity/recent-activity.component';




@Component({
  selector: 'app-lead-dashboard',
  imports: [LeadcardsComponent,RecentActivityComponent],
  templateUrl: './lead-dashboard.component.html',
  styleUrl: './lead-dashboard.component.css'
})
export class LeadDashboardComponent {

}
