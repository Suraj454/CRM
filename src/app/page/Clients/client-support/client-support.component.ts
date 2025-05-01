import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-support',
  imports: [CommonModule,FormsModule],
  templateUrl: './client-support.component.html',
  styleUrl: './client-support.component.css'
})
export class ClientSupportComponent {

  showModal = false;

  // Static form data object
  ticket = {
    ticketId: '',
    subject: '',
    service: '',
    status: '',
    date: ''
  };

  // Static service and status options
  serviceOptions = [
    'Digital Transformation & Automation',
    'Cloud & Infrastructure Services',
    'Custom Software & App Development',
    'Data & Analytics',
    'IT Consulting & Managed Services'
  ];

  statusOptions = ['Open', 'In Progress', 'Resolved', 'Closed'];

  // Show modal
  openModal(): void {
    this.showModal = true;
  }

  // Hide modal
  closeModal(): void {
    this.showModal = false;
    this.resetForm();
  }

  // Handle form submission
  submitTicket(): void {
    if (this.isFormValid()) {
      console.log('Ticket Data:', this.ticket);
      // You can send data to backend here
      this.closeModal();
    } else {
      alert('Please fill out all required fields.');
    }
  }

  // Validate form fields
  isFormValid(): boolean {
    const { ticketId, subject, service, status, date } = this.ticket;
    return !!(ticketId && subject && service && status && date);
  }

  // Reset form to default
  resetForm(): void {
    this.ticket = {
      ticketId: '',
      subject: '',
      service: '',
      status: '',
      date: ''
    };
  }

}
