import { Component ,OnInit,ViewChild,ElementRef} from '@angular/core';
import { SalesLeadsService } from '../../../services/salesLeads/sales-leads.service';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-deal-charts',
  imports: [CommonModule],
  templateUrl: './deal-charts.component.html',
  styleUrl: './deal-charts.component.css'
})
export class DealChartsComponent implements OnInit {


  @ViewChild('leadStatusChart') leadStatusChart!: ElementRef<HTMLCanvasElement>;

  constructor(private salesLeadsService: SalesLeadsService) {}

  ngOnInit(): void {
    this.createLeadStatusChart();
  }
  private createLeadStatusChart(): void {
    forkJoin({
      qualifiedLeads: this.salesLeadsService.getQualifiedLeads(),
      negotiations: this.salesLeadsService.getNegotiations(),
      wonDeals: this.salesLeadsService.getWonDeals()
    }).subscribe(({  qualifiedLeads, negotiations, wonDeals  }) => {
      const qualifiedLeadCount = qualifiedLeads.filter(lead => lead.leadStatus === 'NEW_LEAD').length;
      const proposedLeadCount = negotiations.filter(lead => lead.dealStatus === 'PROPOSED').length;
      const lostLeadCount = negotiations.filter(lead => lead.dealStatus === 'LOST').length;
      const wonLeadCount = wonDeals.length;
  
      const ctx = this.leadStatusChart.nativeElement.getContext('2d');
  
      new Chart(ctx!, {
        type: 'pie',
        data: {
          labels: ['New', 'Qualified', 'Proposed', 'Lost', 'Won'],
          datasets: [{
            data: [ qualifiedLeadCount, proposedLeadCount, lostLeadCount, wonLeadCount],
            backgroundColor: [
              '#3B82F6', // Blue-500
              '#FACC15', // Yellow-400
              '#10B981', // Emerald-500
              '#EF4444', // Red-500
              '#8B5CF6'  // Violet-500
            ],
            borderColor: '#ffffff',
            borderWidth: 2,
            hoverOffset: 10
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: 20
          },
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: '#1F2937', // Gray-800
                font: {
                  size: 14,
                  weight: 'normal'
                },
                usePointStyle: true,
                pointStyle: 'circle',
                padding: 20
              }
            },
            tooltip: {
              backgroundColor: '#F3F4F6', // Gray-100
              titleColor: '#111827',      // Gray-900
              bodyColor: '#374151',       // Gray-700
              borderColor: '#D1D5DB',     // Gray-300
              borderWidth: 1,
              cornerRadius: 6,
              padding: 12,
              titleFont: { weight: 'normal' },
              bodyFont: { size: 13 }
            }
          }
        }
      });
    });
  }



}
