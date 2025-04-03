import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { TableHeaderComponent } from '../../components/table-header/table-header.component';
import { ClientTableComponent } from '../../components/client-table/client-table.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-leads',
  imports: [PageHeaderComponent,TableHeaderComponent,ClientTableComponent,PaginationComponent],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.css'
})
export class LeadsComponent {

}
