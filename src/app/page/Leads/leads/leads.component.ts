
//   import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { PaginationComponent } from '../../../components/pagination/pagination.component';
// import { LeadtableHeaderFeaturesComponent } from '../../../components/LeadsComponent/leadtable-header-features/leadtable-header-features.component';
// import { Lead } from './lead-interface';
// import { LeadservicesService } from '../../../services/leadServices/leadservices.service';
// import { LeadSourceInterface } from '../lead-source/lead-source-interface';
// import { LeadsourceService } from '../../../services/leadsourceServices/leadsource.service';



// @Component({
//   selector: 'app-leads',
//   standalone: true,
//   imports: [CommonModule, LeadtableHeaderFeaturesComponent, PaginationComponent, FormsModule,],
//   templateUrl: './leads.component.html',
//   styleUrl: './leads.component.css'
// })
// export class LeadsComponent implements OnInit {

//   leads: Lead[] = [];
//   leadSources: LeadSourceInterface[] = [];

//   showPreviewRow = false;

//   previewLead: Lead = {
//     leadName: '',
//     leadSourceId: 0,
//     sourceType: '',
//     description: '',
//     crmService: '',
//     contactNo: '',
//     companyName: '',
//     companyAdd: '',
//     leadEmail: '',
//     leadStatus: ''
//   };

//   constructor(
//      private leadService: LeadservicesService,
//     private leadSourceService: LeadsourceService
//   ) {}

//   ngOnInit(): void {
//     // this.loadLeads();
//     this.loadLeadSources();
//   }

//   // loadLeads(): void {
//   //   this.leadService.getLeads().subscribe({
//   //     next: (data) => this.leads = data,
//   //     error: (err) => console.error('Error loading leads', err)
//   //   });
//   // }


//   loadLeadSources(): void {
//     this.leadSourceService.getLeadSources().subscribe({
//       next: (data) => this.leadSources = data,
//       error: (err) => console.error('Error loading lead sources', err)
//     });
//   }

//   togglePreviewRow(): void {
//     this.showPreviewRow = !this.showPreviewRow;
//   }



//   addLeadFromSource(source: LeadSourceInterface): void {
//     const newLead: Lead = {
//       leadName: source.leadName,
//       leadSourceId: source.leadSourceId,
//       sourceType: source.sourceType,
//       description: source.description,
//       crmService: source.crmService,
//       contactNo: source.contactNo,
//       companyName: source.companyName,
//       companyAdd: source.companyAdd,
//       leadEmail: source.leadEmail,
//       leadStatus: '',

//     };

//     this.leadService.addLead(newLead).subscribe({
//       next: (addedLead) => {
//         this.leads.push(addedLead);
//         this.showPreviewRow = false;
//       },
//       error: (err) => console.error('Error adding lead from source', err)
//     });
//    }


 
//   // addPreviewLead(): void {
//   //   this.leadService.addLead(this.previewLead).subscribe({
//   //     next: (addedLead) => {
//   //       this.leads.push(addedLead);
//   //       this.resetPreview();
//   //     },
//   //     error: (err) => console.error('Error adding lead', err)
//   //   });
//   // }

//   // resetPreview(): void {
//   //   this.previewLead = {
//   //   leadName: '',
//   //   sourceType: '',
//   //   description: '',
//   //   crmService: '',
//   //   contactNo: '',
//   //   companyName: '',
//   //   companyAdd: '',
//   //   leadEmail: '',
//   //   Status: 'New',
//   //   leadSourceId: 0,
//   //   };
//   //   this.showPreviewRow = false;
//   // }

//   getBadgeClass(status: string): string {
//     switch (status) {
//       case 'New': return 'bg-blue-200 text-blue-800';
//       case 'Contacted': return 'bg-green-200 text-green-800';
//       case 'Qualified': return 'bg-purple-200 text-purple-800';
//       default: return 'bg-gray-200 text-gray-800';
//     }
//   }

