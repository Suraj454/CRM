// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-data-table',
//   imports: [],
//   templateUrl: './data-table.component.html',
//   styleUrl: './data-table.component.css'
// })
// export class DataTableComponent {

// }


// import { CommonModule } from '@angular/common';
// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-data-table',
//   imports: [CommonModule],
//   templateUrl: './data-table.component.html',
//   styleUrls: ['./data-table.component.css']
// })
// export class DataTableComponent {
//   @Input() columns: { field: string, header: string }[] = [];
//   @Input() data: any[] = [];
//   @Input() showActions: boolean = true;

//   @Input() getBadgeClass: (value: any) => string = () => '';
//   @Input() onEdit: (row: any) => void = () => {};
//   @Input() onDelete: (row: any) => void = () => {};
//   @Input() onOptions: (row: any) => void = () => {};
// }

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  @Input() columns: { field: string, header: string }[] = [];
  @Input() data: any[] = [];
  @Input() showActions: boolean = true;

  @Input() getBadgeClass: (value: any, field?: string) => string = () => '';
  @Input() onEdit: (row: any) => void = () => {};
  @Input() onDelete: (row: any) => void = () => {};
  @Input() onOptions: (row: any) => void = () => {};

}
