import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { DashboardComponent } from "../../page/dashboard/dashboard.component";
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, SidebarComponent, NavbarComponent,RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

 

}
