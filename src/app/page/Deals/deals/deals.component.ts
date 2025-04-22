// import { Component } from '@angular/core';
// import { ClientTableComponent } from '../../components/client-table/client-table.component';

// @Component({
//   selector: 'app-deals',
//   imports: [],
//   templateUrl: './deals.component.html',
//   styleUrl: './deals.component.css'
// })
// export class DealsComponent {

// }



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';
import { TableHeaderComponent } from '../../../components/table-header/table-header.component';

import { PaginationComponent } from '../../../components/pagination/pagination.component';
import { DataTableComponent } from '../../../data-table/data-table.component';

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [CommonModule, DataTableComponent,PageHeaderComponent,TableHeaderComponent,PaginationComponent],
  templateUrl: './deals.component.html',
   styleUrl: './deals.component.css'
})

export class DealsComponent {
  columns = [
    { field: 'name', header: 'Deal Name' },
    { field: 'companyname', header: 'Company Name' },
    { field: 'phone', header: 'Phone' },
    { field: 'dealamount', header: 'Deal Amount' },
    { field: 'status', header: 'Deal Status' },
    { field: 'closeDate', header: 'Close Date' }
  ];

  deals = [
    { name: 'Naved', companyname: 'Company A', phone:'12345677', dealamount: '20,000', status: 'New', closeDate: new Date('2024-01-05') },
    { name: 'Suraj', companyname: 'Company B', phone:'12345677',  dealamount: '50,000', status: 'Contacted', closeDate: new Date('2024-02-12') },
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

  editUser(deals: any) {
    console.log('Editing lead:', deals);
  }

  deleteUser(deals: any) {
    console.log('Deleting lead:', deals);
  }

  showOptions(deals: any) {
    console.log('Options for lead:', deals);
  }
}

