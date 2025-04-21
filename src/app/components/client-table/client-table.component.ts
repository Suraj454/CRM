// /*import { Component } from '@angular/core';

// @Component({
//   selector: 'app-client-table',
//   imports: [],
//   templateUrl: './client-table.component.html',
//   styleUrl: './client-table.component.css'
// })
// export class ClientTableComponent {

// }*/
// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-client-table',
//   imports: [CommonModule],
//   templateUrl: './client-table.component.html',
//   styleUrl: './client-table.component.css'
// })
// export class ClientTableComponent {
//   // Sample users data
//   users = [
//     { name: 'John Doe', email: 'johndoe@example.com', contact: '1234567890', status: 'Professional', date: new Date('2024-03-01') },
//     { name: 'Jane Smith', email: 'janesmith@example.com', contact: '1234567890', status: 'Rejected', date: new Date('2024-03-02') },
//     { name: 'Alice Johnson', email: 'alicejohnson@example.com', contact: '1234567890', status: 'Applied', date: new Date('2024-03-03') },
//     { name: 'John Doe', email: 'johndoe@example.com', contact: '1234567890', status: 'Professional', date: new Date('2024-03-01') },
//     { name: 'Bob Brown', email: 'bobrown@example.com', status: 'Current', contact: '1234567890', date: new Date('2024-03-04') },
//     { name: 'Jane Smith', email: 'janesmith@example.com', contact: '1234567890', status: 'Rejected', date: new Date('2024-03-02') },
//     { name: 'Bob Brown', email: 'bobrown@example.com', status: 'Current', contact: '1234567890', date: new Date('2024-03-04') },
//     { name: 'John Doe', email: 'johndoe@example.com', contact: '1234567890', status: 'Professional', date: new Date('2024-03-01') },
//     { name: 'Alice Johnson', email: 'alicejohnson@example.com', contact: '1234567890', status: 'Applied', date: new Date('2024-03-03') },
//     { name: 'Jane Smith', email: 'janesmith@example.com', contact: '1234567890', status: 'Rejected', date: new Date('2024-03-02') },
//     { name: 'Alice Johnson', email: 'alicejohnson@example.com', contact: '1234567890', status: 'Applied', date: new Date('2024-03-03') }
//   ];

//   // Get the badge class based on the status
//   getBadgeClass(status: string): string {
//     switch (status) {
//       case 'Professional':
//         return 'bg-green-200 text-green-800';
//       case 'Rejected':
//         return 'bg-red-200 text-red-800';
//       case 'Applied':
//         return 'bg-blue-200 text-blue-800';
//       case 'Current':
//         return 'bg-yellow-200 text-yellow-800';
//       default:
//         return 'bg-gray-200 text-gray-800';
//     }
//   }

//   // Handle edit action
//   editUser(user: any) {
//     console.log('Editing user:', user);
//   }

//   // Handle delete action
//   deleteUser(user: any) {
//     console.log('Deleting user:', user);
//   }

//   // Handle options action
//   showOptions(user: any) {
//     console.log('Showing options for user:', user);
//   }
// }


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataTableComponent } from '../../data-table/data-table.component';


@Component({
  selector: 'app-client-table',
  imports: [CommonModule,DataTableComponent],
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent {
  columns = [
    { field: 'companyName', header: 'Name' },
    { field: 'companyEmail', header: 'Email' },
    { field: 'companyPhone', header: 'Contact' },
    { field: 'companyAddress', header: 'Address' },
    { field: 'companyLocation', header: 'CompanyLocation' },
    { field: 'status', header: 'Status' },
    { field: 'createdAt', header: 'createdAt' },
  ];

  users = [
    { companyName: 'Centelon', companyEmail: 'cenetlon@example.com', companyPhone: '1234567890', companyAddress: 'Bavdhan Pune', companyLocation:'pune' ,status:'Applied',createdAt:new Date('2024-03-02') },
    { companyName: 'accenture', companyEmail: 'accenture@ax.com', companyPhone: '1234567890', companyAddress: 'Hinjawadi phase-2', companyLocation:'pune' ,status:'Current',createdAt:new Date('2024-04-22') },
    // ...more users
  ];

  getBadgeClass(status: string): string {
    switch (status) {
      case 'Professional': return 'bg-green-200 text-green-800';
      case 'Rejected': return 'bg-red-200 text-red-800';
      case 'Applied': return 'bg-blue-200 text-blue-800';
      case 'Current': return 'bg-yellow-200 text-yellow-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  }

  editUser(user: any) {
    console.log('Editing user:', user);
  }

  deleteUser(user: any) {
    console.log('Deleting user:', user);
  }

  showOptions(user: any) {
    console.log('Options for user:', user);
  }
}