//   getSourceNameById(id: number): string {
//     const source = this.leadSources.find(s => s.leadSourceId === id);
//     return source ? source.sourceType : 'Unknown';
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from '../../../components/pagination/pagination.component';
import { LeadtableHeaderFeaturesComponent } from '../../../components/LeadsComponent/leadtable-header-features/leadtable-header-features.component';
import { Lead } from './lead-interface';
import { LeadservicesService } from '../../../services/leadServices/leadservices.service';
import { LeadSourceInterface } from '../lead-source/lead-source-interface';
import { LeadsourceService } from '../../../services/leadsourceServices/leadsource.service';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [CommonModule, LeadtableHeaderFeaturesComponent, PaginationComponent, FormsModule],
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  leads: Lead[] = [];
  leadSources: LeadSourceInterface[] = [];

  timenow:string|any=''
 
  showPreviewRow = false;
  previewLead: Lead = {
    leadId: 0,
    leadName: '',
    leadSourceId: 0,
    sourceType: '',
    crmService: {
      serviceName: ''
    },
    contactNo: '',
    companyName: '',
    companyAdd: '',
    leadEmail: '',
    leadStatus: '',
    timeDate: ''
  };

  constructor(
    private leadService: LeadservicesService,
    private leadSourceService: LeadsourceService
  ) {}

  ngOnInit(): void {
    this.loadLeads();
    this.loadLeadSources();
  }

  // Load all leads from the backend

  loadLeads(): void {
    this.leadService.getLeads().subscribe({
    next: (data) => {
    this.leads = data.map((item: any) => ({
      leadId: item.leadId,
    leadName: item.leadsource.leadName,
    sourceType: item.leadsource.sourceType,
    crmService:{
       serviceName: item.leadsource.crmService.serviceName
    },
    contactNo: item.leadsource.contactNo,
    companyName: item.leadsource.companyName,
    companyAdd: item.leadsource.companyAdd,
    leadEmail: item.leadsource.leadEmail,
    leadStatus: item.leadStatus,
    leadSourceId: item.leadsource.leadSourceId,
    timeDate:item.timeStamp
    }));
    },
    error: (err) => console.error('Error loading leads', err)
    });
    }

  // Load all lead sources from the backend
  loadLeadSources(): void {
    this.leadService.getFilteredLeadSources().subscribe({
      next: (data) => this.leadSources = data,
      error: (err) => console.error('Error loading lead sources', err)
    });
  }

  // Toggle preview row visibility
  togglePreviewRow(): void {
    this.showPreviewRow = !this.showPreviewRow;
  }

  // Add a new lead from a selected lead source
  addLeadFromSource(source: LeadSourceInterface): void {
    const leadId = source.leadSourceId;  // Use the leadSourceId as the leadId
    const timenow = new Date().toISOString();
    console.log('Current time:', timenow);
  
    this.leadService.addLead(leadId,timenow).subscribe({
      next: (addedLead) => {
        this.leads.push(addedLead);  // Add the created lead to the list
        this.showPreviewRow = false; // Hide preview row after adding
      },
      error: (err) => console.error('Error adding lead from source', err)
    });
  }


  // Get the CSS class for a lead's status (for badges)
  getBadgeClass(status: string): string {
    switch (status) {
      case 'NEW_LEAD': return 'bg-blue-200 text-blue-800';
      case 'QUALIFIED': return 'bg-purple-200 text-purple-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  }
  onStatusChange(lead: Lead): void {
    this.leadService.changeStatus(lead.leadId, lead.leadStatus).subscribe({
      next: () => {
        console.log(`Status updated for leadId ${lead.leadId} to ${lead.leadStatus}`);
      },
      error: (err) => console.error('Error updating status', err)
    });
  }

  // Get the source name by lead source ID
  getSourceNameById(id: number): string {
    const source = this.leadSources.find(s => s.leadSourceId === id);
    return source ? source.sourceType : 'Unknown';
  }
}
