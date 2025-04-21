
// import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-sidebar',
//   imports: [CommonModule, RouterLink],
//   templateUrl: './sidebar.component.html',
//   styleUrls: ['./sidebar.component.css']
// })
// export class SidebarComponent {
//   // Define sidebar items with Font Awesome class names
//   sidebarItems = [
//     {
//       name: 'Dashboard',
//       icon: 'fas fa-tachometer-alt',  // Font Awesome icon class
//       link : '/dashboard'
//     },
//     {
//       name: 'Leads',
//       icon: 'fas fa-users',  // Font Awesome icon class
//       link: '/leads'
//     },
//     {
//       name: 'Deals',
//       icon: 'fas fa-handshake',  // Font Awesome icon class
//       link: '/deals'
//     },
//     {
//       name: 'Clients',
//       icon: 'fas fa-briefcase',  // Font Awesome icon class
//       link: '/clients'
//     },
//     {
//       name: 'Analytics',
//       icon: 'fas fa-chart-line',  // Font Awesome icon class
//       link: '/analytics'
//     },
//     {
//       name: 'Log Out',
//       icon: 'fas fa-sign-out-alt',  // Font Awesome icon class
//       link: '/logout'
//     }
//   ];
// }

import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebarItems: any[] = [];

  ngOnInit(): void {
    const role = localStorage.getItem('userRole')?.toLowerCase(); // Get user role from localStorage

    // Role-based sidebar items with Font Awesome icons
    if (role === 'marketing') {
      this.sidebarItems = [
        { name: 'Lead Sources', link: '/leadsource', icon: 'fa fa-sitemap' },
        { name: 'Leads', link: '/marketing/leads', icon: 'fa fa-users' },
        { name: 'Add Lead', link: '/marketing/addlead', icon: 'fa fa-user-plus' },
        { name: 'Reports', link: '/marketing/reports', icon: 'fa fa-chart-line' },
        { name: 'Log Out', link: '/logout', icon: 'fa fa-sign-out-alt' }
      ];
    }
    else if (role === 'SALES') {
      this.sidebarItems = [
        { name: 'Dashboard', link: '/sales/dashboard', icon: 'fa fa-tachometer-alt' },
        { name: 'Leads', link: '/sales/leads', icon: 'fa fa-users' },
        { name: 'Deals', link: '/sales/deals', icon: 'fa fa-handshake' },
        { name: 'Clients', link: '/sales/clients', icon: 'fa fa-briefcase' },
        { name: 'Log Out', link: '/logout', icon: 'fa fa-sign-out-alt' }
      ];
    }
    else if (role === 'ADMIN') {
      this.sidebarItems = [
        { name: 'User Management', link: '/admin/users', icon: 'fa fa-users-cog' },
        { name: 'Reports', link: '/admin/reports', icon: 'fa fa-chart-line' },
        { name: 'Log Out', link: '/logout', icon: 'fa fa-sign-out-alt' }
      ];
    }
    else if (role === 'CLIENT') {
      this.sidebarItems = [
        { name: 'Dashboard', link: '/client/dashboard', icon: 'fa fa-tachometer-alt' },
        { name: 'My Profile', link: '/client/profile', icon: 'fa fa-user' },
        { name: 'Support', link: '/client/support', icon: 'fa fa-life-ring' },
        { name: 'Log Out', link: '/logout', icon: 'fa fa-sign-out-alt' }
      ];
    }
    else if (role === 'SUPPORT') {
      this.sidebarItems = [
        { name: 'Dashboard', link: '/support/dashboard', icon: 'fa fa-tachometer-alt' },
        { name: 'Tickets', link: '/support/tickets', icon: 'fa fa-ticket-alt' },
        { name: 'Clients', link: '/support/clients', icon: 'fa fa-users' },
        { name: 'Log Out', link: '/logout', icon: 'fa fa-sign-out-alt' }
      ];
    }
    else {
      // Default case (e.g., Admin or Unknown role)
      this.sidebarItems = [
        { name: 'Dashboard', link: '/dashboard', icon: 'fa fa-tachometer-alt' },
        { name: 'Log Out', link: '/logout', icon: 'fa fa-sign-out-alt' }
      ];
    }
  }

  onItemClick(item: any) {
    console.log(`${item.name} clicked`);
  }
}
