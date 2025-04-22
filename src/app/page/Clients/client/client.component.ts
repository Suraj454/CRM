import { Component } from '@angular/core';
import { TableHeaderComponent } from '../../../components/table-header/table-header.component';
import { ClientTableComponent } from '../../../components/client-table/client-table.component';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';
import { PaginationComponent } from '../../../components/pagination/pagination.component';


@Component({
  selector: 'app-client',
  imports: [TableHeaderComponent,ClientTableComponent,PageHeaderComponent,PaginationComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

}
