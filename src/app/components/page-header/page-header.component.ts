/*import { Component } from '@angular/core';

@Component({
  selector: 'app-page-header',
  imports: [],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css'
})
export class PageHeaderComponent {

}*/


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-page-header',
//   imports: [],
//   templateUrl: './page-header.component.html',
//   styleUrl: './page-header.component.css'
// })

// export class PageHeaderComponent {

//   addUser(): void {
//     console.log('Add new user clicked');
  
//   }
// }
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
})
export class PageHeaderComponent {
  @Input() title: string = 'Page';
  @Input() buttonLabel: string = 'Add';

  @Output() addAction = new EventEmitter<void>();

  addItem(): void {
    this.addAction.emit();
  }
}
