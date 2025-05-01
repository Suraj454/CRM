import { Component,OnInit } from '@angular/core';
import { AdminserviceService } from '../../services/AdminServices/adminservice.service';
import { AdminServices } from './admin-services-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-services',
  imports: [CommonModule],
  templateUrl: './admin-services.component.html',
  styleUrl: './admin-services.component.css'
})
export class AdminServicesComponent  implements OnInit {

    services: AdminServices[] = [];
  
    constructor(private adminServiceService: AdminserviceService) {}
  
    ngOnInit(): void {
      this.adminServiceService.getAllServices().subscribe({
        next: (data) => this.services = data,
        error: (err) => console.error('Error fetching services:', err)
      });
    }

}
