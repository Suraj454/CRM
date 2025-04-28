import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsConfiguration } from 'ng2-charts';
@Component({
  selector: 'app-lead-charts',
  imports: [BrowserModule],
  templateUrl: './lead-charts.component.html',
  styleUrls: ['./lead-charts.component.css']
})
export class LeadChartsComponent implements OnInit {
  public pieChartType: ChartType = 'pie';
  
  public pieChartData: ChartData<'pie'> = {
    labels: ['New', 'In Progress', 'Converted', 'Lost'],
    datasets: [{
      data: [30, 25, 15, 10],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED']
    }]
  };

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    }
  };

  constructor() { }

  ngOnInit(): void { }
}