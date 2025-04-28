import { LeadSourceInterface } from "../../Leads/lead-source/lead-source-interface";

export interface SalesLeadInterface {
    salesLeadId: number;
    lead: {
        leadStatus: string;
        leadsource: LeadSourceInterface;
        leadId: number;
        leadName: string;
    };  // This will be the source lead data
    leadStatus: string;
    timeStamp: string;
    proposedValue: number;
    proposedDate: string | null;
    closedDate: string | null;
    closedValue: number ;
    dealName: string;
}
