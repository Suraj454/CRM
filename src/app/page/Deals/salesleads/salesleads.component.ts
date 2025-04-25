
// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { LeadtableHeaderFeaturesComponent } from '../../../components/LeadsComponent/leadtable-header-features/leadtable-header-features.component';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-salesleads',
//   imports: [CommonModule,LeadtableHeaderFeaturesComponent,FormsModule],
//   templateUrl: './salesleads.component.html',
//   styleUrl: './salesleads.component.css'
// })
// export class SalesleadsComponent implements OnInit {

//   qualifiedLeads = [
//     {
//       leadId: 101,
//       leadName: 'John Doe',
//       leadEmail: 'john@example.com',
//       contactNo: '1234567890',
//       companyName: 'Doe Corp',
//       companyAdd: 'New York, NY',
//       sourceType: 'LinkedIn',
//       crmService: { serviceName: 'CRM Basic' },
//       timeDate: '2025-04-24T10:15:30',
//       leadStatus: 'QUALIFIED'
//     },
//     {
//       leadId: 102,
//       leadName: 'Jane Smith',
//       leadEmail: 'jane@smithtech.com',
//       contactNo: '0987654321',
//       companyName: 'Smith Tech',
//       companyAdd: 'San Francisco, CA',
//       sourceType: 'Webinar',
//       crmService: { serviceName: 'CRM Premium' },
//       timeDate: '2025-04-24T12:45:00',
//       leadStatus: 'QUALIFIED'
//     }
//   ];

//   constructor() {}

//   ngOnInit(): void {}
  
//   getBadgeClass(status: string): string {
//     switch (status) {
//       case 'QUALIFIED': return 'bg-purple-200 text-purple-800';
//       default: return 'bg-gray-200 text-gray-800';
//     }
//   }


//   showEmailModal = false;

//   emailForm = {
//     to: '',
//     subject: '',
//     body: '',
//     proposedValue: '',
//     attachment: null as File | null
//   };


//   openEmailModal(lead: any): void {
//     this.emailForm.to = lead.leadEmail || '';
//     this.emailForm.subject = '';
//     this.emailForm.body = '';
//     this.emailForm.attachment = null;
//     this.showEmailModal = true;
//   }

//   discardEmail(): void {
//     this.showEmailModal = false;
//   }

//   onFileSelected(event: any): void {
//     const file: File = event.target.files[0];
//     if (file) {
//       this.emailForm.attachment = file;
//     }
//   }

//   sendEmail(): void {
//     console.log('Sending Email:', this.emailForm);
    
//     this.showEmailModal = false;
//   }
// }



import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeadtableHeaderFeaturesComponent } from '../../../components/LeadsComponent/leadtable-header-features/leadtable-header-features.component';
import { SalesLeadsService } from '../../../services/salesLeads/sales-leads.service';
import { SalesLeadInterface } from './sales-lead-interface';

@Component({
  selector: 'app-salesleads',
  standalone: true,
 imports: [CommonModule,LeadtableHeaderFeaturesComponent,FormsModule, ],
  templateUrl: './salesleads.component.html',
  styleUrl: './salesleads.component.css'
})
export class SalesleadsComponent implements OnInit {

  qualifiedLeads: SalesLeadInterface[] = [];  // Array to hold qualified leads

  constructor(private salesLeadsService: SalesLeadsService) {}

  ngOnInit(): void {
    // Fetch the leads from the API when the component initializes
    this.getQualifiedLeads();
  }

  // Method to fetch the qualified leads from the service
  getQualifiedLeads(): void {
    this.salesLeadsService.getQualifiedLeads().subscribe(
      (response: SalesLeadInterface[]) => {
        this.qualifiedLeads = response; 
        console.log(response) // Store the fetched leads in the qualifiedLeads array
      },
      (error) => {
        console.error('Error fetching qualified leads:', error);
      }
    );
  }

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

  // Modal functions
  currentLeadId: number | null = null;

  openEmailModal(lead: SalesLeadInterface): void {
    this.emailForm.to = lead.lead.leadsource.leadEmail || '';
    this.emailForm.subject = '';
    this.emailForm.body = '';
    this.emailForm.proposedValue = '';
    this.emailForm.attachment = null;
    this.currentLeadId = lead.salesLeadId;  // Store this ID
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
    if (this.currentLeadId === null) return;
  
    const emailPayload = {
      recipient: this.emailForm.to,
      subject: this.emailForm.subject,
      msgBody: this.emailForm.body,
      attachment: this.emailForm.attachment ? this.emailForm.attachment.name : '',
      dealValue: parseFloat(this.emailForm.proposedValue) || 0
    };
  
    this.salesLeadsService.sendEmailToLead(this.currentLeadId, emailPayload).subscribe({
      next: (response) => {
        console.log('Email sent successfully:', response);
        this.showEmailModal = false;
      },
      error: (error) => {
        console.error('Error sending email:', error);
      }
    });
  }
}
