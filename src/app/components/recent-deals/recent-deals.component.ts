
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-deals',
  imports :[CommonModule],
  templateUrl: './recent-deals.component.html',
  styleUrls: ['./recent-deals.component.css'],
})
export class RecentDealsComponent {
  deals = [
    {
      name: 'Tech Solutions Pro',
      service: 'Software Integration',
      amount: 45000,
      status: 'Closing Soon',
      statusColor: 'text-green-500',
      color: 'bg-blue-500',
    },
    {
      name: 'Global Dynamics',
      service: 'Consulting Services',
      amount: 32000,
      status: 'In Progress',
      statusColor: 'text-orange-500',
      color: 'bg-purple-500',
    },
    {
      name: 'Innovate Corp',
      service: 'Product Development',
      amount: 28500,
      status: 'New Deal',
      statusColor: 'text-blue-500',
      color: 'bg-green-500',
    },
  ];

  getBgColor(textColor: string) {
    const colors: { [key: string]: string } = {
      'text-green-500': '#34D399', // Green-500
      'text-orange-500': '#FB923C', // Orange-500
      'text-blue-500': '#3B82F6', // Blue-500
    };
    return colors[textColor] || '#E5E7EB'; // Default gray background
  }
}
