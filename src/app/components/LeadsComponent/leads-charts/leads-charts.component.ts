import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LeadservicesService } from '../../../services/leadServices/leadservices.service';
import { LeadsourceService } from '../../../services/leadsourceServices/leadsource.service';
import { forkJoin } from 'rxjs';


import Chart from 'chart.js/auto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leads-charts',
    standalone: true,
    imports: [CommonModule],
  templateUrl: './leads-charts.component.html',
  styleUrls: ['./leads-charts.component.css']
})
export class LeadsChartsComponent implements OnInit {
  @ViewChild('leadsSourceChart') leadsSourceChart!: ElementRef;
  @ViewChild('leadStatusChart') leadStatusChart!: ElementRef;
  @ViewChild('leadsTimelineChart') leadsTimelineChart!: ElementRef;
  @ViewChild('conversionRateChart') conversionRateChart!: ElementRef;

  chartReady: boolean = false;  // Declare chartReady property
   

  ngAfterViewInit() {
    this.createLeadsSourceChart();
    this.createLeadStatusChart();
    this.createLeadsTimelineChart();
    this.createConversionRateChart();
  }

     
  constructor(
    private leadSourceService: LeadsourceService,
    private leadService: LeadservicesService
  ) {}


  private createLeadsSourceChart() {
    const ctx = this.leadsSourceChart.nativeElement.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(54, 162, 235, 0.8)');
    gradient.addColorStop(1, 'rgba(54, 162, 235, 0.2)');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Online', 'Referral', 'Event' ,'Social Media',],
        datasets: [{
          label: 'Leads by Source',
          data: [65, 45, 35, 28, 25],
          backgroundColor: gradient,
          borderRadius: 8,
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 2000,
          easing: 'easeInOutQuart'
        }
      }
    });
  }

//   private createLeadStatusChart() {
//     const ctx = this.leadStatusChart.nativeElement.getContext('2d');
//     new Chart(ctx, {
//       type: 'doughnut',
//       data: {
//         labels: ['NEW LEAD', 'QUALIFIED', ],
//         datasets: [{
//           data: [ 15, 10],
//           backgroundColor: [
//             'rgba(54, 162, 235, 0.6)',
//             'rgba(255, 206, 86, 0.6)',
//           ]
//         }]
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false
//       }
//     });
//   }
private createLeadStatusChart(): void {
    this.leadService.getLeads().subscribe((leads) => {
      const newLeadCount = leads.filter(lead => lead.leadStatus === 'NEW_LEAD').length;
      const qualifiedLeadCount = leads.filter(lead => lead.leadStatus === 'QUALIFIED').length;
  
      const ctx = this.leadStatusChart.nativeElement.getContext('2d');
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['NEW LEAD', 'QUALIFIED'],
          datasets: [{
            data: [newLeadCount, qualifiedLeadCount],
            backgroundColor: [
              'rgba(54, 162, 235, 0.6)',   // NEW_LEAD
              'rgba(255, 206, 86, 0.6)',   // QUALIFIED
            ]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });

      this.chartReady = true;  // Set chartReady to true once the chart is created
    });
  }
  

  private createLeadsTimelineChart() {
    const ctx = this.leadsTimelineChart.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'New Leads',
          data: [12, 19, 15, 25, 22, 30, 28],
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.3,
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  private createConversionRateChart() {
    const ctx = this.conversionRateChart.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Converted', 'Remaining'],
        datasets: [{
          data: [72, 28],
          backgroundColor: [
            'rgba(75, 192, 192, 0.8)',
            'rgba(234, 236, 239, 0.8)'
          ],
          borderWidth: 0,
          circumference: 180,
          rotation: 270
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (context: any) => `Conversion Rate: ${context.raw}%`
            }
          }
        },
        animation: {
          duration: 2000,
          easing: 'easeInOutQuart'
        }
      }
    });
  }

  ngOnInit(): void {
      
  }

}
