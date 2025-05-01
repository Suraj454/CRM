import { Component } from '@angular/core';
import { ClientProfile } from './client-profile-interface';
import { ClientProfileService } from '../../../services/ClientServices/client-profile.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-profile',
  imports: [CommonModule,FormsModule],
  templateUrl: './client-profile.component.html',
  styleUrl: './client-profile.component.css'
})
export class ClientProfileComponent {


  clientId: number = 1; // This would usually come from login or route param
  clientProfileData: ClientProfile | null = null;

  constructor(private clientProfileService: ClientProfileService) {}

  ngOnInit(): void {
    this.loadClientProfile();
  }

  loadClientProfile(): void {
    this.clientProfileService.getClientProfile(this.clientId).subscribe({
      next: (data: ClientProfile) => {
        this.clientProfileData = data;
        console.log('Client profile loaded:', data);
      },
      error: (err) => {
        console.error('Error fetching client profile', err);
      }
    });
  }

}
