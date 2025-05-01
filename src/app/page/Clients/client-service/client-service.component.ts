import { Component ,OnInit} from '@angular/core';
import { ClientService } from './client-service-interface';
import { ClientServicesService } from '../../../services/ClientServices/client-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-service',
  imports: [CommonModule],
  templateUrl: './client-service.component.html',
  styleUrl: './client-service.component.css'
})
export class ClientServiceComponent implements OnInit {

  service!: ClientService;  // Use non-null assertion to prevent TS error

  services: ClientService[] = [];  // Array to hold the service data

  clientId: number = 1; // Replace with dynamic value from authentication or route
  
  constructor(private clientService: ClientServicesService) {}

  ngOnInit(): void {
    this.fetchServices();
  }

  // Fetch services data

  fetchServices(): void {
    this.clientService.getClientServiceById(this.clientId).subscribe(
      (response: ClientService) => {
        this.service = response;
        this.services = [response]; // ✅ FIX: Add to array so *ngFor works
        console.log(this.service);
      },
      error => {
        console.error('Error fetching client service', error);
      }
    );
  }


}