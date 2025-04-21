
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // Define sidebar items with Font Awesome class names
  sidebarItems = [
    {
      name: 'Dashboard',
      icon: 'fas fa-tachometer-alt',  // Font Awesome icon class
      link : '/dashboard'
    },
    {
      name: 'Leads',
      icon: 'fas fa-users',  // Font Awesome icon class
      link: '/leads'
    },
    {
      name: 'Deals',
      icon: 'fas fa-handshake',  // Font Awesome icon class
      link: '/deals'
    },
    {
      name: 'Clients',
      icon: 'fas fa-briefcase',  // Font Awesome icon class
      link: '/clients'
    },
    {
      name: 'Analytics',
      icon: 'fas fa-chart-line',  // Font Awesome icon class
      link: '/analytics'
    },
    {
      name: 'Log Out',
      icon: 'fas fa-sign-out-alt',  // Font Awesome icon class
      link: '/logout'
    }
  ];
}
