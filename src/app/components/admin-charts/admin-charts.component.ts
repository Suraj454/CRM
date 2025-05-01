import { Component,OnInit,AfterViewInit,ViewChild,ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { LeadservicesService } from '../../services/leadServices/leadservices.service';
 import { SalesLeadsService } from '../../services/salesLeads/sales-leads.service';
 import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-admin-charts',
  imports: [CommonModule],
  templateUrl: './admin-charts.component.html',
  styleUrl: './admin-charts.component.css'
})
export class AdminChartsComponent implements OnInit{
  @ViewChild('leadStatusChart') leadStatusChart!: ElementRef<HTMLCanvasElement>;

  constructor(
        private leadService: LeadservicesService,
    
    private salesLeadsService: SalesLeadsService
  ) {}

  ngOnInit(): void {
    this.createLeadStatusChart();
  }
  private createLeadStatusChart(): void {
    forkJoin({
      allLeads: this.leadService.getLeads(),
      negotiations: this.salesLeadsService.getNegotiations(),
      wonDeals: this.salesLeadsService.getWonDeals()
    }).subscribe(({ allLeads, negotiations, wonDeals }) => {
      const newLeadCount = allLeads.filter(lead => lead.leadStatus === 'NEW_LEAD').length;
      const qualifiedLeadCount = allLeads.filter(lead => lead.leadStatus === 'QUALIFIED').length;
      const proposedLeadCount = negotiations.filter(lead => lead.dealStatus === 'PROPOSED').length;
      const lostLeadCount = negotiations.filter(lead => lead.dealStatus === 'LOST').length;
      const wonLeadCount = wonDeals.length;
  
      const ctx = this.leadStatusChart.nativeElement.getContext('2d');
  
      new Chart(ctx!, {
        type: 'pie',
        data: {
          labels: ['New', 'Qualified', 'Proposed', 'Lost', 'Won'],
          datasets: [{
            data: [newLeadCount, qualifiedLeadCount, proposedLeadCount, lostLeadCount, wonLeadCount],
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
