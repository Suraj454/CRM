import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-activity',
  imports: [CommonModule],
  templateUrl: './recent-activity.component.html',
  styleUrl: './recent-activity.component.css'
})
export class RecentActivityComponent {
  recentActivities = [
    { title: 'Lead 1 converted to Qualified', time: '2 hours ago' },
    { title: 'Lead 2 added with source "Google Ads"', time: '4 hours ago' },
    { title: 'Lead 3 marked as "Lost"', time: '1 day ago' },
    { title: 'Lead 4 marked as "Won"', time: '2 days ago' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
