
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

  showPreviewRow = false;
  previewLead: Lead = {
    leadName: '',
    leadSourceId: 0,
    sourceType: '',
    description: '',
    crmService: '',
    contactNo: '',
    companyName: '',
    companyAdd: '',
    leadEmail: '',
    leadStatus: ''
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
      next: (data) => this.leads = data,
      error: (err) => console.error('Error loading leads', err)
    });
  }

  // Load all lead sources from the backend
  loadLeadSources(): void {
    this.leadSourceService.getLeadSources().subscribe({
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
  
    this.leadService.addLead(leadId).subscribe({
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
      case 'New': return 'bg-blue-200 text-blue-800';
      case 'Contacted': return 'bg-green-200 text-green-800';
      case 'Qualified': return 'bg-purple-200 text-purple-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  }

  // Get the source name by lead source ID
  getSourceNameById(id: number): string {
    const source = this.leadSources.find(s => s.leadSourceId === id);
    return source ? source.sourceType : 'Unknown';
  }
}
