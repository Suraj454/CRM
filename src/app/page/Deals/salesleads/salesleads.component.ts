
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalesLeadsService } from '../../../services/salesLeads/sales-leads.service';
import { SalesLeadInterface } from './sales-lead-interface';
import { DealstableheaderComponent } from '../../../components/DealsComponent/dealstableheader/dealstableheader.component';
import { PaginationComponent } from '../../../components/pagination/pagination.component';

@Component({
  selector: 'app-salesleads',
  standalone: true,
 imports: [CommonModule,FormsModule,DealstableheaderComponent,PaginationComponent],
  templateUrl: './salesleads.component.html',
  styleUrl: './salesleads.component.css'
})
export class SalesleadsComponent implements OnInit {

   
  qualifiedLeads: SalesLeadInterface[] = [];  // Array to hold qualified leads
    allQualifiedLeads: SalesLeadInterface[] = [];  // Keep a backup of original leads

    searchTerm: string = '';  // The variable to bind to the search input 
    

    currentPage: number = 1;
    itemsPerPage: number = 2;

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

  
  // ✅ Pagination logic
  updatePaginatedLeads(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.qualifiedLeads = this.allQualifiedLeads.slice(startIndex, endIndex);
  }

  // ✅ Triggered when pagination changes
  onPageChanged(newPage: number): void {
    this.currentPage = newPage;
    this.updatePaginatedLeads();
  }

 

  getBadgeClass(status: string): string {
    switch (status) {
      case 'NEW_LEAD': return 'bg-orange-100 text-orange-800';
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

    const now = new Date();
    const proposedDate = now.toISOString();  // or format it as needed

     this.showEmailModal = false;  // Close the modal after sending the email
  
    const emailPayload = {
      recipient: this.emailForm.to,
      subject: this.emailForm.subject,
      msgBody: this.emailForm.body,
      attachment: this.emailForm.attachment ? this.emailForm.attachment.name : '',
      dealValue: parseFloat(this.emailForm.proposedValue) || 0,
      proposedDate: proposedDate  // ✅ Include current timestamp
    };
  
    this.salesLeadsService.sendEmailToLead(this.currentLeadId, emailPayload).subscribe({
      next: (response) => {
        console.log('Email sent successfully:', response);
        console.log('Sending email with payload:', emailPayload);


      },
      error: (error) => {
        console.error('Error sending email:', error);
      }
    });
  }
}
