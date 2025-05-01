
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
  allLeads: Lead[] = [];  // Keep a backup of original leads

  displayedLeads: Lead[] = [];  // Leads for the current page
  currentPage: number = 1;      // Current page
  itemsPerPage: number = 8;     // Number of leads per page


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

  // loadLeads(): void {
  //   this.leadService.getLeads().subscribe({
  //   next: (data) => {
  //   this.leads = data.map((item: any) => ({
  //     leadId: item.leadId,
  //   leadName: item.leadsource.leadName,
  //   sourceType: item.leadsource.sourceType,
  //   crmService:{
  //      serviceName: item.leadsource.crmService.serviceName
  //   },
  //   contactNo: item.leadsource.contactNo,
  //   companyName: item.leadsource.companyName,
  //   companyAdd: item.leadsource.companyAdd,
  //   leadEmail: item.leadsource.leadEmail,
  //   leadStatus: item.leadStatus,
  //   leadSourceId: item.leadsource.leadSourceId,
  //   timeDate:item.timeStamp
  //   }));
  //   },
  //   error: (err) => console.error('Error loading leads', err)
  //   });
  //   }

  loadLeads(): void {
    this.leadService.getLeads().subscribe({
      next: (data) => {
        this.allLeads = data.map((item: any) => ({
          leadId: item.leadId,
          leadName: item.leadsource.leadName,
          sourceType: item.leadsource.sourceType,
          crmService: {
            serviceName: item.leadsource.crmService.serviceName
          },
          contactNo: item.leadsource.contactNo,
          companyName: item.leadsource.companyName,
          companyAdd: item.leadsource.companyAdd,
          leadEmail: item.leadsource.leadEmail,
          leadStatus: item.leadStatus,
          leadSourceId: item.leadsource.leadSourceId,
          timeDate: item.timeStamp
        }));
        this.leads = [...this.allLeads];
        this.updateDisplayedLeads();  // Update displayed leads based on current page

      },
      error: (err) => console.error('Error loading leads', err)
    });
  }

  // Update displayed leads based on the current page
  updateDisplayedLeads(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedLeads = this.leads.slice(startIndex, endIndex);
  }

  // This method will be called when the page is changed
  onPageChange(page: number): void {
    this.currentPage = page;  // Set the current page
    this.updateDisplayedLeads();  // Update displayed leads for the new page
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
  // addLeadFromSource(source: LeadSourceInterface): void {
  //   const leadId = source.leadSourceId;  // Use the leadSourceId as the leadId
  //   const timenow = new Date().toISOString();
  //   console.log('Current time:', timenow);
  
  //   this.leadService.addLead(leadId,timenow).subscribe({
  //     next: (addedLead) => {
  //       this.leads.push(addedLead);  // Add the created lead to the list
  //       this.showPreviewRow = false; // Hide preview row after adding
  //     },
  //     error: (err) => console.error('Error adding lead from source', err)
  //   });
  // }

  addLeadFromSource(source: LeadSourceInterface): void {
    const leadSourceId = source.leadSourceId;
    const timenow = new Date().toISOString();
    console.log('Current time:', timenow);
  
    this.leadService.addLead(leadSourceId, timenow).subscribe({
      next: (item: any) => {
        if (!item || !item.leadId) {
          console.warn('Lead not returned from backend. Refetching lead list instead.');
          this.loadLeads(); // fallback: refresh entire list
          this.showPreviewRow = false;
          return;
        }
  
        const newLead: Lead = {
          leadId: item.leadId,
          leadName: item.leadsource?.leadName || '',
          sourceType: item.leadsource?.sourceType || '',
          crmService: {
            serviceName: item.leadsource?.crmService?.serviceName || ''
          },
          contactNo: item.leadsource?.contactNo || '',
          companyName: item.leadsource?.companyName || '',
          companyAdd: item.leadsource?.companyAdd || '',
          leadEmail: item.leadsource?.leadEmail || '',
          leadStatus: item.leadStatus || 'NEW_LEAD',
          leadSourceId: item.leadsource?.leadSourceId || leadSourceId,
          timeDate: item.timeStamp || timenow
        };
  
        this.leads.push(newLead);
        this.allLeads.push(newLead);
        this.updateDisplayedLeads(); // update paginated view
        this.showPreviewRow = false;
      },
      error: (err) => {
        console.error('Error adding lead from source:', err);
      }
    });
  }
  

  // Get the CSS class for a lead's status (for badges)
  getBadgeClass(status: string): string {
    switch (status) {
      case 'NEW_LEAD': return '	bg-blue-100 text-blue-800';
      case 'QUALIFIED': return 'bg-purple-100 text-purple-800';
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

  // Implement the filter
  filterLeads(searchText: string): void {
    const text = searchText.toLowerCase();
    this.leads = this.allLeads.filter(lead =>
      lead.leadName.toLowerCase().includes(text) ||
      lead.leadEmail.toLowerCase().includes(text) ||
      lead.contactNo.toLowerCase().includes(text) ||
      lead.companyName.toLowerCase().includes(text) ||
      lead.companyAdd.toLowerCase().includes(text) ||
      lead.sourceType.toLowerCase().includes(text) ||
      lead.leadStatus.toLowerCase().includes(text) ||
      lead.crmService.serviceName.toLowerCase().includes(text)
    );
  
    this.currentPage = 1; // Reset to first page after filtering
    this.updateDisplayedLeads(); // Important to refresh view
  }
  

}
