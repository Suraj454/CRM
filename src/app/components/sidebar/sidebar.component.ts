

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
             { name: 'Dashboard', link: '/marketing/dashboard', icon: 'fa fa-tachometer-alt' }, // Dashboard (Performance)
        { name: 'Lead Sources', link: '/leadsource', icon: 'fa fa-bullseye' }, // Lead Sources (Target)
        { name: 'Leads', link: '/leads', icon: 'fa fa-user-plus' }, // Leads (Adding users)
        { name: 'Log Out', icon: 'fa fa-sign-out-alt' } // Log Out
      ];
    }
    else if (role === 'salesperson') {
      this.sidebarItems = [
        { name: 'Dashboard', link: '/sales/dashboard', icon: 'fa fa-tachometer-alt' },
        { name: 'Leads', link: '/sales/leads', icon: 'fa fa-address-book' }, // Leads (Contacts)
        { name: 'Negotiation', link: '/negotiation', icon: 'fa fa-handshake' }, // Negotiation (Deal Handshake)
        { name: 'Deals', link: '/deals', icon: 'fa fa-hand-holding-usd' }, // Deals (Money Deal)
        { name: 'Log Out', link: '/logout', icon: 'fa fa-sign-out-alt' }
      ];
    }
    else if (role === 'admin') {
      this.sidebarItems = [
        { name: 'Dashboard', link: '/dashboard', icon: 'fa fa-tachometer-alt' }, 
        { name: 'Lead Sources', link: '/leadsource', icon: 'fa fa-bullseye' }, 
        { name: 'Leads', link: '/leads', icon: 'fa fa-users' }, 
        { name: 'Deals', link: '/deals', icon: 'fa fa-hand-holding-usd' },
        { name: 'Clients', link: '/clients', icon: 'fa fa-building' }, // Clients (Organization)
        { name: 'Services', link: '/admin/services', icon: 'fa fa-building' },// Services (Settings/Cogs)
        { name: 'Log Out', link: '/logout', icon: 'fa fa-sign-out-alt' }
      ];
    }
    else if (role === 'client') {
      this.sidebarItems = [
        { name: 'Service', link: '/client/service', icon: 'fa fa-cogs' }, // Service (Settings/Cogs)
        { name: 'Support', link: '/client/support', icon: 'fa fa-life-ring' }, // Support (Help Lifesaver)
        { name: 'Profile', link: '/client/profile', icon: 'fa fa-user-circle' }, // Profile (User Circle)
        { name: 'Log Out', link: '/logout', icon: 'fa fa-sign-out-alt' }
      ];
    }
    else if (role === 'support') {
      this.sidebarItems = [
        { name: 'Dashboard', link: '/support/dashboard', icon: 'fa fa-tachometer-alt' },
        { name: 'Tickets', link: '/support/tickets', icon: 'fa fa-ticket-alt' }, // Tickets (Ticket)
        { name: 'Clients', link: '/support/clients', icon: 'fa fa-users' }, // Clients (Users)
        { name: 'Log Out', link: '/logout', icon: 'fa fa-sign-out-alt' }
      ];
    }
    else {
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
    } else if (item.link) {
      this.router.navigate([item.link]);
    }
  }

}
