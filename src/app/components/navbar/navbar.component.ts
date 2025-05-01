import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: []
})
export class NavbarComponent implements OnInit {

 
  // roleName: string = 'Dashboard';
  // username: string = 'User';

  // ngOnInit(): void {
  //   const role = localStorage.getItem('role')?.toLowerCase();
  //   const storedUsername = localStorage.getItem('username');

  //   if (storedUsername && storedUsername.trim() !== '') {
  //     this.username = storedUsername;
  //   }

  //   switch (role) {
  //     case 'marketing':
  //       this.roleName = 'Marketing';
  //       break;
  //     case 'salesperson':
  //       this.roleName = 'Sales';
  //       break;
  //     case 'admin':
  //       this.roleName = 'Admin';
  //       break;
  //     case 'client':
  //       this.roleName = 'Client';
  //       break;
  //     case 'support':
  //       this.roleName = 'Support';
  //       break;
  //     default:
  //       this.roleName = 'Dashboard';
  //       break;
  //   }
  // }


  roleName: string = 'Dashboard';
  username: string = 'User';

  ngOnInit(): void {
    const role = localStorage.getItem('role')?.toLowerCase();
    const storedUsername = localStorage.getItem('username');

    if (storedUsername && storedUsername.trim() !== '') {
      this.username = storedUsername;
    }

    switch (role) {
      case 'marketing':
        this.roleName = 'Marketing';
        break;
      case 'salesperson':
        this.roleName = 'Sales';
        break;
      case 'admin':
        this.roleName = 'Admin';
        break;
      case 'client':
        this.roleName = 'Client';
        break;
      case 'support':
        this.roleName = 'Support';
        break;
      default:
        this.roleName = 'Dashboard';
        break;
    }
  }
    
  }

