
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalesLeadsService } from '../../../services/salesLeads/sales-leads.service';
import { SalesLeadInterface } from './sales-lead-interface';
import { DealstableheaderComponent } from '../../../components/DealsComponent/dealstableheader/dealstableheader.component';

@Component({
  selector: 'app-salesleads',
  standalone: true,
 imports: [CommonModule,FormsModule,DealstableheaderComponent ],
  templateUrl: './salesleads.component.html',
  styleUrl: './salesleads.component.css'
})
export class SalesleadsComponent implements OnInit {

  qualifiedLeads: SalesLeadInterface[] = [];  // Array to hold qualified leads
    allQualifiedLeads: SalesLeadInterface[] = [];  // Keep a backup of original leads
    searchText: string = '';  

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
        this.allQualifiedLeads = [...response];  // Store original data as backup
        console.log(response) // Store the fetched leads in the qualifiedLeads array
      },
      (error) => {
        console.error('Error fetching qualified leads:', error);
      }
    );
  }

    // Filter leads based on search text
    filterLeads(searchText: string): void {
      // Use the passed search text directly
      const text = searchText.toLowerCase();
      this.qualifiedLeads = this.allQualifiedLeads.filter(lead =>
        lead.lead.leadsource.leadName.toLowerCase().includes(text) ||
        lead.lead.leadsource.leadEmail.toLowerCase().includes(text) ||
        lead.lead.leadsource.contactNo.toLowerCase().includes(text) ||
        lead.lead.leadsource.companyName.toLowerCase().includes(text) ||
        lead.lead.leadsource.companyAdd.toLowerCase().includes(text) ||
        lead.lead.leadsource.sourceType.toLowerCase().includes(text) ||
        lead.lead.leadsource.crmService.serviceName.toLowerCase().includes(text)
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
    // this.emailForm.attachment = null;
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

    this.showEmailModal = false;
  
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
      },
      error: (error) => {
        console.error('Error sending email:', error);
      }
    });
  }
}
