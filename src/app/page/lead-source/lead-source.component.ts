// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-lead-source',
//   imports: [],
//   templateUrl: './lead-source.component.html',
//   styleUrl: './lead-source.component.css'
// })
// export class LeadSourceComponent {

// }



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { TableHeaderComponent } from '../../components/table-header/table-header.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { DataTableComponent } from '../../data-table/data-table.component';

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [CommonModule,DataTableComponent ,PageHeaderComponent,TableHeaderComponent,PaginationComponent],
  templateUrl: './lead-source.component.html',
  styleUrl: './lead-source.component.css'
})

export class LeadSourceComponent  {
  columns = [
    { field: 'name', header: 'Source Name' },
    { field: 'type', header: 'Source Type' },
    { field: 'description', header: 'Description' },
    { field: 'service', header: 'Interested Service '},
  ];

  leadSource = [
    { name: 'Naved', type: 'Online', description: "first", service:"Service1", },

    { name: 'Naved', type: 'Social Media', description: "first", service:"Service2",}
  
  
  ];
  getBadgeClass(value: string, field?: string): string {
    if (field === 'type') {
      switch (value) {
        case 'Online': return 'bg-blue-200 text-blue-800';
        case 'Referral': return 'bg-green-200 text-green-800';
        case 'Social Media': return 'bg-purple-200 text-purple-800';
        case 'Other': return 'bg-yellow-200 text-yellow-800';
        default: return 'bg-gray-200 text-gray-800';
      }
    }
  
    if (field === 'service') {
      switch (value) {
        case 'Service1': return 'bg-pink-200 text-pink-800';
        case 'Service2': return 'bg-indigo-200 text-indigo-800';
        case 'Service3': return 'bg-teal-200 text-teal-800';
        case 'Service4': return 'bg-orange-200 text-orange-800';
        default: return 'bg-gray-200 text-gray-800';
      }
    }
  
    return '';
  }
  

  editUser(leadSource: any) {
    console.log('Editing lead:', leadSource);
  }

  deleteUser(leadSource: any) {
    console.log('Deleting lead:', leadSource);
  }

  showOptions(leadSource: any) {
    console.log('Options for lead:', leadSource);
  }


  showModal = false;

addLeadSource() {
  this.showModal = true;
  console.log("add source lead")
}
}


