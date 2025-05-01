import { Component,OnInit,AfterViewInit,ViewChild,ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-charts',
  imports: [CommonModule],
  templateUrl: './admin-charts.component.html',
  styleUrl: './admin-charts.component.css'
})
export class AdminChartsComponent implements AfterViewInit{

  
  @ViewChild('leadStatusChart') leadStatusChart!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    this.createLeadStatusChart();
  }

  private createLeadStatusChart(): void {
    const newLeadCount = 10;
    const qualifiedLeadCount = 7;
    const proposedLeadCount = 5;
    const lostLeadCount = 3;
    const wonLeadCount = 6;

    const ctx = this.leadStatusChart.nativeElement.getContext('2d');

    if (!ctx) return;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['NEW_LEAD', 'QUALIFIED', 'PROPOSED', 'LOST', 'WON'],
        datasets: [{
          data: [newLeadCount, qualifiedLeadCount, proposedLeadCount, lostLeadCount, wonLeadCount],
          backgroundColor: [
            'rgba(54, 162, 235, 0.6)',   // NEW_LEAD
            'rgba(255, 206, 86, 0.6)',   // QUALIFIED
            'rgba(75, 192, 192, 0.6)',   // PROPOSED
            'rgba(255, 99, 132, 0.6)',   // LOST
            'rgba(153, 102, 255, 0.6)'   // WON
          ],
          borderColor: 'rgba(255, 255, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
}
