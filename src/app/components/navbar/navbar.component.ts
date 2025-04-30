import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: []
})
export class NavbarComponent implements OnInit {

  roleName: string = 'Dashboard';
  username: string = 'User';


  ngOnInit(): void {
    const role = localStorage.getItem('role')?.toLowerCase();
    const storedUsername = localStorage.getItem('username');

    if (storedUsername) {
      this.username = storedUsername;
    }


    if (role === 'marketing') {
      this.roleName = 'Marketing';
    } else if (role === 'salesperson') {
      this.roleName = 'Sales';
    } else if (role === 'admin') {
      this.roleName = 'Admin';
    } else if (role === 'client') {
      this.roleName = 'Client';
    } else if (role === 'support') {
      this.roleName = 'Support';
    } else {
      this.roleName = 'Dashboard';
    }

}

    
  }

