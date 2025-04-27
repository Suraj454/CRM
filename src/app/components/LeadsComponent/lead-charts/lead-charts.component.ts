import { Component } from '@angular/core';
import { ChartData,ChartOptions } from 'chart.js';

@Component({
  selector: 'app-lead-charts',
  imports: [],
  templateUrl: './lead-charts.component.html',
  styleUrl: './lead-charts.component.css'
})
export class LeadChartsComponent {

  public donutChartData: ChartData<'doughnut'> = {
    labels: ['New Leads', 'Qualified Leads'],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ['#00C853', '#2196F3'], // Green for new leads, Blue for qualified leads
        hoverBackgroundColor: ['#66BB6A', '#42A5F5'],
      }
    ]
  };

  public donutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  // Bar Chart Data (for lead sources)
  public barChartData: ChartData<'bar'> = {
    labels: ['Organic', 'Paid Ads', 'Social Media', 'Referrals'],
    datasets: [
      {
        data: [120, 75, 60, 45], // Number of leads from each source
        backgroundColor: '#FFEB3B', // Yellow
        hoverBackgroundColor: '#FFEB3B',
      }
    ]
  };

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Lead Sources'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Number of Leads'
        }
      }
    }
  };

}
