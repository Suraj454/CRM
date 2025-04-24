
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LeadtableHeaderFeaturesComponent } from '../../../components/LeadsComponent/leadtable-header-features/leadtable-header-features.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-salesleads',
  imports: [CommonModule,LeadtableHeaderFeaturesComponent,FormsModule],
  templateUrl: './salesleads.component.html',
  styleUrl: './salesleads.component.css'
})
export class SalesleadsComponent implements OnInit {

  qualifiedLeads = [
    {
      leadId: 101,
      leadName: 'John Doe',
      leadEmail: 'john@example.com',
      contactNo: '1234567890',
      companyName: 'Doe Corp',
      companyAdd: 'New York, NY',
      sourceType: 'LinkedIn',
      crmService: { serviceName: 'CRM Basic' },
      timeDate: '2025-04-24T10:15:30',
      leadStatus: 'QUALIFIED'
    },
    {
      leadId: 102,
      leadName: 'Jane Smith',
      leadEmail: 'jane@smithtech.com',
      contactNo: '0987654321',
      companyName: 'Smith Tech',
      companyAdd: 'San Francisco, CA',
      sourceType: 'Webinar',
      crmService: { serviceName: 'CRM Premium' },
      timeDate: '2025-04-24T12:45:00',
      leadStatus: 'QUALIFIED'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
  
  getBadgeClass(status: string): string {
    switch (status) {
      case 'QUALIFIED': return 'bg-purple-200 text-purple-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  }


  showEmailModal = false;

  emailForm = {
    to: '',
    subject: '',
    body: '',
    proposedValue: '',
    attachment: null as File | null
  };

  // For setting badge classes

  // Modal functions
  openEmailModal(lead: any): void {
    this.emailForm.to = lead.leadEmail || '';
    this.emailForm.subject = '';
    this.emailForm.body = '';
    this.emailForm.attachment = null;
    this.showEmailModal = true;
  }

  discardEmail(): void {
    this.showEmailModal = false;
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.emailForm.attachment = file;
    }
  }

  sendEmail(): void {
    console.log('Sending Email:', this.emailForm);
    // Here you can call your email sending API
    this.showEmailModal = false;
  }
}

