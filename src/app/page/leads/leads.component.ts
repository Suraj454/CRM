// import { Component } from '@angular/core';
// import { PageHeaderComponent } from '../../components/page-header/page-header.component';
// import { TableHeaderComponent } from '../../components/table-header/table-header.component';
// import { ClientTableComponent } from '../../components/client-table/client-table.component';
// import { PaginationComponent } from '../../components/pagination/pagination.component';

// @Component({
//   selector: 'app-leads',
//   imports: [PageHeaderComponent,TableHeaderComponent,ClientTableComponent,PaginationComponent],
//   templateUrl: './leads.component.html',
//   styleUrl: './leads.component.css'
// })
// export class LeadsComponent {

// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { TableHeaderComponent } from '../../components/table-header/table-header.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { DataTableComponent } from '../../data-table/data-table.component';


@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [CommonModule, DataTableComponent,PageHeaderComponent,TableHeaderComponent,PaginationComponent,FormsModule],
  templateUrl: './leads.component.html',
   styleUrl: './leads.component.css'
})

export class LeadsComponent {
  columns = [
    { field: 'name', header: 'Lead Name' },
    { field: 'companyname', header: 'Company Name' },
    { field: 'phone', header: 'Phone' },
    { field: 'email', header: 'Email' },
    { field: 'status', header: 'Lead Status' },
    { field: 'createdDate', header: 'Created Date' }
  ];

  leads = [
    { name: 'Naved', companyname: 'Company A', phone:'12345677', email: 'contact@a.com', status: 'New', createdDate: new Date('2024-01-05') },
    { name: 'Suraj', companyname: 'Company B', phone:'12345677',  email: 'contact@b.com', status: 'Contacted', createdDate: new Date('2024-02-12') },
    { name: 'Naved', companyname: 'Company A', phone:'12345677', email: 'contact@a.com', status: 'New', createdDate: new Date('2024-01-05') },
    { name: 'Suraj', companyname: 'Company B', phone:'12345677',  email: 'contact@b.com', status: 'Contacted', createdDate: new Date('2024-02-12') },
    { name: 'Naved', companyname: 'Company A', phone:'12345677', email: 'contact@a.com', status: 'New', createdDate: new Date('2024-01-05') },
    { name: 'Suraj', companyname: 'Company B', phone:'12345677',  email: 'contact@b.com', status: 'Contacted', createdDate: new Date('2024-02-12') },
    { name: 'Naved', companyname: 'Company A', phone:'12345677', email: 'contact@a.com', status: 'New', createdDate: new Date('2024-01-05') },
    { name: 'Suraj', companyname: 'Company B', phone:'12345677',  email: 'contact@b.com', status: 'Contacted', createdDate: new Date('2024-02-12') },
    // ...more leadsPhone
  ];

  getBadgeClass(status: string): string {
    switch (status) {
      case 'New': return 'bg-blue-200 text-blue-800';
      case 'Contacted': return 'bg-green-200 text-green-800';
      case 'Qualified': return 'bg-purple-200 text-purple-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  }

  editUser(lead: any) {
    console.log('Editing lead:', lead);
  }

  deleteUser(lead: any) {
    console.log('Deleting lead:', lead);
  }

  showOptions(lead: any) {
    console.log('Options for lead:', lead);
  }

}


