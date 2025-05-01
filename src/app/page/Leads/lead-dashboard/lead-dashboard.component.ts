import { Component } from '@angular/core';
import { LeadcardsComponent } from '../../../components/LeadsComponent/leadcards/leadcards.component';
import { LeadsChartsComponent } from '../../../components/LeadsComponent/leads-charts/leads-charts.component';
@Component({
  selector: 'app-lead-dashboard',
  imports: [LeadcardsComponent,LeadsChartsComponent],
  standalone: true,
  templateUrl: './lead-dashboard.component.html',
  styleUrl: './lead-dashboard.component.css'
})
export class LeadDashboardComponent {

}
