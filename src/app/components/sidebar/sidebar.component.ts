
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
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebarItems: any[] = [];


  constructor(private router: Router) {}

  ngOnInit(): void {
    const role = localStorage.getItem('role')?.toLowerCase(); // Get user role from localStorage

    // Role-based sidebar items with Font Awesome icons
    if (role === 'marketing') {
      this.sidebarItems = [
        { name: 'Dashboard', link: '/lead/dashboard', icon: 'fa fa-sitemap' },
        { name: 'Lead Sources', link: '/leadsource', icon: 'fa fa-sitemap' },
        { name: 'Leads', link: '/leads', icon: 'fa fa-users' },
        { name: 'Reports', link: 'lead/reports', icon: 'fa fa-chart-line' },
        { name: 'Log Out', icon: 'fa fa-sign-out-alt' }
      ];
    }
    else if (role === 'salesperson') {
      this.sidebarItems = [
        { name: 'Leads', link: '/sales/leads', icon: 'fa fa-users' },
        { name: 'Negotiation', link: '/negotiation', icon: 'fa fa-handshake' },
        { name: 'Deals', link: '/deals', icon: 'fa fa-handshake' },
        { name: 'Reports', link: 'deals/reports', icon: 'fa fa-chart-line' },
        { name: 'Log Out', link: '/logout', icon: 'fa fa-sign-out-alt' }
      ];
    }
    else if (role === 'admin') {
      this.sidebarItems = [
        { name: 'Dashboard', link: '/dashboard', icon: 'fa fa-users-cog' },
        { name: 'Leads', link: '/leads', icon: 'fa fa-users' },
        { name: 'Deals', link: '/deals', icon: 'fa fa-handshake' },
        {name: 'client',link:'/clients', icon:'fa fa-users' },
        { name: 'Reports', link: '/admin/reports', icon: 'fa fa-chart-line' },
        { name: 'Log Out', link: '/logout', icon: 'fa fa-sign-out-alt' }
      ];
    }
    else if (role === 'client') {
      this.sidebarItems = [
        {name:'Profile', link: '/client/profile', icon: 'fa fa-sign-out-alt'},
        { name: 'Dashboard', link: '/client/dashboard', icon: 'fa fa-tachometer-alt' },
        {name:'Service', link: '/service', icon: 'fa fa-sign-out-alt'},
        { name: 'Support', link: '/client/support', icon: 'fa fa-life-ring' },
        { name: 'Reports', link: '/client/reports', icon: 'fa fa-chart-line' },
        { name: 'Log Out', link: '/logout', icon: 'fa fa-sign-out-alt' }
      ];
    }
    else if (role === 'support') {
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
    if (item.name === 'Log Out') {
      localStorage.clear();
      this.router.navigate(['/login']);
      console.log("Log out");
      alert("Log ")
    } else if (item.link) {
      this.router.navigate([item.link]);
    }
  }

}
